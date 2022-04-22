
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
 
    get nome() {return this.#name}   
    get email() {return this.#email}   
    get nascimento() {return this.#nascimento}   
    get role() {return this.#role}   
    get ativo() {return this.#ativo}   
    
    showUser() {
        const {name,email} =this.#ObjUser()
        return `Nome:${name}\nEmail:${email}`

    }
}
