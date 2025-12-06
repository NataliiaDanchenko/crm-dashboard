'use client';

import { useState } from 'react';
import { Button } from '../UI/Button';
import icon from '@/assets/eye.svg';

export default function TitleButtons() {
  const [active, setActive] = useState<'forecast' | 'settings' | null>(null);

  return (
    <div className='bg-[#E7EDF8] p-6 flex justify-between items-center'>
      <div className='flex flex-col gap-1.5'>
        <h1 className='font-sans text-4xl font-bold'>
          Location-Based Forecasting
        </h1>
        <p className='text-gray-500 m-0'>
          Robust Rate of Sale forecasting with location-aware calculations
        </p>
      </div>

      <div className='flex gap-5 text-base font-body'>
        <Button
          text='View Forecast Accuracy'
          isActive={active === 'forecast'}
          icon={icon}
          onClick={() => setActive('forecast')}
        />
        <Button
          text='Adjust Forecast Settings'
          isActive={active === 'settings'}
          onClick={() => setActive('settings')}
        />
      </div>
    </div>
  );
}
