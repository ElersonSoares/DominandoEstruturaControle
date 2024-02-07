let xpHero = 1500
let nameHero =  "Hero"

/*0 - Se XP for menor do que 1.000 = Ferro
1 - Se XP for entre 1.001 e 2.000 = Bronze
2, 3, 4 - Se XP for entre 2.001 e 5.000 = Prata
5, 6 - Se XP for entre 5.001 e 7.000 = Ouro
7 - Se XP for entre 7.001 e 8.000 = Platina
8 - Se XP for entre 8.001 e 9.000 = Ascendente
9 - Se XP for entre 9.001 e 10.000= Imortal
default - Se XP for maior ou igual a 10.001 = Radiante*/
let option = (xpHero - (xpHero % 1000)) / 1000

switch(option){
    case 0:
        console.log("Ferro")
        break
    case 1:
        console.log("Bronze")
        break
    case 2:
        console.log("Prata")
        break
    case 3:
        console.log("Prata")
        break
    case 4:
        console.log("Prata")
        break
    case 5:
        console.log("Ouro")
        break
    case 6:
        console.log("Ouro")
        break
    case 7:
        console.log("Platina")
        break
    case 8:
        console.log("Ascendente")
        break
    case 9:
        console.log("Imortal")
        break
    default:
        console.log("Radiante")
}

    



