
class User {
    constructor(name, email, nascimento, role, ativo = true) {
        this.name = name,
            this.email = email,
            this.nascimento = nascimento,
            this.role = role || "estudante",
            this.ativo = ativo
    }
    exibirInfos(){
        return `Nome:${this.name}\nEmail:${this.email}`
    }
}
const NovoUser = new User('Caique','caiquewin@gmail.com','1997/12/06','admin')
console.log(NovoUser)
console.log(NovoUser.exibirInfos())