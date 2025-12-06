import CardTop from '@/components/UI/CardTop';
import { cardTopData } from '@/lib/mockData';

export default function CardTopList() {
  return (
    <div className='grid grid-cols-3 gap-4 mb-6'>
      {cardTopData.map((item) => (
        <CardTop key={item.title} {...item} />
      ))}
    </div>
  );
}
