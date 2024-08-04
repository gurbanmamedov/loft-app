
import logoImage from '../../assets/logo.svg'
import { FiFacebook, FiYoutube } from 'react-icons/fi'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className=" bg-footer pt-14 pb-12">
            <div className="container">
                <div className="flex flex-col gap-5 md:flex md:flex-row justify-between">
                    <a className="" href="/">
                        <img src={logoImage} alt="Logo" />
                    </a>
                    <div className="flex flex-col gap-4 md:flex lg:flex-row lg:gap-[166px] ">
                        <ul className="flex flex-col gap-3 pt-3 text-white text-left text-sm tracking-tight ">
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                О комплексе
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Район
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Каталог квартир
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Ипотека
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Контакты
                            </a>
                        </ul>
                        <ul className="flex flex-col  gap-3 pt-3 text-white text-left text-sm tracking-tight">
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Поселение и переезд
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Сервисные услуги
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Экологическая устойчивость
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Инвестиционные возможности
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                            >
                                Программа лояльности
                            </a>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 pt-3">
                        <div className="text-white text-sm flex flex-col gap-3">
                            <p>Адрес: Наб. реки Фонтанки 10-15</p>
                            <a href='tel:+88121234567'>Телефон: 8 (812) 123-45-67</a>
                            <p>Отдел продаж: 10:00 - 20:00</p>
                            <p className="mb-1">E-mail: <span className="text-golden">vip@lofthouse.ru</span></p>
                        </div>
                        <div className="flex gap-6 text-white">
                            <a className=" md:hover:text-golden md:transition duration-200" href='#'>
                                <FiYoutube size={35} />
                            </a>
                            <a className=" md:hover:text-golden md:transition duration-200" href='#'>
                                <SlSocialVkontakte size={35} />
                            </a>
                            <a className=" md:hover:text-golden md:transition duration-200" href='#'>
                                <FiFacebook size={30} />
                            </a>
                            <a className=" md:hover:text-golden md:transition duration-200" href='#'>
                                <FaInstagram size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer