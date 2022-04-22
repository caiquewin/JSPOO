// Encapsulamento (ação de esconder os atributos de uma classe (escondemos atributo da classe para que ela nao seja utilizada de forma errada))

// Por exemplo alguém tentar alterar o dado de uma classe o nome de alguém e por ai vai ...

// Geralmente fazemos isso com  atributo privados Ou com métodos acessores

import { Admin } from '../3Classeseherança/Admin.js';
import { Docente } from '../3Classeseherança/Docente.js';
import { User } from '../3Classeseherança/User.js';
import { UserSemPrivate } from '../3Classeseherança/UserSemPrivate.js';

const PauloPrivate = new Admin('Paulo','paulo@gmail.com','01-01-1996')
console.log('Private')
console.log(PauloPrivate) //perceba-se que aqui a classe não mostra as informações do usuario só imprimindo a classe
console.log(PauloPrivate.showUser())
// não é possivél aterar o nome fora da classe exemplo abaixo (vai dar erro ao descomentar)

// PauloPrivate.#name = "caique"
// console.log(PauloPrivate.showUser())


const PauloPublic = new UserSemPrivate('Paulo public','paulopublic@gmail.com','01/01/2000')
console.log('\nPublic')
console.log(PauloPublic) // aqui os dadaos são imprimidos pois a classe é publica
console.log(PauloPublic.showUser())

// aqui é possivél alterar o nome exemplo abaixo
console.log('\nAlterado o nome (possibilitando falhas')
PauloPublic.name = "caique public"
console.log(PauloPublic.showUser())
