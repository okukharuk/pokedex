import axios from 'axios';
import { colors } from '../consts/consts';
import { pokemonRes, Pokemon } from '../types/types';

export const getPokemons = async(pokemons: Pokemon[] ,limit: number, offset?: number): Promise<Pokemon[] | true> => {
    try{
        const data = await axios.get<pokemonRes>(
            'https://pokeapi.co/api/v2/pokemon/'+
            `?limit=${limit}`+ 
            `${
            offset
            ? `&offset=${offset}`
            : ''
            }`,
            {
            headers: {
                Accept: 'application/json',
            },
            },
        )

        await Promise.all(
            data.data.results.map(async(item) => {
                const data = await axios.get(item.url,{
                        headers: {
                            Accept: 'application/json',
                        },
                    }
                )
                const result = data.data;
                const pokemon: Pokemon = {
                    name: result.name,
                    image: result.sprites.other['official-artwork'].front_default,
                    stats: result.stats,
                    types: result.types,
                    weight: result.weight,
                    moves: result.moves.length,
                }
                
                result.types.map((type:any, index: number) => {
                    pokemon.types[index].color = colors[type.type.name];
                })
                
                pokemons.push(pokemon)
            })
        )
        return pokemons
    } catch(err) {
        return true
    }
}