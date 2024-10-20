import { Event } from '@/components/NewsComponents/Event';
import { newsData } from '@/data-access/news';
import { fetchMediaType } from '@/utils/news';
import { redirect } from 'next/navigation';

export default async function News({ params: { id } }: { params: { id: string } }) {
  let news: Awaited<ReturnType<typeof newsData.getById>>;
  let media: Awaited<ReturnType<typeof fetchMediaType>>[];

  try {
    news = await newsData.getById(Number(id));
    media = await Promise.all(news.images.map(fetchMediaType));
  } catch (error) {
    redirect('/');
  }

  return <Event title={news.title} content={news.content} images={media} />;
}
