    class Program {

        constructor() {
            //création des propriétés des personnages avec des valeurs par défaut qu'on envoi dans la class Perso (composition)
            this.perso1 = new Perso("Chevalier", 100, 40, 25, 10)
            this.perso2 = new Perso("Dragon", 100, 50, 27, 10)
                //appel de la fonction affichage
            this.affichage()
                //gestionnaire d'événement qui appeleront nos fonctions d'attaque de sort ou de défense
            document.querySelector("#attaquer").addEventListener('click', this.onClickAttaque.bind(this))
            document.querySelector("#defendre").addEventListener('click', this.onClickDefense.bind(this))
            document.querySelector("#sort").addEventListener('click', this.onClickSort.bind(this))
        }

        affichage() {
            //si les points de vie du perso sont supérieur 0 et celui de l'adversaire aussi
            if (this.perso1.hp > 0 && this.perso2.hp > 0) {
                //pour chacun on va glisser un message leurs aspect (points d'attque, de defense, de vie, de magie)
                document.querySelector("#perso1").innerHTML = `${this.perso1.name} <br> Attaque : ${this.perso1.attack} / Defense : ${this.perso1.defense} / Vie : ${this.perso1.hp} / Magie : ${this.perso1.magie}`
                document.querySelector("#perso2").innerHTML = `${this.perso2.name} <br> Attaque : ${this.perso2.attack} / Defense : ${this.perso2.defense} / Vie : ${this.perso2.hp} / Magie : ${this.perso2.magie}`
                    //sinon
            } else {

                //on cache notre palette de commande (on pourra voir les bouttons)
                this.btns = document.querySelectorAll("#commande button")
                for (let i = 0; i < this.btns.length; i++) {
                    this.btns[i].disabled = "true"

                }
                document.querySelector("#perso1").innerHTML = `${this.perso1.name} <br> Attaque : ${this.perso1.attack} / Defense : ${this.perso1.defense} / Vie : ${this.perso1.hp} / Magie : ${this.perso1.magie}`
                document.querySelector("#perso2").innerHTML = `${this.perso2.name} <br> Attaque : ${this.perso2.attack} / Defense : ${this.perso2.defense} / Vie : ${this.perso2.hp} / Magie : ${this.perso2.magie}`
                    //si c'est l'un qui a gagné
                if (this.perso1.hp <= 0) {
                    //affichage du message du vainqueur
                    document.querySelector("#info p").innerHTML = `${this.perso2.name} a gagné le combat !`
                        //sinon
                } else {
                    //affichage du message de l'autre vainqueur
                    document.querySelector("#info p").innerHTML = `${this.perso1.name} a gagné le combat !`

                }
            }
        }


        onClickAttaque(e) {
            //suppression du comportement par défault du navigateur
            e.preventDefault()
                //on vide les infos 
            document.querySelector("#info p").innerHTML = ""
                //le perso attaque l'adversaire(dragon)
            this.perso1.attaquer(this.perso2)
                //l'adversaire contre
            this.contre()
                //affichage de l'état de jeux des perso

            this.affichage()
        }

        onClickSort(e) {
            //suppression du comportement par défault du navigateur
            e.preventDefault()
                //on vide les infos 
            document.querySelector("#info p").innerHTML = ""

            //si les points de vie du perso sont supérieur à 0
            if (this.perso1.hp > 0) {
                //on envoi un sort sur l'adversaire
                this.perso1.sort(perso2)
                    //l'adversaire peut contrer
                this.contre()
                    //on affiche l'état de jeux des perso
                this.affichage()
                    //sinon
            } else {
                console.log("Choisi une autre action")
                    //envoi de message dans la console disant qu'il choissise autre chose 
            }

        }


        onClickDefense(e) {
            //suppression du comportement par défault du navigateur
            e.preventDefault()
                //on vide les infos 
            document.querySelector("#info p").innerHTML = ""
                //le perso appel la defense
            this.perso1.defendre()
                //l'adversaire contre
            this.contre()
                //affichage de l'état de jeux des perso
            this.affichage()

        }

        contre() {
            //création d'un variable random qui récup un chiffre au pif entre 1 et 3
            this.random = getRandomInteger(1, 3)
                //condition si c'est 1
            switch (this.random) {
                //l'adversaire attaque notre perso
                case 1:
                    this.perso2.attaquer(this.perso1)
                    break;
                    //si c'est 2
                case 2:
                    //si l'adversaire à des points de magie
                    if (this.perso2.magie > 0) {
                        //l'adversaire envoi un sort sur notre perso
                        this.perso2.sort(this.perso1)
                            //sinon 
                    } else {
                        //on relance le contre
                        this.contre()
                    }
                    break;
                    //sinon (c'est 3)
                case 3:

                    //l'adversaire envoi une défense
                    this.perso2.defendre()
            }

        }
    }