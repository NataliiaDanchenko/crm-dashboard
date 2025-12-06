'use client';

import { chartData } from '@/lib/mockData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Dot,
} from 'recharts';

const safetyStockLevel = 25;

const formattedData = chartData.map((item) => ({
  ...item,
  demand: item.demand, 
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || payload.length === 0) return null;

  const inventory = payload.find((p: any) => p.dataKey === 'inventory')?.value;
  const demand = payload.find((p: any) => p.dataKey === 'demand')?.value;

  return (
    <div className='bg-white p-3 rounded-xl border border-gray-200 shadow-md w-56'>
      <p className='text-xs font-semibold text-gray-500 mb-2'>
        Week of {label} 12
      </p>

      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <span className='text-blue-600 font-bold'>{inventory}</span>
          <span className='text-gray-700 text-sm ml-2'>units</span>
          <span className='text-gray-400 text-xs ml-auto'>Inventory</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-gray-600 font-bold'>{demand}</span>
          <span className='text-gray-700 text-sm ml-2'>units</span>
          <span className='text-gray-400 text-xs ml-auto'>Weekly Demand</span>
        </div>
      </div>

      {label === 'May' && (
        <p className='text-xs text-gray-400 mt-2'>PO Arrival · Nov 15 (+120)</p>
      )}
    </div>
  );
};

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (payload.month === 'May') {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={7}
        fill='white'
        stroke={props.stroke || '#1a73e8'}
        strokeWidth={4}
      />
    );
  }
  return <Dot {...props} r={4} fill={props.stroke} />;
};

export default function Chart() {
  return (
    <div className='bg-white rounded-2xl border border-gray-200 px-6 py-6 shadow-sm'>
      <h3 className='text-sm font-semibold text-gray-700 mb-4'>
        Inventory Coverage (90 days)
      </h3>
      <h4>Optimized inventory projections with upcoming POs</h4>

      <ResponsiveContainer width='100%' height={380}>
        <LineChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid stroke='#f1f5f9' strokeDasharray='4 4' />

          <XAxis
            dataKey='month'
            tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
          />

          <ReferenceLine
            y={safetyStockLevel}
            stroke='#10b981' 
            strokeDasharray='6 6'
            strokeWidth={2}
          />

          <Line
            type='monotone'
            dataKey='inventory'
            stroke='#3b82f6'
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8, strokeWidth: 3 }}
            name='Projected Inventory'
          />
          <Line
            type='monotone'
            dataKey='demand'
            stroke='#94a3b8'
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8, strokeWidth: 3 }}
            name='Demand'
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: '#e2e8f0', strokeWidth: 2 }}
          />

          <Legend
            verticalAlign='bottom'
            height={36}
            iconType='line'
            formatter={(value) => (
              <span className='text-gray-700 font-medium'>{value}</span>
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

