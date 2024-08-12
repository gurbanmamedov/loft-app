import { MapPin, Phone } from 'lucide-react';


function HeroContacts() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center md:flex-row md:gap-10 md:justify-center md:items-center md:w-full md:max-w-4xl">
            <a className="flex md:justify-between items-center text-white hover:text-golden transition duration-300" href="#">
                <MapPin />
                Наб. реки Фонтанки 10-15
            </a>

            <a className="flex gap-3 text-white hover:text-golden transition duration-300 " href="tel:+88121234567">
                <Phone /> 8 (812) 123-45-67
            </a>
        </div>

    );
}

export default HeroContacts