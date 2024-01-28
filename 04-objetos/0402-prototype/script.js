// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
  return this.nome + this.sobrenome + this.idade;
};

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
