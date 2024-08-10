import benchImage from "../../assets/bench.svg";
import buildingImage from "../../assets/building.svg";
import fountainImage from "../../assets/fountain.svg";
import apartment1 from "../../assets/01.webp";
import apartment2 from "../../assets/02.webp";
import apartment3 from "../../assets/03.webp";
import apartment4 from "../../assets/04.webp";



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
