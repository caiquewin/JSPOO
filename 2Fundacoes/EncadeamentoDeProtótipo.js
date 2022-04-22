
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
 
