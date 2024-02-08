/* Foi utilizado uma abordagem simples, porém sem comando de repetição, porém eu desconsiderei a regra de uso de um comando de repetição.

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

// Formula para recuperar o valor inteiro da divisão do valor da xp por 1000.
let option = (xpHero - (xpHero % 1000)) / 1000

// Inicialização da variavel em branco
let nivel = ""

switch(option){
    case 0:
        nivel = "Ferro"
        break
    case 1:
        nivel = "Bronze"
        break
    case 2:
        nivel = "Prata"
        break
    case 3:
        nivel = "Prata"
        break
    case 4:
        nivel = "Prata"
        break
    case 5:
        nivel = "Ouro"
        break
    case 6:
        nivel = "Ouro"
        break
    case 7:
        nivel = "Platina"
        break
    case 8:
        nivel = "Ascendente"
        break
    case 9:
        nivel = "Imortal"
        break
    default:
        nivel = "Radiante"
}

console.log("O Herói de nome %s está no nível de %s.", nameHero, nivel )
    



