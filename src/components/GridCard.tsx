import React from 'react';
import { Pokemon } from '../types/types';

interface GridCardProps {
    pokemon: Pokemon,
    onCardClick: () => void,
}

const GridCard: React.FC<GridCardProps> = ({pokemon, onCardClick})  => {
    return (
        <div 
            className='flex flex-col justify-center items-center h-64 lg:h-80 rounded-lg border-2 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out bg-white' 
            onClick={onCardClick}
        > 
            <img src={pokemon.image} alt={pokemon.name} className="max-h-[65%]"/>
            <div className='font-semibold'>{pokemon.name}</div>  
            <div className='flex flex-row w-full justify-center'>
                {
                pokemon.types.map((type) => {
                    const typeClass = 'rounded text-center w-1/2 mx-1 bg-gradient-to-t to-white border-2 ' + type.color;
                    return (
                        <div className={typeClass}>
                            {type.type.name} 
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default GridCard;