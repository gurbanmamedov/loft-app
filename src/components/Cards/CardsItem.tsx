import { Apartment } from "../data";

interface CardsItemProps {
    apartment: Apartment;
}

const CardsItem: React.FC<CardsItemProps> = ({ apartment }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg relative">
            <div className="w-full h-80 md:h-64 lg:h-72 bg-gray-200">
                <img
                    src={apartment.image}
                    alt={apartment.name}
                    className="w-full h-full object-cover"
                    style={{ maxWidth: '100%', height: '100%' }}
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white p-2 md:p-2.5 lg:p-4">
                <div className="text-lg font-semibold">{apartment.name}</div>
            </div>
        </div>
    );
};

export default CardsItem;