import bgImage from '../../assets/header-bg.jpg'
import HeroTitle from "./HeroTitle"


const Hero = () => {
    return (
        <section>
            <div className="relative h-screen flex items-center justify-center text-center">
                <img
                    src={bgImage}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover md:object-cover md:w-full md:h-full"
                    style={{ maxWidth: '100%', maxHeight: '100dvh', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgb(36,43,51)_4.979%] via-[rgba(45,52,60,0.38)_51.042%] to-[#242B33_86.188%]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#242B33] to-transparent opacity-60"></div>
                <div className="relative z-10">
                    <HeroTitle />
                </div>
            </div>

        </section >
    )
}

export default Hero