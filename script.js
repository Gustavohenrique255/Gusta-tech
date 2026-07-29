// Contador de Curtidas
function curtir(botao) {
    const contadorSpan = botao.querySelector('.contador');
    let curtidas = parseInt(contadorSpan.textContent);
    
    curtidas++;
    contadorSpan.textContent = curtidas;
    botao.classList.add('curtido');
}

// Sistema de Troca de Páginas
function mudarPagina(idPagina) {
    const paginas = document.querySelectorAll('.aba-conteudo');
    paginas.forEach(pagina => {
        pagina.classList.remove('ativa');
    });

    const paginaAtiva = document.getElementById(`pagina-${idPagina}`);
    if (paginaAtiva) {
        paginaAtiva.classList.add('ativa');
    }
}

// Lista Expandida de Indicações de Jogos
const jogosParaIndicar = [
    { nome: "Minecraft (Java Edition)", genero: "Sandbox / Sobrevivência" },
    { nome: "The Witcher 3: Wild Hunt", genero: "RPG / Mundo Aberto" },
    { nome: "Hollow Knight", genero: "Metroidvania" },
    { nome: "Elden Ring", genero: "Soulslike / Ação" },
    { nome: "Cyberpunk 2077", genero: "RPG de Ficção Científica" },
    { nome: "Celeste", genero: "Plataforma Utra Desafiador" },
    { nome: "Hades II", genero: "Rogue-like / Ação" },
    { nome: "Red Dead Redemption 2", genero: "Ação / História" }
];

// Gerador Aleatório de Jogos
function indicarJogo() {
    const resultadoDiv = document.getElementById('resultado-indicacao');
    const jogoSorteado = jogosParaIndicar[Math.floor(Math.random() * jogosParaIndicar.length)];
    
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        🎮 <strong>Recomendação do Gusta:</strong> ${jogoSorteado.nome}<br>
        📌 <strong>Gênero:</strong> ${jogoSorteado.genero}
    `;
}