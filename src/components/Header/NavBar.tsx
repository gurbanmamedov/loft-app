import NavList from './NavList';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';


const NavBar: React.FC = () => {

    return (
        <>
            <nav className="px-3 flex container justify-between items-center pt-3">
                <Logo />
                <BurgerMenu />
                <NavList />
            </nav>

        </>
    );
};

export default NavBar;
