import { typeOption } from "../types/types";

export const selectOptions: typeOption[] = [
    {type: 'bug', label: 'bug'},
    {type: 'dark', label: 'dark'},
    {type: 'dragon', label: 'dragon'},
    {type: 'fairy', label: 'fairy'},
    {type: 'electric', label: 'electric'},
    {type: 'fighting', label: 'fighting'},
    {type: 'fire', label: 'fire'},
    {type: 'flying', label: 'flying'},
    {type: 'ghost', label: 'ghost'},
    {type: 'grass', label: 'grass'},
    {type: 'ground', label: 'ground'},
    {type: 'ice', label: 'ice'},
    {type: 'normal', label: 'normal'},
    {type: 'poison', label: 'poison'},
    {type: 'psychic', label: 'psychic'},
    {type: 'rock', label: 'rock'},
    {type: 'steel', label: 'steel'},
    {type: 'water', label: 'water'},
]

interface colorsMap {
    [name: string]: string
}
export const colors: colorsMap = {
    'bug': 'from-green-800',
    'dark': 'from-neutral-900',
    'dragon': 'from-teal-600',
    'electric': 'from-yellow-300',
    'fairy': 'from-rose-800',
    'fighting': 'from-orange-800',
    'fire': 'from-red-600',
    'flying': 'from-gray-500',
    'ghost': 'from-violet-900',
    'grass': 'from-green-600',
    'ground': 'from-amber-600',
    'ice': 'from-cyan-300',
    'normal': 'from-stone-500',
    'poison': 'from-purple-900',
    'psychic': 'from-pink-700',
    'rock': 'from-yellow-900',
    'steel': 'from-emerald-600', 
    'water': 'from-blue-600',
}