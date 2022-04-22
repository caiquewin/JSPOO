import {User} from './User.js'

class Admin extends User {
    constructor(name, email, nascimento, role ="admin", ativo = true) {
        super(name, email, nascimento, role, ativo) // são as propriedades que estamos erdando da User (quais iremos aproveitar dela)
    }
    criarCurso(courseName,value){
       return `Curso ${courseName} criado com sucesso com ${value} vagas`
    }
}
const novoAdmin = new Admin('Eduardo','eduardo@gmail.com','01/01/200')

console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('Como vender curso',10))
