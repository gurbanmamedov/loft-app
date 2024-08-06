import { Mouse } from 'lucide-react';
import HeroContacts from './HeroContacts';
import WordPullUp from '../magicui/word-pull-up';

const HeroTitle = () => {
    return (
        <div className="container flex justify-center  pt-[180px]">
            <div className="w-[556px]  flex  items-center flex-col gap-5 text-center  ">
                <WordPullUp words=' Жилой комплекс в историческом центре' className="p-0 text-[38px] md:text-[48px] md:leading-[64px] lg:text-[64px] text-center font-bold lg:leading-[64px] lg:tracking-normal mb-[30px] text-golden">

                </WordPullUp>
                <Mouse size={50} className="text-[#D4C17F] mb-[40px] lg:mb-[150px]" />
                <HeroContacts />
            </div>
        </div>
    );
}

export default HeroTitle