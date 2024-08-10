import { apartments } from '../data';
import CardsItem from './CardsItem';

const CardsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {apartments.map((apartment) => (
        <CardsItem key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default CardsList;