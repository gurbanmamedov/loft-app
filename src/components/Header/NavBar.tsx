
import NavList from './NavList'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'

const NavBar = () => {
    return (
        <nav className="flex container justify-between items-center pt-3">
            <Logo />
            <BurgerMenu />
            <NavList />
        </nav>
    )
}

export default NavBar