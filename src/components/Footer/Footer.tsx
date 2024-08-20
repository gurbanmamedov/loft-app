import LogoSection from './LogoSection';
import FooterLinks from './FooterLinks';
import ContactInfo from './ContactInfo';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
    const footerLinks = [
        { href: "/", label: "Поселение и переезд" },
        { href: "/", label: "Сервисные услуги" },
        { href: "/", label: "Экологическая устойчивость" },
        { href: "/", label: "Инвестиционные возможности" },
        { href: "/", label: "Программа лояльности" },
    ];

    return (
        <footer className="bg-footer pt-14 pb-12">
            <div className="container">
                <div className="flex flex-col gap-5 md:flex md:flex-row justify-between">
                    <LogoSection />
                        <FooterLinks links={footerLinks} />
                    <div className="flex flex-col gap-3 pt-3">
                        <ContactInfo />
                        <SocialMediaLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
