


import NumberTicker from '../magicui/number-ticker'

const NumbersTicker = () => {
    return (
        <div className="flex flex-col gap-[30px] md:gap-8 lg:gap-[80px] md:flex md:flex-row justify-center">
            <div className="flex flex-col items-center justify-center ">

                <NumberTicker className="text-[60px] font-bold text-golden" value={300} />

                <span className=" w-[190px] font-normal text-center leading-7 text-golden ">Уютных квартир в комплексе</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <NumberTicker className="text-[60px] font-bold text-golden" value={1200} />

                </div>
                <span className="w-[190px] font-normal text-center leading-7 text-golden ">Довольных жителей комплекса</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <NumberTicker className="text-[60px] font-bold text-golden" value={150} />
                </div>
                <span className=" w-[190px] font-normal text-center leading-7 text-golden ">Реализованных проектов компании</span>
            </div>
        </div>
    )
}

export default NumbersTicker