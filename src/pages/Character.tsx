import { DetailCard } from '@/components';
import { useLocation } from 'react-router-dom';

export default function Character(props: any) {
  const location = useLocation().state.element;

  return (
    <>
      <DetailCard data={location}></DetailCard>
    </>
  );
}
