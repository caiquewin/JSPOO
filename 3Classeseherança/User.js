
export class User {
    #name
    #email
    #nascimento
    #role
    #ativo
    constructor(name, email, nascimento, role, ativo = true) {
        this.#name = name,
        this.#email = email,
        this.#nascimento = nascimento,
        this.#role = role || "estudante",
        this.#ativo = ativo
    }
    #ObjUser(){
        return({
            name:this.#name,
            email:this.#email,
            nascimento:this.#nascimento,
            role:this.#role
        })
    }
    showUser() {
        const {name,email} =this.#ObjUser()
        return `Nome:${name}\nEmail:${email}`

    }
}
