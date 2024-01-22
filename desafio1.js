// Declarando um array de nomes de heróis.

let herois = ["João", "Lord", "Alucard", "Zenitsu", "Ben 10", "Goku", "Naruto", "Elias"];



// Inicializando a variável 'xp' para armazenar a quantidade total de XP ganha.

let xp = 0;



// Definindo o número de monstros mortos.

let numeroDeMonstrosMortos = 40;



// Declarando um array vazio para armazenar os níveis das classes dos heróis.

let niveisClasse = [];



// Exibindo informações iniciais no console.

console.log("Número de monstros mortos foi: " + numeroDeMonstrosMortos);

console.log("Para cada monstro abatido você ganha 500 XP");



// Loop que simula o ganho de XP para cada monstro derrotado.

for (let i = 0; i < numeroDeMonstrosMortos; i++) {

    xp += 500;

    console.log("Ganhou 500 XP, total: " + xp);

}



// O nível do herói é igual à quantidade total de XP ganha.

let nivel = xp;



// Utilizando uma estrutura switch para determinar o nível com base na quantidade de XP.

switch (true) {

    case nivel <= 1000:

        console.log("O herói de nome: " + herois[0] + " está no nível Ferro.");

        break;

    case nivel > 1000 && nivel <= 2000:

        console.log("O herói de nome: " + herois[1] + " está no nível Bronze.");

        break;

    case nivel > 2000 && nivel <= 5000:

        console.log("O herói de nome: " + herois[2] + " está no nível Prata.");

        break;

    case nivel > 5000 && nivel <= 7000:

        console.log("O herói de nome: " + herois[3] + " está no nível Ouro.");

        break;

    case nivel > 7000 && nivel <= 8000:

        console.log("O herói de nome: " + herois[4] + " está no nível Platina.");

        break;

    case nivel > 8000 && nivel <= 9000:

        console.log("O herói de nome: " + herois[5] + " está no nível Ascendente.");

        break;

    case nivel > 9000 && nivel <= 10000:

        console.log("O herói de nome: " + herois[6] + " está no nível Imortal.");

        break;

    case nivel >= 10001:

        console.log("O herói de nome: " + herois[7] + " está no nível Radiante.");

        break;

}

