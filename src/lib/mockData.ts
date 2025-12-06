import iconTopCard1 from '@/assets/icons-top-cards/Icon.svg';
import iconTopCard2 from '@/assets/icons-top-cards/Frame (1).svg';
import iconTopCard3 from '@/assets/icons-top-cards/Icon (1).svg';
import iconRightCard1 from '@/assets/icons-right-cards/Icon (2).svg';
import iconRightCard2 from '@/assets/icons-right-cards/Icon (3).svg';
import iconRightCard3 from '@/assets/icons-right-cards/Icon (4).svg';


export const chartData = [
  { month: 'Jan', inventory: 60, demand: 50 },
  { month: 'Feb', inventory: 40, demand: 30 },
  { month: 'Mar', inventory: 30, demand: 35 },
  { month: 'Apr', inventory: 45, demand: 42 },
  { month: 'May', inventory: 72, demand: 18 },
  { month: 'Jun', inventory: 80, demand: 65 },
  { month: 'Jul', inventory: 55, demand: 70 },
  { month: 'Aug', inventory: 40, demand: 55 },
  { month: 'Sep', inventory: 50, demand: 45 },
  { month: 'Oct', inventory: 65, demand: 60 },
  { month: 'Nov', inventory: 70, demand: 68 },
  { month: 'Dec', inventory: 75, demand: 70 },
]

export const cardTopData = [
  {
    suptitle: 'Forecasting Method',
    icon: iconTopCard1,
    title: 'ROBUST_ROS',
    text: 'A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.',
  },
  {
    suptitle: 'Location Support',
    icon: iconTopCard2,
    title: 'Multi-Location',
    text: 'Each location is forecasted independently to prevent overstock and align supply with demand.',
  },
  {
    suptitle: 'Override Support',
    icon: iconTopCard3,
    title: 'Available',
    text: 'Manual edits can be applied per SKU to adjust forecasts when deviations occur, ensuring more accurate and responsive inventory planning.',
  },
]

export const cardRightData = [
  {
    icon: iconRightCard1,
    title: 'Robust Rate of Sale',
    text: 'Consistent forecasting methodology that considers location-specific demand patterns and provides reliable predictions across all inventory items.',
  },
  {
    icon: iconRightCard2,
    title: 'Location Awareness',
    text: 'Forecasts are generated per location, allowing for accurate inventory projections that account for location-specific demand variations.',
  },
  {
    icon: iconRightCard3,
    title: 'Manual Overrides',
    text: 'When automatic forecasting needs adjustment, manual overrides can be applied at the variant level for specific time periods.',
  },
]
