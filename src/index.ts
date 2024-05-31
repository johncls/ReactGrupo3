import { getCharacterById } from './generics/CharacterManagement';
import { getaAllCharacters } from './generics/CharacterManagement';
import { getCharacterFromLocalStorage } from './generics/CharacterManagement';
import { Result } from './interfaces/character';


console.log('CARGANDO TODOS LOS CHARACTERS')

getaAllCharacters()
    .then( (characters) => {
            console.log( characters ) ;
            // localStorage.setItem("All-Characters", JSON.stringify(characters));
        })
    .catch( error => console.error( error ) )
    .finally(() => console.log('FIN DE LA CARGA'))



console.log('CARGANDO CHARACTERS POR ID')
const idsArray: number[] = [1,10,20,30,40,50] ;

idsArray.forEach( id => 
    getCharacterById(id)
    .then( (character) => {
            console.log( character ) ;
            localStorage.setItem("Character" + id, JSON.stringify(character));
        })
    .catch( error => console.error( error ) )    
)


console.log('LEYENDO CHARACTERS DEL STORAGE')
idsArray.forEach( id => 
    getCharacterFromLocalStorage(id)
    .then( (character) => {
            console.log( character ) ;            
        })
    .catch( error => console.error( error ) )    
)

console.log('CARGANDO CHARACTER POR ID PARA CLONAR')
const id = idsArray[idsArray.length-1]
const clone = "Clone";
getCharacterById(id)
.then( (character) => {
        let result: Result = character;
        result.id += 1;
        result.name += clone;
        result.species = clone;

        
        localStorage.setItem("Character" + result.id , JSON.stringify(result));
    })
.catch( error => console.error( error ) ) 
.finally(() => console.log('NUEVO CHARACTER CLONE EN LS'))

