import React from 'react'
import { Testimonials } from './Testimonials'

const TestimonialsSection: React.FC = () => {
    return (
        <section className=''>
            <div className='container py-12 md:pt-24'>
                <div className=' max-w-[600px]'>

                    <h2 className='sectionTitle mb-5'>Отзывы наших жителей</h2>
                    <p className='text-white'>Узнайте, что говорят наши жители о жизни в этом уникальном жилом комплексе.
                        Здесь собраны их искренние мнения и впечатления, которые помогут вам сделать правильный выбор.</p>
                </div>
            <Testimonials />
            </div>
        </section>
    )
}

export default TestimonialsSection