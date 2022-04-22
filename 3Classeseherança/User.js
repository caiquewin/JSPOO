
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
    showUser() {
        return `Nome:${this.#name}\nEmail:${this.#email}`

    }
}
