import React, { useEffect } from 'react';
import { Pokemon, typeOption } from '../types/types';
import GridCard from './GridCard';

interface PokemonsGridProps {
    isError: boolean;
    isLoading: boolean;
    selectedType: typeOption | null;
    pokemons: Pokemon[];
    onCardClick: (id: number) => void;
}

const PokemonsGrid: React.FC<PokemonsGridProps> = ({isError, isLoading, selectedType, pokemons, onCardClick}) => {

    return (
        <div className='grid grid-cols-3 gap-4 w-full lg:w-[52%] py-6 px-4 h-full overflow-y-scroll no-scrollbar'>
                    {
                    pokemons.map((pokemon, index) => {
                        for (const type of pokemon.types) {
                            if (type.type.name == selectedType?.type || selectedType == null) {
                                return (
                                    <GridCard 
                                        pokemon={pokemon} 
                                        onCardClick={() => onCardClick(index)}
                                    />
                                )
                            }
                        }
                        return null 
                    })
                    }
                </div>
    );
};

export default PokemonsGrid;