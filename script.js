// Sistema de Curtidas
function curtir(botao) {
    const contadorSpan = botao.querySelector('.contador');
    let curtidas = parseInt(contadorSpan.textContent);
    
    curtidas++;
    contadorSpan.textContent = curtidas;
    botao.classList.add('curtido');
}

// Banco de Dados de Indicações de Jogos
const jogosParaIndicar = [
    { nome: "Minecraft (Java Edition)", genero: "Sandbox / Sobrevivência" },
    { nome: "The Witcher 3: Wild Hunt", genero: "RPG / Mundo Aberto" },
    { nome: "Hollow Knight", genero: "Metroidvania" },
    { nome: "Elden Ring", genero: "Soulslike / Desafio" },
    { nome: "Cyberpunk 2077", genero: "Ficção Científica" },
    { nome: "Celeste", genero: "Plataforma" },
    { nome: "Hades II", genero: "Rogue-like / Ação" },
    { nome: "Red Dead Redemption 2", genero: "Ação / Narrativa Épica" },
    { nome: "God of War Ragnarök", genero: "Ação / Mitologia" },
    { nome: "Stardew Valley", genero: "Simulação" }
];

// Gerador Aleatório de Jogos
function indicarJogo() {
    const resultadoDiv = document.getElementById('resultado-indicacao');
    if (!resultadoDiv) return;

    const jogoSorteado = jogosParaIndicar[Math.floor(Math.random() * jogosParaIndicar.length)];
    
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        🎮 <strong>Recomendação do Gusta:</strong> ${jogoSorteado.nome}<br>
        📌 <strong>Gênero:</strong> ${jogoSorteado.genero}
    `;
}