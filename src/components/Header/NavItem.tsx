import { navLinks } from '../data'

const NavItem = () => {
    return (
        <>
            {navLinks.map(({ name, href, }) => (
                <li key={name}>
                    <a
                        className="text-white hover:text-golden ease-in-out duration-300 text-base"
                        href={href}
                        aria-label={name}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </>
    )
}

export default NavItem