class Perso {
    constructor(name, hp, attack, defense, magie) {
        //initialisation des propriété en fonction des arguments passé
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.magie = magie
    }

    attaquer(perso) {
        //creation d'une variable dégat qui soustrait les point de defense du perso par rapport à l'attaque
        this.degats = this.attack - perso.defense
            //si les dégats sont inférieur à 10
        if (this.degats < 10) {
            //ajout du message le perso concerné ne sent plus rien
            document.querySelector("#info p").innerHTML += `Le ${perso.name} ne sent plus rien !`
                //dégat sera 10
            this.degats = 10
        }
        //on soustrait les dégats aux points de vie du perso
        perso.hp -= this.degats
            //on écrit un message l'attaquant attaque le perso et lui enlève tant de point de vie
        document.querySelector("#info p").innerHTML = `Le ${this.name} attaque le ${perso.name} et lui enlève ${this.degats} `

        //si le perso n'a plus de point de vie
        if (perso.hp <= 0) {
            //on attribut 0 au pv du perso
            perso.hp = 0
                //ajout d'un message récapitulant les points de vie du perso et de l'attaquant
            document.querySelector("#info p").innerHTML = `Le ${perso.name} a ${perso.hp} points de vie<br>${this.name} a ${this.hp} points de vie`
        }
    }

    sort(perso) {
        //si la magie est supérieur à 0
        if (this.magie > 0) {
            //creation d'une variable degat attribution d'un nombre au hasard entre 1 et la magie restant
            let degats = getRandomInteger(1, this.magie)
                //on écrit un message disant que l'attaquant jette un sort et enlève tant de point de vie au perso concerné
            document.querySelector("#info p").innerHTML = `Le ${this.name} jette un sort et enlève ${this.degats} points de vie à ${perso.name}`
                //on soustrait les dégats au points de vie du perso
            perso.hp -= degats
            this.magie -= degats
                //si le perso n'a plus de point de vie
            if (perso.hp <= 0) {
                //on attribut 0 au pv du perso
                perso.hp = 0
                    //ajout d'un message récapitulant les points de vie du perso et de l'attaquant
                document.querySelector("#info p").innerHTML = `Le ${perso.name} a ${perso.hp} points de vie<br>Le ${this.name} a ${this.hp} points de vie`
                    //sinon
            }
        } else {
            //ajout d'un message disant que vous n'avez plus de point de magie
            document.querySelector("#info p").innerHTML = `Vous n'avez plus de points de magie !`
        }

    }

    defendre() {
        //création d'une variable ratio qui va récupérer un cacul arrondis(la defense * chiffre au hasard)
        this.ratio = Math.round(this.defense * Math.random() / 2)
            //on écrit un message disant que le perso concerné augmente sa défense de tant de points
        document.querySelector("#info p").innerHTML = `${this.name} augmente sa défense de ${this.ratio}.<br>`
            //attribution du ratio au points de défense initial (on divise par 2)
        this.defense += this.ratio
            //on écrit que le perso concerné à tant de points de défense
        document.querySelector("#info p").innerHTML += `Le ${this.name} a ${this.defense} de défense.`
    }
}