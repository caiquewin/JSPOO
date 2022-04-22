
const user = {
    nome: "Caique",
    email: "caiquewin@gmail.com",
    nascimento: "1997/12/06",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log("Nome:", this.nome, '\nEmail:', this.email, "\nNascimento:", this.nascimento)
    }
}


const admin = {
    nome: "Paulo",
    email: "Paulo@gmail.com",
    nascimento: "1996/08/06",
    role: "admin",
    ativo: true,
    CriarCurso:function(){
        console.log('Curso criado !')
    }
}

//criando um protótipo

//Chamar um metodo Object

Object.setPrototypeOf(admin,user)
//iremos herda os metodos do user Primeiero que vai herda e o segundo metodo e quem vai ceder os metodos


// isso que nós fizemos se chama cadeia de protópipo pois ela quando vai acessar o admin.exibirInfos, o js verifica que nao existe essa função,
// então depois verificamos se ele está herdando de algum objeto os metodos
admin.CriarCurso()
admin.exibirInfos()