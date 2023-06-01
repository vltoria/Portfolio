const botao = document.getElementById('checkbox');
const corpo = document.getElementById('body');
const inicio = document.getElementById('inicio');
const aside = document.getElementById('aside');
const sobre = document.getElementById('sobremim');
const projetos = document.getElementById('projetos');
const competencias = document.getElementById('competencias');
const headerPrincipal = document.getElementById('header-principal');

botao.addEventListener('click', () =>{
    corpo.classList.toggle('dark');
    inicio.classList.toggle('dark-caixa');
    aside.classList.toggle('dark-caixa');
    sobre.classList.toggle('dark-caixa');
    projetos.classList.toggle('dark-caixa');
    competencias.classList.toggle('dark-caixa');
    headerPrincipal.classList.toggle('dark');
})
