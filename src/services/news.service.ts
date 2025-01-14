import type { News } from '@prisma/client';
import { prisma } from '@/lib/database/prisma';
import type { CreateNews, Files } from '@/lib/schemas/server-actions/news.schema';
import { createBlobs } from '@/services/blob.service';
import { getMediaType } from './media.service';
import { redirect } from 'next/navigation';

async function createNews({ title, content, publishedAt }: CreateNews, images: Files) {
  try {
    await prisma.news.create({
      data: { title, content, publishedAt, images: { createMany: { data: await createBlobs(images) } } },
    });
  } catch (error) {
    console.error(error);
  }
}

async function getNewsById(id: number) {
  try {
    const news = await prisma.news.findFirstOrThrow({
      where: { id },
      select: { id: true, title: true, content: true, publishedAt: true, images: true },
    });
    const media = await Promise.all(news.images.map(getMediaType));
    return { news, media };
  } catch (error) {
    console.error(error);
    redirect('/');
  }
}

export type GroupedNews = Record<string, Record<string, Omit<News, 'content' | 'createdAt' | 'updatedAt'>[]>>;

async function getNewsGroupedByYearAndMonth() {
  try {
    const news = await prisma.news.findMany({
      select: { id: true, title: true, publishedAt: true },
      orderBy: { publishedAt: 'asc' },
    });

    return news.reduce<GroupedNews>((groupedNews, news) => {
      const year = news.publishedAt.getFullYear();
      const month = news.publishedAt.toLocaleString('pt-BR', { month: 'long' });

      if (!groupedNews[year]) {
        groupedNews[year] = {};
      }

      if (!groupedNews[year][month]) {
        groupedNews[year][month] = [];
      }

      groupedNews[year][month].push(news);
      return groupedNews;
    }, {});
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { createNews, getNewsById, getNewsGroupedByYearAndMonth };
