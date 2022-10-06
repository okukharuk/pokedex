import React from 'react';

interface CardStatProps {
    label: string;
    value: string | number;
}

const CardStat: React.FC<CardStatProps> = ({label, value}) => {
    return (
        <div className='flex flex-row border-b-2 last:border-0 items-center h-[12.5%]'>
            <div className='text-center w-3/4'>{label}</div>
            <div className='text-center w-1/4 border-l-2'>{value}</div>
        </div>
    );
};

export default CardStat;