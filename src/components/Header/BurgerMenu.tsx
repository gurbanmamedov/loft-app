import React from "react";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,

} from "../ui/drawer";
import { MenuIcon } from "lucide-react";
import logo from '../../assets/logo.svg'
import { FaInstagram } from "react-icons/fa";


const BurgerMenu: React.FC = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger>
                <div className="text-white md:hidden"><MenuIcon /></div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="inline-flex self-end p-4">
                    <DrawerHeader>
                        <DrawerTitle className="sr-only">
                            Меню
                        </DrawerTitle>
                        <img src={logo} width={120} height={60} />
                    </DrawerHeader>
                </div>
                <div className="flex flex-col pr-8 ">
                    <ul className="flex flex-col items-end gap-5 text-golden mb-6">
                        <li><a href="#about" aria-label="О нас">О нас</a></li>
                        <li><a href="#apartments" aria-label="Наши Квартиры">Наши Квартиры</a></li>
                        <li><a href="#" aria-label="Ипотека">Ипотека</a></li>
                        <li><a href="#about" aria-label="Район">Район</a></li>
                        <li><a href="#about" aria-label="Контакты">Контакты</a></li>
                    </ul>

                    <ul className="flex justify-end gap-5 text-golden">
                        <li><a href=""><FaInstagram size={30} /></a></li>
                        <li><a href=""><FaInstagram size={30} /></a></li>
                        <li><a href=""><FaInstagram size={30} /></a></li>
                        <li><a href=""><FaInstagram size={30} /></a></li>
                    </ul>
                </div>


            </DrawerContent>
        </Drawer>
    );
};

export default BurgerMenu;
