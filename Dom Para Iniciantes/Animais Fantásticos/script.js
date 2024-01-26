// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach(imagem => {
    soma = soma + imagem.offsetWidth;
  });

  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach(link => {
  if ((link.offsetWidth >= 48) & (link.offsetHeight >= 48)) {
    console.log('Links com padrão correto: ' + link);
  } else {
    console.log('Links fora do padrão:' + link);
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
