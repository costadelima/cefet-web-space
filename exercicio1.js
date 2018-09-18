// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
const botoes = document.querySelectorAll(".botao-expandir-retrair");

botoes.forEach(function(botao){
    botao.addEventListener("click",expandir);
});

function expandir(e){
  let pai = e.currentTarget.parentNode;
  // debugger;
  pai.classList.toggle('expandido');
}
