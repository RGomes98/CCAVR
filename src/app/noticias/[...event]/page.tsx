import { Event } from '@/components/NewsComponents/Event';
import { redirect } from 'next/navigation';
import { news } from '@/data/news';

export default function News({ params }: { params: { event: string[] } }) {
  const [year, name] = params.event;
  const event = news[year]?.[name];

  if (!event) return redirect('/');

  return <Event eventTitle={event.title} eventText={event.text} eventImages={event.images} />;
}
