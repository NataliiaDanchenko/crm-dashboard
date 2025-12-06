import React, { FC } from 'react';

export interface IconProps {
  Svg: FC<React.SVGProps<SVGSVGElement>>;
  className?: string; 
  iconClassName?: string; 
}

const Icon: FC<IconProps> = ({ Svg, className, iconClassName }) => {
  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center transition duration-200 bg-transparent hover:bg-white ${className}`}
    >
      <Svg
        className={`text-[#071429] transition duration-200 hover:text-[#0049ff] ${iconClassName}`}
      />
    </div>
  );
};

export default Icon;
