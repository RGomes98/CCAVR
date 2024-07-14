import { Event } from '@/components/NewsComponents/Event';
import { newsData } from '@/data-access/news';
import { redirect } from 'next/navigation';

export default async function News({ params: { id } }: { params: { id: string } }) {
  let news: Awaited<ReturnType<typeof newsData.getById>>;

  try {
    news = await newsData.getById(Number(id));
  } catch (error) {
    redirect('/');
  }

  return <Event title={news.title} content={news.content} images={news.images} />;
}
