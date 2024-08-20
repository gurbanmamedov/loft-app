import React from 'react';
import NavList from './NavList';
import Logo from './Logo';
import BurgerButton from './BurgerButton';


const NavBar: React.FC = () => {
    return (
        <nav className="px-3 flex container justify-between items-center py-2">
            <Logo />
            <NavList />
            <BurgerButton />
        </nav>
    );
};

export default NavBar;
