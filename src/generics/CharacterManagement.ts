import axios from 'axios'
import { Character } from '../interfaces';


const apiUrl: string = "https://rickandmortyapi.com/api/character/";


export const getaAllCharacters = async(): Promise<Character> => {
    const { data } = await axios.get<Character>(apiUrl);
    // console.log( data )
    return data;
}


export const getCharacterById = async( characterId: number ): Promise<Character> => {
    const { data } = await axios.get<Character>(apiUrl + `${ characterId }`);
    // console.log( data )
    return data;
}


export const getCharacterFromLocalStorage = async( characterId: number ): Promise<Character> => {
    const character = localStorage.getItem("Character"+characterId);
    if (character){
        return JSON.parse(character) as Character;
    }
    else{
        return {} as Character;
    }
}
