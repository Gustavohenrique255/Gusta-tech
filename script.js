// Função para Alternar Páginas sem Recarregar
function mudarPagina(idPagina) {
    // Esconde todas as seções
    const paginas = document.querySelectorAll('.aba-conteudo');
    paginas.forEach(pagina => {
        pagina.classList.remove('ativa');
    });

    // Procura e ativa a página desejada
    const paginaAlvo = document.getElementById(`pagina-${idPagina}`);
    if (paginaAlvo) {
        paginaAlvo.classList.add('ativa');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Sistema de Curtidas com Animação
function curtir(botao) {
    const contadorSpan = botao.querySelector('.contador');
    let curtidas = parseInt(contadorSpan.textContent);
    
    curtidas++;
    contadorSpan.textContent = curtidas;
    botao.classList.add('curtido');
}

// Banco de Dados de Indicações
const jogosParaIndicar = [
    { nome: "Minecraft (Java Edition)", genero: "Sandbox / Sobrevivência" },
    { nome: "The Witcher 3: Wild Hunt", genero: "RPG / Mundo Aberto" },
    { nome: "Hollow Knight", genero: "Metroidvania" },
    { nome: "Elden Ring", genero: "Soulslike / Desafio" },
    { nome: "Cyberpunk 2077", genero: "Ficção Científica" },
    { nome: "Celeste", genero: "Plataforma Único" },
    { nome: "Hades II", genero: "Rogue-like / Ação" },
    { nome: "Red Dead Redemption 2", genero: "Ação / Narrativa Épica" },
    { nome: "God of War Ragnarök", genero: "Ação / Mitologia" },
    { nome: "Stardew Valley", genero: "Simulação / Relaxante" }
];

// Gerador Aleatório
function indicarJogo() {
    const resultadoDiv = document.getElementById('resultado-indicacao');
    const jogoSorteado = jogosParaIndicar[Math.floor(Math.random() * jogosParaIndicar.length)];
    
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        🎮 <strong>Recomendação do Gusta:</strong> ${jogoSorteado.nome}<br>
        📌 <strong>Gênero:</strong> ${jogoSorteado.genero}
    `;
}