const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Heroi {
  constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.tipoHeroi = tipoHeroi;
  }

  atacar() {
    let ataque;
    if (this.tipoHeroi === "mago") {
      ataque = "magia";
    } else if (this.tipoHeroi === "guerreiro") {
      ataque = "espada";
    } else if (this.tipoHeroi === "monge") {
      ataque = "artes marciais";
    } else if (this.tipoHeroi === "ninja") {
      ataque = "shuriken";
    }
    console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
  }
}

// Função para ler entradas do usuário e criar um herói
function criarHeroi() {
  rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    rl.question("Digite a idade do herói: ", (idadeHeroi) => {
      rl.question("Digite o tipo do herói (mago, guerreiro, monge, ninja): ", (tipoHeroi) => {
        const heroi = new Heroi(nomeHeroi, parseInt(idadeHeroi), tipoHeroi);
        console.log(`Nome: ${heroi.nomeHeroi}`);
        console.log(`Idade: ${heroi.idadeHeroi}`);
        console.log(`Tipo: ${heroi.tipoHeroi}`);
        heroi.atacar();
        rl.close();
      });
    });
  });
}

// Chama a função para iniciar o processo de criação do herói
criarHeroi();