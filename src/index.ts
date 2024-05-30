import { getCharacterById } from './generics/CharacterManagement';
import { getaAllCharacters } from './generics/CharacterManagement';
import { getCharacterFromLocalStorage } from './generics/CharacterManagement';


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

