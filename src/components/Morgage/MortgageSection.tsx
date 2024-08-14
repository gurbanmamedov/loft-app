const MortgageSection = () => {
    return (
        <section>
            <div className="w-full py-12 md:py-24 lg:py-32 bg-footer">
                <div className="container grid gap-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center  text-center ">
                        <div className="">
                            <h2 className="sectionTitle mb-4">Ипотечные Опции для Вашего Идеального Дома</h2>
                            <p className=" text-white mb-5 text-center">
                                Изучите наш ассортимент ипотечных решений, адаптированных к вашим финансовым потребностям и целям по приобретению жилья.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-golden md:hover:bg-golden/55 px-8 text-sm font-medium text-white shadow   disabled:opacity-50"

                        >
                            Получите Предварительное Одобрение
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full py-12 md:py-24 lg:py-32 bg-siteBackground">
                <div className="container  grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
                    <div className="rounded-lg border border-golden p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-golden">Обычная Ипотека</h3>
                            <p className="text-white">
                                Традиционный вариант ипотеки с первоначальным взносом не менее 20% и конкурентоспособными процентными ставками.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-golden md:hover:bg-golden/55  md:transition duration-200 px-4 py-2 text-sm font-medium text-white shadow"
                        >
                            Узнать Больше
                        </a>
                    </div>
                    <div className="rounded-lg border border-golden p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-golden">Ипотека FHA</h3>
                            <p className="text-white">
                                Ипотечный вариант с государственной поддержкой с низким первоначальным взносом, что делает приобретение жилья более доступным.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-golden md:hover:bg-golden/55  md:transition duration-200 px-4 py-2 text-sm font-medium text-white shadow"
                        >
                            Узнать Больше
                        </a>
                    </div>
                    <div className="rounded-lg border border-golden p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-golden">Ипотека VA</h3>
                            <p className="text-white">
                                Ипотечный вариант для действующих военнослужащих, ветеранов и их семей без требования первоначального взноса.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-golden md:hover:bg-golden/55  md:transition duration-200 px-4 py-2 text-sm font-medium text-white shadow"
                        >
                            Узнать Больше
                        </a>
                    </div>
                    <div className="rounded-lg border border-golden p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-golden">Ипотека USDA</h3>
                            <p className="text-white">
                                Ипотечный вариант для заемщиков с низким или средним доходом в подходящих сельских районах без первоначального взноса.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-golden md:hover:bg-golden/55  md:transition duration-200 px-4 py-2 text-sm font-medium text-white shadow"
                        >
                            Узнать Больше
                        </a>
                    </div>
                    <div className="rounded-lg border border-golden p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-golden">Джамбо-Кредит</h3>
                            <p className="text-white">
                                Ипотечный вариант для высокоценных объектов недвижимости, превышающих лимиты обычных кредитов, с гибкими требованиями.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-golden md:hover:bg-golden/55  md:transition duration-200 px-4 py-2 text-sm font-medium text-white shadow"
                        >
                            Узнать Больше
                        </a>
                    </div>
                    <div className="rounded-lg border border-golden p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-golden">Рефинансирование</h3>
                            <p className="text-white">
                                Рефинансируйте кредит, чтобы уменьшить ставку и сократить срок. Значительно сэкономьте деньги и получите лучшие условия.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-golden md:hover:bg-golden/55  md:transition duration-200 px-4 py-2 text-sm font-medium text-white shadow"
                        >
                            Узнать Больше
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MortgageSection