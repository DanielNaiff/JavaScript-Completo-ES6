var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
};

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
};

var bg = menu.backgroundColor; // '#84E'

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
};

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function () {
  console.log('Clicou');
});
