import React from 'react';
import { useBurgerMenu } from '../../context/BurgerMenuContext';
import logo from '../../assets/logo.svg';

const Logo: React.FC = () => {
    const { isOpen } = useBurgerMenu();

    return (
        <a
            className={`transition-all duration-300 ${isOpen ? 'z-10' : 'z-50'}`}
            href='/'
        >
            <img src={logo} alt="Logo" />
        </a>
    );
}

export default Logo;
