import NavList from './NavList';
import Logo from './Logo';


const NavBar: React.FC = () => {

    return (
        <>
            <nav className="px-3 flex container justify-between items-center py-2">
                <Logo />       
                <NavList />
            </nav>

        </>
    );
};

export default NavBar;
