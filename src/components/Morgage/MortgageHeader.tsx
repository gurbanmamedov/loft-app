

const MortgageHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="sectionTitle mb-4">Ипотечные Опции для Вашего Идеального Дома</h2>
            <p className="text-white mb-5">
                Изучите наш ассортимент ипотечных решений, адаптированных к вашим финансовым потребностям и целям по приобретению жилья.
            </p>
            <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-golden md:hover:bg-golden/55 px-8 text-sm font-medium text-white shadow disabled:opacity-50"
            >
                Получите Предварительное Одобрение
            </a>
        </div>
    )
}

export default MortgageHeader