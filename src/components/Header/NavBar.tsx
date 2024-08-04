
import NavList from './NavList'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'

const NavBar = () => {
    return (
        <nav className="px-3 flex container justify-between items-center pt-3 relative">
            <Logo />
            <BurgerMenu />
            <NavList />
        </nav>
    )
}

export default NavBar