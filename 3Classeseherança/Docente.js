import {User} from './User.js';

export class Docente extends User {
    constructor(name, email, nascimento, role="docente", ativo=true){
        super(name, email, nascimento, role, ativo)
    }
    aprovaEstudante(student, course ){
        return `Estudante ${student} aprovado com sucesso ${course}` 
    }
}

// const DoceteTeste = new Docente('Ivani','Ivani@gmail.com',"01/01/1980")

// console.log(DoceteTeste.showUser())

// console.log(DoceteTeste.aprovaEstudante('Caique',"C#"))