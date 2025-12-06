import CardRightList from '../UI/CardRightList';
import CardTopList from '../UI/CardTopList';
import Chart from '../UI/Chart';

export default function Content() {
  return (
    <div className='grid grid-cols-[1fr_320px] gap-6 p-6'>
      <div>
        <CardTopList />
        <Chart />
      </div>
      <CardRightList />
    </div>
  );
}
