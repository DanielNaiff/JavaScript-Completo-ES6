var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log('É verdadeiro');
} else if (possuiDoutorado) {
  console.log('É verdadeiro');
}

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
