import './globals.css';
import NavSidebar from '@/components/Layout/NavSidebar';
import Header from '@/components/Layout/Header';
import TitleButtons from '@/components/Layout/TitleButtons';
import Content from '@/components/Layout/Content';

export default function RootLayout() {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Fixel+Display:wght@400;700&family=Open+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        style={{ margin: 0, background: '#E7EDF8' }}
        className='font-body bg-[#E7EDF8] text-gray-900'
      >
        <div className='grid min-h-screen grid-cols-[74px_1fr] grid-rows-[64px_96px_1fr]'>
          <NavSidebar />
          <div className='col-start-2 row-start-1'>
            <Header />
          </div>
          <div className='col-start-2 row-start-2'>
            <TitleButtons />
          </div>
          <div className='col-start-2 row-start-3'>
            <Content />
          </div>
        </div>
      </body>
    </html>
  );
}
