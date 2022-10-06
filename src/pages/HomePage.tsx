import React, { useEffect } from 'react';
import { getPokemons } from '../api/api';
import PokemonCard from '../components/PokemonCard';
import PokemonsGrid from '../components/PokemonsGrid';
import { Pokemon, typeOption } from '../types/types';
import Select, { ActionMeta } from 'react-select'
import classNames from 'classnames';
import { selectOptions } from '../consts/consts';
import LoadingIcon from '../public/LoadingIcon';


const HomePage = () => {

    const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isShownCard, setIsShownCard] = React.useState(false);
    const [cardId, setCardId] = React.useState<number>(0);
    const [page, setPage] = React.useState<number>(0);
    const [selectedType, setSelectedType] = React.useState<typeOption | null>(null);
    const [moreClicked, setMoreClicked] = React.useState<boolean>(false);

    const customStyles = {
        option: (provided: any) => ({
          ...provided,
          backgroundColor: 'white',
          color: 'black',
          "&:hover": {
            backgroundColor: "rgba(37, 99, 235, 0.6)",
            color: "white"
          }    
        })
      }

    const loadMoreClass = classNames('w-1/2 min-h-[4rem] flex justify-center items-center border-2 border-black mt-2 mb-4 rounded-lg hover:cursor-pointer bg-blue-500 text-white text-xl', {
        'pointer-events-none': moreClicked
    })

    const handleSelect = (newValue: typeOption | null, actionMeta: ActionMeta<typeOption>) => {
        setSelectedType(newValue);
    }

    const onCardClose = () => {
        setIsShownCard(false);
    }

    const onCardClick = (id: number) => {
        setCardId(id);
        setIsShownCard(true);
    }
    
    const fetchPokemons = async(offset?: number) => {
        const data: Pokemon[] | true = offset? await getPokemons(pokemons, 12, offset*12 + 1) : await getPokemons(pokemons, 12)
        data === true
        ? setIsError(true)
        : setPokemons(data)
        setMoreClicked(false)
        setIsLoading(false)
        setPage(page + 1)
    }

    useEffect(() => {
        if(page == 0) fetchPokemons()
    }, [])

    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen capitalize'>
            <div className='text-center font-semibold h-12 mb-12 lg:mb-8 mt-8 text-5xl'>
                Pokedex
            </div>
            <Select 
                styles={customStyles}
                options={selectOptions} 
                onChange={handleSelect} 
                isClearable={true}
            />
            <div className='flex flex-row justify-center items-center w-full h-full overflow-hidden'>
                {isError ?
                <div className='text-3xl'>
                    Something wrong. Please reload the page
                </div>
                :
                isLoading ?
                <div className='flex flex-row justify-center items-center w-full'>
                    <LoadingIcon />
                </div>
                :
                <PokemonsGrid 
                    isError={isError} 
                    isLoading={isLoading}
                    selectedType={selectedType} 
                    pokemons={pokemons} 
                    onCardClick={(id: number) => onCardClick(id)} 
                />
                }
                {isShownCard ?
                    <PokemonCard 
                        pokemon={pokemons[cardId]} 
                        onClose={onCardClose}
                    />
                :
                    null
                }
            </div>
            <div 
                className={loadMoreClass} 
                onClick={() => {setMoreClicked(true); fetchPokemons(page)}}
            >
                Load More
            </div>
        </div>
    );
};

export default HomePage;