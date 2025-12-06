'use client';

import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

type ButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
  icon?: StaticImageData | ReactNode;
};

export function Button({ text, isActive, onClick, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2.5
        rounded-[10px]
        ${
          isActive
            ? 'bg-blue-600 text-white px-[18px] py-2.5'
            : 'bg-transparent text-blue-600 px-[18px] py-2.5 hover:opacity-85'
        }
        font-medium
      `}
    >
      {!isActive && icon && (
        <>
          {typeof icon === 'object' && 'src' in icon ? (
            <Image
              src={icon as StaticImageData}
              alt={text}
              width={20}
              height={20}
            />
          ) : (
            icon
          )}
        </>
      )}
      {text}
    </button>
  );
}
