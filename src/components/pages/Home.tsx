import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Cards from "../Cards/Cards";
import Hero from "../Hero/Hero";
import { Testimonials } from "../Testimonials/Testimonials";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.anchor) {
            const element = document.getElementById(location.state.anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.state]);

    return (
        <div>
            <Hero />
            <Benefits />
            <About id="about" />  
            <Cards />
            <Testimonials />
        </div>
    );
};

export default Home;
