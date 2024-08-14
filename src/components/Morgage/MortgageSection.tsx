import { mortgageOptions } from '../data';
import MortgageHeader from './MortgageHeader';
import MortgageOption from './MortgageOption';


const MortgageSection = () => {


    return (
        <section>
            <div className="w-full py-12 md:py-24 lg:py-32 bg-footer">
                <div className="container grid gap-12 px-4 md:px-6">
                    <MortgageHeader />
                </div>
            </div>
            <div className="w-full py-12 md:py-24 lg:py-32 bg-siteBackground">
                <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
                    {mortgageOptions.map((option, index) => (
                        <MortgageOption
                            key={index}
                            title={option.title}
                            description={option.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MortgageSection;
