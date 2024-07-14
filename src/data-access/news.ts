import type { CreateSchema, FileSchema } from '@/lib/schemas/server-actions/news.schema';
import { createBlobs } from '@/helpers/createBlobs';
import type { Image, News } from '@prisma/client';
import { prisma } from '@/lib/database/prisma';

export type GroupedNews = Record<string, Record<string, Omit<News, 'content' | 'createdAt' | 'updatedAt'>[]>>;

const create = async ({ title, content, publishedAt }: CreateSchema, images: FileSchema) => {
  await prisma.news.create({
    data: { title, content, publishedAt, images: { createMany: { data: await createBlobs(images) } } },
  });
};

const getById = async (id: number) => {
  return await prisma.news.findFirstOrThrow({
    where: { id },
    select: { id: true, title: true, content: true, publishedAt: true, images: true },
  });
};

const getGroupedByYearAndMonth = async () => {
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
};

export const newsData = { create, getById, getGroupedByYearAndMonth };
