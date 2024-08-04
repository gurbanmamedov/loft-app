import React from 'react'
import { navLinks } from '../data'

const NavItem = () => {
    return (
        <>
            {navLinks.map((link) => (
                <li key={link.name}>
                    <a
                        className="text-white hover:text-golden ease-in-out duration-300 text-base"
                        href={link.href}
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </>
    )
}

export default NavItem