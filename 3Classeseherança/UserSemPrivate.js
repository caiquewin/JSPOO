 export class UserSemPrivate{
     constructor(name,email,nascimento,role,status=true){
       this.name = name,
       this.email = email,
       this.nascimento = nascimento,
       this.role = role || "estudante",
       this.status = status  
     }
    showUser(){
        return`Name:${this.name}\nEmail:${this.email}`
    }
 }