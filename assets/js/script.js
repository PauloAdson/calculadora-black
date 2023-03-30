//CODIGO DA CALCULADORA
function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

//BOTOES DE APAGAR
const input = document.getElementById('meu-input');
const botaoApagar = document.getElementById('botao-apagar')
const botaoApagarTudo = document.getElementById('botao-apagar-tudo');


botaoApagar.addEventListener('click', () => {
  const textoAtual = input.value;
  const novoTexto = textoAtual.slice(0, -1); // remove o último caractere da string
  input.value = novoTexto;
});

botaoApagarTudo.addEventListener('click', () => {
  input.value = '';
});


//CODIGO DO TEMA

//ESSE CÓDIGO SERVE PARA CARREGAR O CONTEÚDO HTML ANTES DO JS .>
document.addEventListener("DOMContentLoaded", function() {
  
  const button = document.querySelector('.js-theme');

  const themes = {
    't-dark': 't-light',
    't-light': 't-dark',
  };

  if (button) {
    button.addEventListener('click', event => {
      event.preventDefault();

      const currentTheme = document.body.dataset.theme;
      document.body.setAttribute('data-theme', themes[currentTheme] || 't-dark');
    });
  }

  // seta o tema padrão
  document.body.setAttribute('data-theme', 't-dark');
});
//TERMINA AQUI .>