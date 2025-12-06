import iconSearch from '@/assets/search-md.svg';
import iconBell from '@/assets/icons-header/bell-01.svg';
import iconSun from '@/assets/icons-header/sun.svg';
import avatar from '@/assets/icons-header/Rectangle 85.png';

export default function Header() {
  return (
    <header className='h-16 flex items-center justify-between px-6 mt-2'>
      <div className='bg-[#0714290A] p-3.5 rounded-full'>
        <img src={iconSearch.src} alt='search icon' />
      </div>

      <div className='flex items-center gap-3'>
        <div className='bg-[#0714290A] p-3.5 rounded-full'>
          <img src={iconBell.src} alt='bell icon' />
        </div>
        <div className='bg-[#0714290A] p-3.5 rounded-full'>
          <img src={iconSun.src} alt='sun icon' />
        </div>
        <div>
          <img src={avatar.src} alt='avatar' />
        </div>
      </div>
    </header>
  );
}
