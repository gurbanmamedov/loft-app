import benchImage from "../../assets/bench.svg";
import buildingImage from "../../assets/building.svg";
import fountainImage from "../../assets/fountain.svg";
import apartment1 from "../../assets/01.webp";
import apartment2 from "../../assets/02.webp";
import apartment3 from "../../assets/03.webp";
import apartment4 from "../../assets/04.webp";
import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-6.png";
import avatar5 from "../../assets/avatar-8.png";
import avatar6 from "../../assets/avatar-9.png";

export interface Apartment {
  id: number;
  name: string;
  image: string;
}

export const benefits = [
  {
    id: "1",
    title: "Bench",
    img: benchImage,
    listClassName: "w-[200px] flex flex-col items-center",
    textClassName: "w-[193px] font-normal text-center leading-7 text-white",
    description: "Рядом исторические парки и скверы",
  },
  {
    id: "2",
    title: "Building",
    img: buildingImage,
    listClassName: "w-[200px] flex flex-col items-center",
    textClassName: "w-[193px] font-normal text-center leading-7 text-white",
    description: "Полностью обустроенный",
  },
  {
    id: "3",
    title: "Fountain",
    img: fountainImage,
    listClassName: "w-[200px] flex flex-col items-center",
    textClassName: "w-[193px] font-normal text-center leading-7 text-white",
    description: "10 фонтанов на территории",
  },
];

export const navLinks = [
  {
    name: "О комплексе",
    href: "#about",
  },
  {
    name: "Каталог квартир",
    href: "#apartments",
  },
  {
    name: "Район",
    href: "#",
  },
  {
    name: "Ипотека",
    href: "#",
  },
  {
    name: "Контакты",
    href: "/contact",
  },
];

export const apartments: Apartment[] = [
  {
    id: 1,
    name: "Пентхаус “Loft Олимп”",
    image: apartment1,
  },
  {
    id: 2,
    name: "Апартаменты “Nice Loft”",
    image: apartment2,
  },
  {
    id: 3,
    name: "Апартаменты “Loft Studio”",
    image: apartment3,
  },
  {
    id: 4,
    name: "Loft квартира “Престиж”",
    image: apartment4,
  },
];

export const reviews = [
  {
    name: "Александр",
    username: "@alex",
    body: "Этот жилой комплекс просто восхитителен! Удобства и сервис на высшем уровне, а расположение в историческом районе добавляет особый шарм.",
    img: avatar2,
  },
  {
    name: "Мария",
    username: "@maria",
    body: "Современный дизайн и комфорт – это то, что я искала. Жить здесь – одно удовольствие.",
    img: avatar1,
  },
  {
    name: "Иван",
    username: "@ivan",
    body: "Просто лучший выбор для тех, кто ценит качество и комфорт. Удобства здесь просто потрясающие!",
    img: avatar3,
  },
  {
    name: "Елена",
    username: "@elena",
    body: "Историческое окружение и современные удобства делают этот комплекс уникальным. Очень довольна своим выбором!",
    img: avatar4,
  },
  {
    name: "Дмитрий",
    username: "@dmitry",
    body: "Великолепное место для жизни! Всё на высшем уровне, а расположение в центре города – это огромный плюс.",
    img: avatar6,
  },
  {
    name: "Анна",
    username: "@anna",
    body: "Невероятный уровень комфорта и современные удобства. Этот комплекс оправдал все мои ожидания.",
    img: avatar5,
  },
];
