// BurgerMenuContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BurgerMenuContextType {
    burgerOpen: boolean;
    toggleMenu: () => void;
}

const BurgerMenuContext = createContext<BurgerMenuContextType | undefined>(undefined);

export const useBurgerMenu = () => {
    const context = useContext(BurgerMenuContext);
    if (!context) {
        throw new Error('useBurgerMenu must be used within a BurgerMenuProvider');
    }
    return context;
};

export const BurgerMenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setBurgerOpen(prev => !prev);
    };

    return (
        <BurgerMenuContext.Provider value={{ burgerOpen, toggleMenu }}>
            {children}
        </BurgerMenuContext.Provider>
    );
};
