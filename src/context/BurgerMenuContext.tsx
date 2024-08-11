import React, { createContext, useContext, useState, useCallback } from 'react';

interface BurgerMenuContextType {
    isOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;  
}

const BurgerMenuContext = createContext<BurgerMenuContextType | undefined>(undefined);

export const BurgerMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDrawer = useCallback(() => setIsOpen(true), []);
    const closeDrawer = useCallback(() => setIsOpen(false), []);
    const toggleDrawer = useCallback(() => setIsOpen(prev => !prev), []); 

    return (
        <BurgerMenuContext.Provider value={{ isOpen, openDrawer, closeDrawer, toggleDrawer }}>
            {children}
        </BurgerMenuContext.Provider>
    );
};

export const useBurgerMenu = () => {
    const context = useContext(BurgerMenuContext);
    if (context === undefined) {
        throw new Error('useBurgerMenu must be used within a BurgerMenuProvider');
    }
    return context;
};
