import React, { createContext, useContext, useState } from 'react';

interface BurgerMenuContextProps {
    isOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
}

const BurgerMenuContext = createContext<BurgerMenuContextProps | undefined>(undefined);

export const useBurgerMenu = () => {
    const context = useContext(BurgerMenuContext);
    if (!context) {
        throw new Error('useBurgerMenu must be used within a BurgerMenuProvider');
    }
    return context;
};

export const BurgerMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);

    return (
        <BurgerMenuContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
            {children}
        </BurgerMenuContext.Provider>
    );
};
