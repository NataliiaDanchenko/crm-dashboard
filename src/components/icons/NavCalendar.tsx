import { FC, SVGProps } from 'react';

const UploadIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width='46'
      height='46'
      viewBox='0 0 46 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props} 
    >
      {/* Background */}
      <path
        d='M0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23Z'
        fill='white'
        fillOpacity='0.05'
      />

      {/* Upload arrow */}
      <path
        d='M20.5 21.75L22.1667 23.4167L25.9167 19.6667M29.6667 30.5V19.5C29.6667 18.0999 29.6667 17.3998 29.3942 16.865C29.1545 16.3946 28.772 16.0122 28.3016 15.7725C27.7669 15.5 27.0668 15.5 25.6667 15.5H20.3333C18.9332 15.5 18.2331 15.5 17.6984 15.7725C17.228 16.0122 16.8455 16.3946 16.6058 16.865C16.3333 17.3998 16.3333 18.0999 16.3333 19.5V30.5L18.625 28.8333L20.7083 30.5L23 28.8333L25.2917 30.5L27.375 28.8333L29.6667 30.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UploadIcon;
