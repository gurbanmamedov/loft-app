import { LampFloorIcon, LocateIcon, LockIcon, ParkingMeterIcon, RecycleIcon, SpadeIcon } from "lucide-react";
import NumbersTicker from "./NumbersTicker";

export default function AboutContent() {
  return (
    <section>
      <div className="w-full py-12 md:pt-24">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl mb-5 font-bold tracking-tighter md:text-5xl lg:text-5xl/none text-golden max-w-[600px]">
            Роскошная Жизнь на Высшем Уровне
          </h1>
          <p className="text-muted-foreground md:text-[] text-white max-w-[600px]">
            Почувствуйте все прелести современной жизни в нашем первоклассном жилом комплексе. Расположенный в историческом районе города, наш комплекс предлагает непревзойденные удобства и образ жизни, полный комфорта и удобства.
          </p>
        </div>
      </div>
      <div className="w-full py-10 md:py-20 lg:py-10 bg-footer ">
        <div className="mb-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="flex items-start gap-4">
              <div className=" rounded-md flex items-center justify-center aspect-square w-12 md:w-14">
                <SpadeIcon className="w-6 h-6 text-golden" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-golden">Роскошные удобства</h3>
                <p className="text-muted-foreground text-white">
                  Погружайтесь в мир первоклассных удобств, включая современный фитнес-центр, сверкающий бассейн и уединенный спа-комплекс.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg rounded-md flex items-center justify-center aspect-square w-12 md:w-14">
                <LampFloorIcon className="w-6 h-6  text-golden" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold  text-golden">Гибкие Планы Этажей</h3>
                <p className="text-muted-foreground text-white">
                  Выбирайте из разнообразных просторных планировок, каждая из которых разработана с учетом современных стандартов жизни.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg rounded-md flex items-center justify-center aspect-square w-12 md:w-14">
                <LocateIcon className="w-6 h-6  text-golden" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold  text-golden">Исторический Район</h3>
                <p className="text-muted-foreground text-white">
                  Оцените атмосферу исторического района и наслаждайтесь легким доступом к магазинам, ресторанам и развлекательным заведениям.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg rounded-md flex items-center justify-center aspect-square w-12 md:w-14">
                <LockIcon className="w-6 h-6  text-golden" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold  text-golden">Безопасное Проживание</h3>
                <p className="text-muted-foreground text-white">
                  Отдыхайте с уверенностью благодаря круглосуточной охране и современным системам видеонаблюдения.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className=" rounded-md flex items-center justify-center aspect-square w-12 md:w-14">
                <ParkingMeterIcon className="w-6 h-6  text-golden" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold  text-golden">Обширная Парковка</h3>
                <p className="text-muted-foreground text-white">
                  Оцените удобство наших просторных и хорошо освещенных парковочных мест.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className=" rounded-md flex items-center justify-center aspect-square w-12 md:w-14">
                <RecycleIcon className="w-6 h-6  text-golden" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold  text-golden">Экологичный Дизайн
                </h3>
                <p className="text-muted-foreground text-white">
                  Наше сообщество разработано с учетом экологически чистых решений для минимизации воздействия на окружающую среду.
                </p>
              </div>
            </div>
          </div>
        </div>
        <NumbersTicker />
      </div>
    </section>
  )
}
