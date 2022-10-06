import React from 'react';
import { Pokemon } from '../types/types';
import CardStat from './CardStat';
import crossX from '../public/crossX.svg'

interface PokemonCardProps {
    pokemon: Pokemon,
    onClose: () => void,
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon, onClose}) => {
    return (
        <div className='flex flex-col w-72 h-fit lg:min-h-[80%] absolute bg-white lg:relative border-2 items-center justify-center rounded-lg h-[70%] ml-0 lg:ml-4'>
                        <div className='flex flex-col items-center px-4 w-full max-h-[94%]'>
                            <img src={crossX} alt='close' className='w-12 absolute right-[-1rem] top-[-1rem] border-2 rounded-full bg-white cursor-pointer' onClick={onClose}/>
                            <img src={pokemon.image} alt={pokemon.name} className='h-[40%] object-contain'/>
                            <div className='text-3xl font-semibold h-[8%]'>{pokemon.name}</div>
                            <div className='flex flex-row w-2/3 my-1 h-[6%] text-sm justify-center'>
                                    {
                                        pokemon.types.map((type) => {
                                            const typeClass = 'flex items-center justify-center rounded text-center w-1/2 mx-1 bg-gradient-to-t to-white border-2 ' + type.color;
                                            return (
                                                <div className={typeClass}>
                                                    {type.type.name} 
                                                </div>
                                            )   
                                        })
                                    }
                            </div>   
                            <div className='flex flex-col w-full border-2 rounded-lg max-h-[46%] h-[46%]'>
                                {
                                    pokemon.stats.map((stat) => {
                                        return (
                                            <CardStat label={stat.stat.name} value={stat.base_stat}/>
                                        )
                                    })
                                }
                                <CardStat label='Weight' value={pokemon.weight}/>
                                <CardStat label='Moves' value={pokemon.moves}/>
                            </div>
                        </div>
                    </div>
    );
};

export default PokemonCard;