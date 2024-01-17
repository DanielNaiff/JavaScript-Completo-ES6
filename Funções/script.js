function areaQuadrado(lado) {
  return lado;
}

console.log(areaQuadrado(2));

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

addEventListener('click', function () {
  console.log('Clicou');
});
