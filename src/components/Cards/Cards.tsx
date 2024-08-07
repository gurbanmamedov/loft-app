import apartment1 from "../../assets/01.jpg";
import apartment2 from "../../assets/02.jpg";
import apartment3 from "../../assets/03.jpg";
import apartment4 from "../../assets/04.jpg";

const Cards = () => {
  return (
    <section className="py-12 md:py-24" id="apartments">
      <div className="container mx-auto px-4">
        <div className="w-full mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-5xl text-golden max-w-[600px]">
            Наши квартиры
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {[apartment1, apartment2, apartment3, apartment4].map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg relative will-change-transform">
              <img
                src={src}
                alt={`Residence ${index + 1}`}
                width={540}
                height={320}
                className="w-full object-cover"
                style={{ maxWidth: '100%', maxHeight: '320px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white p-2 md:p-2.5 lg:p-4">
                <div className="text-lg font-semibold">
                  {index === 0 && 'Пентхаус “Loft Олимп”'}
                  {index === 1 && 'Апартаменты “Nice Loft”'}
                  {index === 2 && 'Апартаменты “Loft Studio”'}
                  {index === 3 && 'Loft квартира “Престиж”'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
