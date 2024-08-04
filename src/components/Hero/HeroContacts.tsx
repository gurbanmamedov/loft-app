import { MapPin, Phone } from 'lucide-react';
import React from 'react'

const HeroContacts = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center md:flex md:flex-row  md:gap-[90px]">
            <a className="flex md:justify-between items-center text-white hover:text-[#D4C17F] transition duration-300" href="#">
                <MapPin />
                Наб. реки Фонтанки 10-15
            </a>

            <a className="flex gap-3 text-white hover:text-[#D4C17F] transition duration-300 " href="tel:+88121234567">
                <Phone /> 8 (812) 123-45-67
            </a>
        </div>
    );
}

export default HeroContacts