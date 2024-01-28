function Pessoa(pessoa, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  };
}

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;

  this.addClass = function (classe) {
    elementList.forEach(element => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach(element => {
      element.classList.remove(classe);
    });
  };
}

const ul = new Dom('ul');
ul.addClass('ativar');
