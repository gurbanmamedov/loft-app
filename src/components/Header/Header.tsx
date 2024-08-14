import React from 'react';
import BurgerButton from './BurgerButton';
import NavBar from './NavBar';
import { useBurgerMenu } from '@/context/BurgerButtonContext';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiFacebook, FiYoutube } from 'react-icons/fi';
import { SlSocialVkontakte } from 'react-icons/sl';

const Header: React.FC = () => {
    const { burgerOpen, toggleMenu } = useBurgerMenu();

    const handleMenuItem = () => {
        toggleMenu();
    };


    return (
        <header id="header" className='sticky top-0 w-full bg-siteBackground flex items-center z-20 py-2'>

            <NavBar />
            <BurgerButton toggleMenu={toggleMenu} />
            {burgerOpen && (
                <div className="absolute top-20 w-full h-[500px] bg-siteBackground text-golden rounded-b-xl">
                    <ul className="flex flex-col pt-28 gap-7 items-center w-full h-full">
                        <li onClick={handleMenuItem}>
                            <a href="#about" className="text-golden   text-base">
                                О комплексе
                            </a>
                        </li>
                        <li onClick={handleMenuItem}>
                            <a href="#apartments" className="text-golden   text-base">
                                Каталог квартир
                            </a>
                        </li>
                        <li onClick={handleMenuItem}>
                            <Link to="/mortgage" className="text-golden   text-base">
                                Ипотека
                            </Link>
                        </li>
                        <li onClick={handleMenuItem}>
                            <a href="#testimonials" className="text-golden   text-base">
                                Отзывы
                            </a>
                        </li>
                        <li onClick={handleMenuItem}>
                            <Link to="/contacts" className="text-golden   text-base">
                                Контакты
                            </Link>
                        </li>
                        <div className=''>
                            <ul className='flex gap-3 pt-4'>
                                <li><a href="#"><FiYoutube size={35} /></a></li>
                                <li><a href="#"><SlSocialVkontakte size={35} /></a></li>
                                <li><a href="#"><FiFacebook size={30} /></a></li>
                                <li><a href="#"><FaInstagram size={32} /></a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
