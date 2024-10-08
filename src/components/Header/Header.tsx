import React from 'react';
import NavBar from './NavBar';
import { useBurgerMenu } from '@/context/BurgerButtonContext';
import { Link } from 'react-router-dom';
import { FiFacebook, FiYoutube } from 'react-icons/fi';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';

const Header: React.FC = () => {
    const { burgerOpen } = useBurgerMenu();

    return (
        <header
            id="header"
            className={`sticky top-0 w-full bg-siteBackground flex items-center z-20 py-2 transition-shadow duration-300 ${burgerOpen ? 'shadow-none' : 'shadow-[0_14px_28px_rgba(0,0,0,0.2)]'
                }`}
        >
            <NavBar />
            {burgerOpen && (
                <div className="absolute top-20 w-full h-[400px] bg-siteBackground text-golden rounded-b-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)]">
                    <ul className="flex flex-col pt-16 gap-7 items-center w-full h-full">
                        <li>
                            <a href="#about" className="text-golden text-base">
                                О комплексе
                            </a>
                        </li>
                        <li>
                            <a href="#apartments" className="text-golden text-base">
                                Каталог квартир
                            </a>
                        </li>
                        <li>
                            <Link to="/mortgage" className="text-golden text-base">
                                Ипотека
                            </Link>
                        </li>
                        <li>
                            <a href="#testimonials" className="text-golden text-base">
                                Отзывы
                            </a>
                        </li>
                        <li>
                            <Link to="/contacts" className="text-golden text-base">
                                Контакты
                            </Link>
                        </li>
                        <div>
                            <ul className="flex gap-3 pt-4">
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
