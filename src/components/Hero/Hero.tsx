
import HeroTitle from './HeroTitle'
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section

            className={`${styles.heroSection} lg:pb-[72px]`}
        >
            <HeroTitle />
        </section >
    )
}

export default Hero