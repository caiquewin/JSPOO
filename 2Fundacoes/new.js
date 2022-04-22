// o new serve para criar instancias atraves de uma função construtores são equivalentes a classes do js


//por nomelcatura o js não inicia o nome de função com letra maiuscula a não ser nesse caso que estamos trabalhando com classes
//Sempre que criamos uma classe deixamos a primeira letra MAIUSCULA


// function User(name, email) {

//   this.name = name,
//     this.email = email

//   this.exibirInfos = function () {
//     return `Nome: ${this.name} \nemail:${this.email}`
//   }
// }

// forma de criar objeto no javascript usando um construtor 
// const userCaique = new User("Caique","caique@gmail.com")
// console.log(userCaique.exibirInfos());


//outra forma unsando object create

// function Admin({role,name,email}) {

//   // como fazer com que o admin herde tudo de User ???
//   // iremos usar o metodo que se chama call

//   User.call(this, name, email)
//   this.role = role || "Estudante"

// }

// Admin.prototype = Object.create(User.prototype)

// const novoUser = new Admin({email:"paulo@gmail.com",role:"admin",name:"Paulo"})
// console.log(novoUser.exibirInfos())



//Outro Exemplo  

// Criar um novo user em formato de objeto


// const user = {
//   exibirInfo:function(nome){
//     return nome
//   }
// }

// const novoUser = Object.create(user)
// console.log(novoUser.exibirInfo('Caique'))
//Testando ser o user esta sendo usado como protopipo do novoUser (exemplo abaixo)
// console.log(user.isPrototypeOf(novoUser)) // no caso o user e um protótipo do NovoUser

// fico meio estranho dessa forma

// iremos colocar a mesma coisa acima mas iremos criar uma função dentro do objeto que via servi para inicializar os parametros

const user = {
  //construtor
  init: function(name, email){
    this.name = name,
    this.email = email
  },
  exibirInfo: function(){
    return this.name
  }
}

const novoUser = Object.create(user)
novoUser.init("Caique","caique@gmail.com")

console.log(novoUser.exibirInfo())


//Por existe dois modos ??

// Object.Create ele faz mas sentindo no modelo de protótipo do que usar o construtor

// o construtor com a palavra new faz mas sentido no modelo de classe 

// porem na vida real nos não atribuimos em prototaipe 