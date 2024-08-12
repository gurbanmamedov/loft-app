import React, { useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { useBurgerMenu } from '../../context/BurgerMenuContext';
import { motion } from 'framer-motion';

const BurgerMenu: React.FC = () => {
    const { isOpen, closeDrawer, openDrawer } = useBurgerMenu();

    useEffect(() => {
        if (isOpen) {
            // Disable body scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Enable body scroll
            document.body.style.overflow = 'auto';
        }

        // Clean up the effect
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleLinkClick = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeDrawer();
        }
    };

    const handleOutsideClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.menu-content')) {
            closeDrawer();
        }
    };

    return (
        <>
            {!isOpen && (
                <button
                    className="text-white md:hidden flex items-center z-50"
                    onClick={openDrawer}
                >
                    <MenuIcon />
                </button>
            )}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-40 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleOutsideClick}
                >
                    <motion.div
                        className="fixed inset-0 h-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isOpen ? 0.5 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="fixed top-0 right-0 h-screen w-full max-w-72 md:w-4/5 bg-siteBackground"
                        initial={{ x: '100%' }}
                        animate={{ x: isOpen ? 0 : '100%' }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col h-full">
                            <button
                                className="text-golden p-4 self-end"
                                onClick={closeDrawer}
                            >
                                <XIcon />
                            </button>

                            <div className="flex flex-col gap-16 flex-grow overflow-y-auto p-4 menu-content">
                                <ul className="flex flex-col items-end gap-5 text-white mb-6">
                                    <li><a href="#about" aria-label="О нас" onClick={handleLinkClick("about")}>О нас</a></li>
                                    <li><a href="#apartments" aria-label="Наши Квартиры" onClick={handleLinkClick("apartments")}>Наши Квартиры</a></li>
                                    <li><a href="#mortgage" aria-label="Ипотека" onClick={handleLinkClick("mortgage")}>Ипотека</a></li>
                                    <li><a href="#district" aria-label="Район" onClick={handleLinkClick("district")}>Район</a></li>
                                    <li><a href="#contacts" aria-label="Контакты" onClick={handleLinkClick("contacts")}>Контакты</a></li>
                                </ul>
                                <ul className="flex justify-end gap-5 text-golden">
                                    <li><a href="#"><FaInstagram size={30} /></a></li>
                                    <li><a href="#"><FaInstagram size={30} /></a></li>
                                    <li><a href="#"><FaInstagram size={30} /></a></li>
                                    <li><a href="#"><FaInstagram size={30} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default BurgerMenu;
