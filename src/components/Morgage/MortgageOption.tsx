import React from 'react';

interface MortgageOptionProps {
    title: string;
    description: string;
}

const MortgageOption: React.FC<MortgageOptionProps> = ({ title, description }) => {
    return (
        <div className="rounded-lg border border-golden p-6 shadow-sm">
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-golden">{title}</h3>
                <p className="text-white">{description}</p>
            </div>
            <a
                href="#"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-golden md:hover:bg-golden/55 md:transition duration-200 px-4 py-2 text-sm font-medium text-white shadow"
            >
                Узнать Больше
            </a>
        </div>
    );
};

export default MortgageOption;
