import { benefits } from "../data"

const BenefitsItem = () => {
    return (
        <>
            {
                benefits.map(({ id, textClassName, title, listClassName, description, img }) => (
                    <li key={id} className={listClassName}>
                        <img className='lg:mb-4' src={img} alt={title} />
                        <p className={textClassName}>{description}</p>
                    </li>
                ))
            }
        </>
    )
}

export default BenefitsItem