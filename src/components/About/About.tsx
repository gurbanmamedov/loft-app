
import AboutContent from "./AboutContent";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
    return (
        <section id={id} className="bg-footer  py-12 md:pt-24">
            <div className="container">
                <AboutContent />
            </div>
        </section>
    );
}

export default About;
