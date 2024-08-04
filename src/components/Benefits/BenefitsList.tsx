
import BenefitsItem from './BenefitsItem'


const BenefitsList = () => {
    return (
        <ul className="flex flex-col gap-8 md:flex md:flex-row  lg:gap-14  items-center justify-center">
            <BenefitsItem />
        </ul>
    )
}

export default BenefitsList