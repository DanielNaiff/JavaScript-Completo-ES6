class Carro {
  constructor(nome, portas) {
    this.nome = nome;
    this.porta = portas;
    this.ligado = false;
    this.vel = 0;
    this.cor = undefined;
  }
  ligar = function () {
    this.ligado = true;
  };
  desligar = function () {
    this.ligado = false;
  };
  setCor = function (cor) {
    this.cor = cor;
  };
}

class Militar extends Carro {}

const c1 = new Carro('Normal', 4);

console.log(`Nome: ${c1.nome}`);
console.log(`Nome: ${c1.portas}`);
