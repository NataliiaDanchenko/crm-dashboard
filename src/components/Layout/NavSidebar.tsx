import Nav1 from '@/components/icons/Nav1';
import Nav2 from '@/components/icons/Nav2';
import Nav3 from '@/components/icons/Nav3';
import NavCart from '@/components/icons/NavCart';
import NavArrows from '@/components/icons/NavArrows';
import NavCalendar from '@/components/icons/NavCalendar';
import Icon from '@/components/Icon/Icon';
import logo from '@/assets/logo.svg';
import backout from '@/assets/Sidebar.svg';

export default function NavSidebar() {
  const navIcons = [Nav1, Nav2, Nav3, NavCart, NavArrows, NavCalendar];

  return (
    <aside className='w-[74px] h-screen grid grid-rows-[auto_110px_1fr_auto] items-start py-4'>
      <div className='flex justify-center'>
        <img src={logo.src} alt='logo' />
      </div>

      <div />

      <ul className='flex flex-col gap-3.5 bg-[#0714290D] rounded-[20px] justify-self-center p-2.5 list-none m-0'>
        {navIcons.map((IconSvg, idx) => (
          <li key={idx}>
            <Icon Svg={IconSvg} />
          </li>
        ))}
      </ul>

      <div className='self-end -mb-[50vh] pl-4'>
        <img src={backout.src} alt='backout' />
      </div>
    </aside>
  );
}
