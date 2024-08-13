import React from 'react';
import BurgerButton from './BurgerButton';
import NavBar from './NavBar';
import { useBurgerMenu } from '@/context/BurgerButtonContext';
import { FaInstagram } from 'react-icons/fa';

const Header: React.FC = () => {
    const { burgerOpen, toggleMenu } = useBurgerMenu();
    const handleMenuItem = () => {
        toggleMenu()
    }
    return (
        <header id="header" className='sticky top-0 w-full backdrop-blur-sm flex items-center z-20'>
            <NavBar />
            <BurgerButton toggleMenu={toggleMenu} />
            {
                burgerOpen && (
                    <div className="absolute top-20 w-full h-[500px] bg-siteBackground text-golden">
                        <ul className="flex flex-col pt-28 gap-7 items-center w-full h-full">
                            <li onClick={handleMenuItem}><a href="#about">О комплексе</a></li>
                            <li onClick={handleMenuItem}>Каталог квартир</li>
                            <li onClick={handleMenuItem}>Район</li>
                            <li onClick={handleMenuItem}>Ипотека</li>
                            <li onClick={handleMenuItem}>Контакты</li>
                            <div className=''>
                                <ul className='flex gap-3 pt-4'>
                                    <li><a href="#"><FaInstagram size={28} /></a></li>
                                    <li><a href="#"><FaInstagram size={28} /></a></li>
                                    <li><a href="#"><FaInstagram size={28} /></a></li>
                                    <li><a href="#"><FaInstagram size={28} /></a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                )
            }
        </header>
    );
};

export default Header;
