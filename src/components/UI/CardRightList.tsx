import CardRight from '@/components/UI/CardRight';
import { cardRightData } from '@/lib/mockData';

export default function CardRightList() {
  return (
    <div className='bg-white/50 rounded-[20px] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col gap-4'>
      <div>
        <h2 className='m-0 font-heading text-[24px]'>How Forecasting Works</h2>
        <p className='mt-2 text-[14px] text-[#07142980] font-body'>
          The forecasting system has been streamlined to use the robust rate of
          sale method across all locations for improved consistency and
          reliability.
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        {cardRightData.map((item) => (
          <CardRight key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
