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

const portfolioTexto = document.getElementById('texto-portfolio');
const projetoPortfolio = document.getElementById('projeto-portfolio');
projetoPortfolio.addEventListener('mouseenter', () =>{
    portfolioTexto.innerHTML = 'Projeto destinado a fazer uma apresentação da minha capacidade na área de desenvolvimento Front-End.<br> O design foi inspirado nas páginas web do início da internet (só o design, não o código). <br> <br> <h3> <a href="https://github.com/vltoria/Portfolio" target=_blank>Repositório GitHub</a> </h3><img> <br> <img src="img/iconHTML.png"><img> <img src="img/iconCSS.png"><img> <img src="img/iconJS.png"><img>'
})
projetoPortfolio.addEventListener('mouseleave', () =>{
    portfolioTexto.innerHTML = 'Projeto destinado a fazer uma apresentação da minha capacidade na área de desenvolvimento Front-End.'
})