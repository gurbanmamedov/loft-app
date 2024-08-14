import LogoSection from './LogoSection';
import FooterLinks from './FooterLinks';
import ContactInfo from './ContactInfo';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
    const firstLinks = [
        { href: "#about", label: "О комплексе" },
        { href: "#district", label: "Район" },
        { href: "#apartments", label: "Каталог квартир" },
        { to: "/mortgage", label: "Ипотека" },
        { to: "/contacts", label: "Контакты" },
    ];

    const secondLinks = [
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
                    <div className="flex flex-col gap-4 md:flex lg:flex-row lg:gap-[166px]">
                        <FooterLinks links={firstLinks} />
                        <FooterLinks links={secondLinks} />
                    </div>
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
