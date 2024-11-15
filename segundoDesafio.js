const prompt = require('prompt-sync')();

// Função para calcular o saldo de vitórias e determinar o nível
function partidasRankeada(vitorias, derrotas) {
    // Calcula o saldo
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem com o saldo e o nível
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Captura os dados de vitórias e derrotas
const vitorias = parseInt(prompt("Digite as vitórias do herói: "), 10);
const derrotas = parseInt(prompt("Digite as derrotas do herói: "), 10);

// Exibe o resultado
console.log(partidasRankeada(vitorias, derrotas));