import { Link } from 'react-router-dom';

interface LinkItem {
    id?: string;
    label: string;
    href?: string;
    to?: string;
}

interface FooterLinksProps {
    links: LinkItem[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
    return (
        <ul className="flex flex-col gap-3 pt-3 text-white text-left text-sm tracking-tight">
            {links.map((link) => (
                <li key={link.id || link.href || link.to}>
                    {link.to ? (
                        <Link
                            to={link.to}
                            className="md:hover:text-golden md:transition md:duration-300"
                            aria-label={link.label}
                        >
                            {link.label}
                        </Link>
                    ) : (
                        <a
                            href={link.href}
                            className="md:hover:text-golden md:transition md:duration-300"
                            aria-label={link.label}
                        >
                            {link.label}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default FooterLinks;
