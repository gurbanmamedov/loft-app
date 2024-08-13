import { MenuIcon } from "lucide-react";

interface BurgerButtonProps {
    toggleMenu: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ toggleMenu }) => {
    return (
        <div onClick={toggleMenu} className="text-white md:hidden pr-2">
            <MenuIcon />
        </div>


    )
};

export default BurgerButton;
