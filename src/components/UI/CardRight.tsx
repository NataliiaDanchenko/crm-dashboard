import Image, { StaticImageData } from 'next/image';

type CardRightProps = {
  title: string;
  text: string;
  icon: StaticImageData;
};

export default function CardRight({ title, text, icon }: CardRightProps) {
  return (
    <div className='flex flex-col items-start gap-2 bg-white rounded-xl p-4 shadow-sm'>
      {icon ? (
        <div className='w-10 h-10'>
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className='w-full h-full object-contain'
          />
        </div>
      ) : (
        <div className='w-10 h-10' />
      )}

      <div className='flex flex-col items-start gap-1'>
        <h3 className='font-heading text-base md:text-lg text-gray-900'>
          {title}
        </h3>
        <p className='font-body text-sm text-gray-500'>{text}</p>
      </div>
    </div>
  );
}
