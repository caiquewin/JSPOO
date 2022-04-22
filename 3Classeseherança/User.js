
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
 
    get name() {
        return this.#name
    }   
    set name(newName){
        if(newName==='')throw new Error('Nome vazio')
        this.#name=newName
    }
    get email() {
        return this.#email
    }   
    get nascimento() {
        return this.#nascimento
    }   
    get role() {
        return this.#role
    }   
    get ativo() {
        return this.#ativo
    }   
    
    showUser() {
        return `Nome:${this.name}\nEmail:${email}`

    }
}
