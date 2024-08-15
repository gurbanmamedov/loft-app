import React from 'react';
import { cn } from "@/lib/utils";

interface ReviewCardProps {
    img: string;
    name: string;
    username: string;
    body: string;
    onClick: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    img,
    name,
    username,
    body,
    onClick,
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-footer hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
            onClick={onClick}
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
            <blockquote className="mt-2 text-sm text-white truncate-2-lines">
                {body}
            </blockquote>
        </figure>
    );
};

export default ReviewCard;
