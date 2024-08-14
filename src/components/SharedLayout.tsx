import { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            {showScrollTopButton && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-28 right-5 md:right-10 lg:right-16 w-16 h-16 bg-golden text-white text-xl rounded-full shadow-lg flex items-center justify-center cursor-pointer
                    transition-opacity duration-300 ease-in-out opacity-100
                    ${showScrollTopButton ? 'animate-fade-in' : 'animate-fade-out'}`}
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default SharedLayout;
