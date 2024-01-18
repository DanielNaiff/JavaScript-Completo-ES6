window.alert('Isso mesmo');

const href = window.location.href;

console.log(href);

if (href === 'asdsad') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');

h1Selecionado.addEventListener('click', function () {
  console.log('Clicou em ', h1Selecionado.innerText);
});
