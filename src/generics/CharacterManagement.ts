import axios from 'axios'
import { Character } from '../interfaces';
import { Result } from '../interfaces/character';


const apiUrl: string = "https://rickandmortyapi.com/api/character/";


export const getaAllCharacters = async(): Promise<Character> => {
    const { data } = await axios.get<Character>(apiUrl);
    // console.log( data )
    return data;
}


export const getCharacterById = async( characterId: number ): Promise<Result> => {
    const { data } = await axios.get<Result>(apiUrl + `${ characterId }`);
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
