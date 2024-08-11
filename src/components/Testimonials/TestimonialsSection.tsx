import React from 'react'
import { Testimonials } from './Testimonials'

const TestimonialsSection: React.FC = () => {
    return (
        <section className=''>
            <div className='container py-12 md:pt-24'>
                <h2 className='text-3xl mb-5 font-bold tracking-tighter md:text-5xl lg:text-5xl/none text-golden max-w-[600px]'>Отзывы наших жителей</h2>
                <Testimonials />
            </div>
        </section>
    )
}

export default TestimonialsSection