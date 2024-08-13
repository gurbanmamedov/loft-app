// ReviewModal.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ReviewModalProps {
    img: string;
    name: string;
    username: string;
    body: string;
    onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
    img,
    name,
    username,
    body,
    onClose,
}) => {
    const handleOutsideClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.modal-content')) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={handleOutsideClick}
        >
            <motion.div
                className="relative w-80 bg-footer border border-gray-950/[.1] rounded-xl p-4 text-white shadow-lg modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    className="absolute top-2 right-2 text-golden"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-golden">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium text-white">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
            </motion.div>
        </motion.div>
    );
};

export default ReviewModal;
