export interface pokemonRes {
    count: number;
    next: string | null; 
    previous: string | null;
    results: pokemonName[];
}

export interface pokemonName {
    name: string;
    url: string;
}

export interface pokemonType {
    slot: number;
    type: pokemonName;
    color?: string;
}

export interface pokemonStat {
    effort: number;
    base_stat: number;
    stat: pokemonName;
}

export interface Pokemon {
    name: string;
    image: string;
    stats: pokemonStat[];
    types: pokemonType[];
    weight: number;
    moves: number;
}

export interface typeOption {
    type: string;
    label: string;
}