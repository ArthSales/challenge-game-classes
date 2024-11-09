//definição do objeto herói
class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    //método atacar que seleciona a arma para ser utilizada por cada classe
    atacar(){
        let arma;
        if (this.type  == "Mago"){
            arma = "magia"
        } else if (this.type  == "Guerreiro"){
            arma = "espada"
        } else if (this.type == "Monge"){
            arma = "artes marciais"
        } else if (this.type == "Clérigo"){
            arma = "cajado"
        } else {
            arma = "shuriken"
        }

        console.log(`O ${this.type} ${this.name} atacou usando ${arma}`)
    }

}

//definindo instâncias da classe herói
let hero1 = new hero("Arthur", 23, "Ninja")
let hero2 = new hero("Nicolas", 16, "Monge")

//aplicando método
hero1.atacar()
hero2.atacar()
