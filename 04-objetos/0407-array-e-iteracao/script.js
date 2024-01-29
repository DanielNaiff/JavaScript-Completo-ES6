// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll('.curso');

const objetctCurso = Array.from(curso).map(curso => {
  const titulo = curso.querySelector('h1').textContent;
  const descricao = curso.querySelector('p').textContent;
  const aulas = parseInt(curso.querySelector('.aulas').textContent);
  const horas = parseInt(curso.querySelector('.horas').textContent);

  return { titulo, descricao, aulas, horas };
});
console.log(objetctCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresQue100 = numeros.filter(numero => numero > 100);

console.log(numerosMaioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const baixaEsta = instrumentos.includes('Baixo');
console.log(baixaEsta);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const converterParaNumero = preco =>
  parseFloat(preco.replace('R$', '').replace(',', '.'));

const valorTotal = compras.reduce(
  (total, compra) => total + converterParaNumero(compra.preco),
  0
);

console.log(valorTotal);
