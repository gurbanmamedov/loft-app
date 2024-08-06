
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
                                aria-label='О комплексе'
                            >
                                О комплексе
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                                aria-label='Район'
                            >
                                Район
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                                aria-label='Каталог квартир'
                            >
                                Каталог квартир
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                aria-label='Ипотека'
                                href="/"
                            >
                                Ипотека
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                aria-label='Контакты'
                                href="/"
                            >
                                Контакты
                            </a>
                        </ul>
                        <ul className="flex flex-col  gap-3 pt-3 text-white text-left text-sm tracking-tight">
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                                aria-label='Поселение и переезд'
                            >
                                Поселение и переезд
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                href="/"
                                aria-label='Сервисные услуги'
                            >
                                Сервисные услуги
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                aria-label='Экологическая устойчивость'
                                href="/"
                            >
                                Экологическая устойчивость
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                aria-label='Инвестиционные возможности'
                                href="/"
                            >
                                Инвестиционные возможности
                            </a>
                            <a
                                className=" md:hover:text-golden md:transition md:duration-300"
                                aria-label='Программа лояльности'
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
                            <a className=" md:hover:text-golden md:transition duration-200" aria-label='Youtube' href='#'>
                                <FiYoutube size={35} />
                            </a>
                            <a className=" md:hover:text-golden md:transition duration-200" aria-label='Vkontakte' href='#'>
                                <SlSocialVkontakte size={35} />
                            </a>
                            <a className=" md:hover:text-golden md:transition duration-200" aria-label='Facebook' href='#'>
                                <FiFacebook size={30} />
                            </a>
                            <a className=" md:hover:text-golden md:transition duration-200" aria-label='Instagram' href='#'>
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