import Image, { StaticImageData } from 'next/image';

type CardTopProps = {
  suptitle: string;
  title: string;
  text: string;
  icon: StaticImageData;
};

export default function CardTop({ suptitle, title, text, icon }: CardTopProps) {
  return (
    <div className='bg-white/50 rounded-[20px] p-4 flex flex-col gap-2 shadow-[0_1px_4px_rgba(0,0,0,0.06)]'>
      <div className='flex justify-between items-center pb-10'>
        <div className='flex flex-col gap-1'>
          <p className='text-[12px] text-gray-400 m-0'>{suptitle}</p>
          <h3 className='m-0'>{title}</h3>
        </div>

        <Image src={icon} alt={title} width={32} height={32} />
      </div>

      <p className='m-0 text-[#07142980]'>{text}</p>
    </div>
  );
}
