import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import avatar1 from '../../assets/avatar-1.png'
import avatar2 from '../../assets/avatar-2.png'
import avatar3 from '../../assets/avatar-3.png'
import avatar4 from '../../assets/avatar-6.png'
import avatar5 from '../../assets/avatar-8.png'
import avatar6 from '../../assets/avatar-9.png'
const reviews = [
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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-golden">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-white">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
        </figure>
    );
};


export function Testimonials() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-siteBackground ">
            <Marquee pauseOnHover className="animation-marquee [--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="animation-marquee [--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-siteBackground dark:from-siteBackground"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-siteBackground dark:from-background"></div>
        </div>
    );
}