import React from "react";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,

} from "../ui/drawer";
import { MenuIcon } from "lucide-react";
import logo from '../../assets/logo.svg'
import { FaInstagram } from "react-icons/fa";

const BurgerMenu: React.FC = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger>
                <div className="text-white"><MenuIcon /></div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="inline-flex self-end p-4">
                    <DrawerHeader>
                        <img src={logo} width={120} height={60} />
                    </DrawerHeader>
                </div>
                <div className="flex flex-col pr-8 ">
                    <ul className="flex flex-col items-end gap-5 text-golden mb-6">
                        <li><a href="#about" aria-label="О нас">О нас</a></li>
                        <li><a href="#apartments">Наши Квартиры</a></li>
                        <li><a href="#">Ипотека</a></li>
                        <li><a href="#about">Район</a></li>
                        <li><a href="#about">Контакты</a></li>
                    </ul>

                    <ul className="flex justify-end gap-5 text-golden">
                        <li><FaInstagram size={30} /></li>
                        <li><FaInstagram size={30} /></li>
                        <li><FaInstagram size={30} /></li>
                        <li><FaInstagram size={30} /></li>
                    </ul>
                </div>


            </DrawerContent>
        </Drawer>
    );
};

export default BurgerMenu;
