import React from 'react';
import { useBurgerMenu } from '@/context/BurgerButtonContext';
import { MenuIcon } from 'lucide-react';

const BurgerButton: React.FC = () => {
    const { toggleMenu } = useBurgerMenu();

    return (
        <div onClick={toggleMenu} className="text-white md:hidden">
            <MenuIcon />
        </div>
    );
};

export default BurgerButton;
