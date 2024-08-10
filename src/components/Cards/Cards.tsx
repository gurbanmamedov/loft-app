

import CardsList from './CardsList';

const Cards: React.FC = () => {
  return (
    <section className="py-12 md:py-24" id="apartments">
      <div className="container mx-auto px-4">
        <div className="w-full mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-5xl text-golden max-w-[600px]">
            Наши квартиры
          </h2>
        </div>
        <CardsList />
      </div>
    </section>
  );
};

export default Cards;