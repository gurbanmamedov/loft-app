import { Mouse } from 'lucide-react';
import HeroContacts from './HeroContacts';
import WordPullUp from '../magicui/word-pull-up';
import { motion } from 'framer-motion'
const HeroTitle = () => {
    return (
        <div className="container flex justify-center pt-2 md:pt-8 lg:pt-[120px]">
            <div className="w-full max-w-[556px] flex items-center flex-col gap-5 text-center px-4">
                <WordPullUp
                    words="Жилой комплекс в историческом центре"
                    className="p-0 text-[9vw] md:text-[48px] md:leading-[64px] lg:text-[64px] text-center font-bold lg:leading-[64px] lg:tracking-normal mb-[30px] text-golden"
                />
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <Mouse size={50} className="text-golden hidden md:block mb-[40px] lg:mb-[150px]" />
                </motion.div>
                <HeroContacts />
            </div>
        </div>

    );
}

export default HeroTitle