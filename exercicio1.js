// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
/*
const botoes = document.querySelectorAll(".botao-expandir-retrair");

botoes.forEach(function(botao){
    botao.addEventListener("click",expandir);
});

function expandir(e){
  let pai = e.currentTarget.parentNode;
  // debugger;
  pai.classList.toggle('expandido');
}
*/


// botoes[0].addEventListener('click', myClick);
//
// function myClick(event){
//   // console.log(event.target.className);
//   alert('teste');
// }

// botoes[0].addEventListener('click', alert('teste'));
////////////////////////////////////////////////////////////////////////////////
//Exercício 1.1
////////////////////////////////////////////////////////////////////////////////
let botoes = document.querySelectorAll(".botao-expandir-retrair");

for (let x of botoes){
  x.addEventListener('click', myClick);
}

function myClick(event){
  alert('mensagem aqui');
}
////////////////////////////////////////////////////////////////////////////////
//Exercício 1.2
////////////////////////////////////////////////////////////////////////////////
let botoesExpan = document.querySelectorAll(".botao-expandir-retrair");

for (let x of botoesExpan){
  x.addEventListener('click', myClick);
}

function myClick(event){
  let pai = event.currentTarget.parentNode;
  pai.classList.toggle('expandido');
}
