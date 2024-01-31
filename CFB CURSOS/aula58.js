class Carro {
  constructor(pNome, pTipo) {
    this.nome = pNome;
    if (pTipo == 1) {
      this.Tipo = 'Esportivo';
      this.velmax = 300;
    } else if (pTipo == 2) {
      this.Tipo == 'Utilitário';
      this.velmax = 120;
    } else if (pTipo == 3) {
      this.Tipo == 'Passeio';
      this.velmax = 160;
    } else {
      this.Tipo == 'Militar';
      this.velmax = 180;
    }
  }
  info() {
    console.log('Nome ' + this.nome);
    console.log('Tipo ' + this.Tipo);
    console.log('Velocidade máxima ' + this.velmax);
  }
  getNome() {
    return this.nome;
  }
  getTipo() {
    return this.Tipo;
  }
  getVelMax() {
    return this.velmax;
  }
}

let p1 = new Carro('Rapidão', 1);
let p2 = new Carro('Super luxo', 2);
let p3 = new Carro('Bombadão', 4);
let c4 = new Carro('Carrego tudo', 3);

p1.info();
p1.info();
