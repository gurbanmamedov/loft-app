import { useState } from 'react';
import { reviews } from '@/components/data/index'; 
import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal';
import Marquee from "@/components/magicui/marquee";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function Testimonials() {
    const [selectedReview, setSelectedReview] = useState<typeof reviews[number] | null>(null);

    const handleOpenModal = (review: typeof reviews[number]) => {
        setSelectedReview(review);
    };

    const handleCloseModal = () => {
        setSelectedReview(null);
    };

    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-siteBackground">
            <Marquee pauseOnHover className="animation-marquee [--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} onClick={() => handleOpenModal(review)} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="animation-marquee [--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} onClick={() => handleOpenModal(review)} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-siteBackground dark:from-siteBackground"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-siteBackground dark:from-background"></div>

            {selectedReview && (
                <ReviewModal
                    img={selectedReview.img}
                    name={selectedReview.name}
                    username={selectedReview.username}
                    body={selectedReview.body}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}
