import apartment1 from "../../assets/01.jpg";
import apartment2 from "../../assets/02.jpg";
import apartment3 from "../../assets/03.jpg";
import apartment4 from "../../assets/04.jpg";

const Cards = () => {
    return (
        <section className="md:py-24" id="apartments">
            <div className="container">
                <div className="w-full ">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-5xl/none text-golden max-w-[600px] mb-[60px]">Наши квартиры</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    <div className="rounded-lg overflow-hidden shadow-lg relative">
                        <img
                            src={apartment1}
                            alt="Residence 1"
                            width={540}
                            height={320}
                            className="w-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white p-2 md:p-2.5  lg:p-4">
                            <div className="text-lg font-semibold">Пентхаус “Loft Олимп”</div>
                        </div>
                    </div>
                    <div className="bg-background rounded-lg overflow-hidden shadow-lg relative">
                        <img
                            src={apartment2}
                            alt="Residence 2"
                            width={540}
                            height={320}
                            className="w-full  object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white p-2 md:p-2.5  lg:p-4">
                            <div className="text-lg font-semibold">Апартаменты “Nice Loft”</div>
                        </div>
                    </div>
                    <div className="bg-background rounded-lg overflow-hidden shadow-lg relative">
                        <img
                            src={apartment3}
                            alt="Residence 3"
                            width={540}
                            height={320}
                            className="w-full  object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white p-2 md:p-2.5  lg:p-4">
                            <div className="text-lg font-semibold">Апартаменты “Loft Studio”</div>
                        </div>
                    </div>
                    <div className="bg-background rounded-lg overflow-hidden shadow-lg relative">
                        <img
                            src={apartment4}
                            alt="Residence 4"
                            width={540}
                            height={320}
                            className="w-full  object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white p-2 md:p-2.5  lg:p-4">
                            <div className="text-lg font-semibold">Loft квартира “Престиж”</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cards;