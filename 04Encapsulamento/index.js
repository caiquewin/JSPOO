// Encapsulamento (ação de esconder os atributos de uma classe (escondemos atributo da classe para que ela nao seja utilizada de forma errada))

// Por exemplo alguém tentar alterar o dado de uma classe o nome de alguém e por ai vai ...

// Geralmente fazemos isso com  atributo privados Ou com métodos acessores

import { Admin } from '../3Classeseherança/Admin.js';
import { Docente } from '../3Classeseherança/Docente.js';
import { User } from '../3Classeseherança/User.js';

const PauloPrivate = new Admin('Paulo','paulo@gmail.com','01-01-1996')
console.log(PauloPrivate.showUser())
