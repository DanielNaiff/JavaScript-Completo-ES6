function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (conteudo) elemento.textContent = conteudo;
  return elemento;
}

// Exemplo de uso:
const novoParagrafo = criarElemento(
  'p',
  'paragrafo-classe',
  'Este é um novo parágrafo.'
);
document.body.appendChild(novoParagrafo);
console.log(novoParagrafo.className);

function criarTitulo(conteudo) {
  return criarElemento('h1', 'titulo', conteudo);
}

// Exemplo de uso:
const novoTitulo = criarTitulo('Título Dinâmico');
document.body.appendChild(novoTitulo);
