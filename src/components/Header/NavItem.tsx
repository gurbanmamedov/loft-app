import {  NavLink } from 'react-router-dom'
import { navLinks } from '../data'

const NavItem = () => {
    return (
        <>
            {navLinks.map((link) => (
                <li className="text-white hover:text-golden ease-in-out duration-300 text-base" key={link.href}>
                    {link.href.startsWith("#") ? (
                        <a href={link.href}>{link.name}</a>
                    ) : (
                        <NavLink
                            to={link.href}
                            className={({ isActive }) => isActive ? 'active-class' : ''} 
                        >
                            {link.name}
                        </NavLink>
                    )}
                </li>
            ))}
        </>
    )
}

export default NavItem