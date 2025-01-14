import { Event } from '@/components/NewsComponents/Event';
import { getNewsById } from '@/services/news.service';

export default async function News({ params: { id } }: { params: { id: string } }) {
  const data = await getNewsById(Number(id));
  return <Event title={data.news.title} content={data.news.content} images={data.media} />;
}
