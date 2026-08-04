// TOGGLE DE TEMA (DARK / LIGHT)
function alternarTema() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('gustaTech_tema', isLight ? 'light' : 'dark');
    document.getElementById('btn-tema').innerText = isLight ? '☀️ Claro' : '🌙 Escuro';
}

// CARREGAR TEMA SALVO E LIKES AO CARREGAR A PÁGINA
window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('gustaTech_tema');
    if (temaSalvo === 'light') {
        document.body.classList.add('light-theme');
        const btn = document.getElementById('btn-tema');
        if (btn) btn.innerText = '☀️ Claro';
    }
    carregarLikes();
});

// SISTEMA DE PESQUISA EM TEMPO REAL
function filtrarMaterias() {
    const termo = document.getElementById('campo-busca').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const titulo = card.querySelector('h3').innerText.toLowerCase();
        const texto = card.querySelector('p').innerText.toLowerCase();
        const tag = card.querySelector('.tag') ? card.querySelector('.tag').innerText.toLowerCase() : '';

        if (titulo.includes(termo) || texto.includes(termo) || tag.includes(termo)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// SISTEMA DE CURTIDAS PERSISTENTE (LOCALSTORAGE)
function curtirMateria(id) {
    let likes = parseInt(localStorage.getItem('like_' + id) || 0);
    likes++;
    localStorage.setItem('like_' + id, likes);
    const contador = document.getElementById('like-count-' + id);
    if (contador) contador.innerText = likes;
}

function carregarLikes() {
    const contadores = document.querySelectorAll('[id^="like-count-"]');
    contadores.forEach(el => {
        const id = el.id.replace('like-count-', '');
        const likes = localStorage.getItem('like_' + id) || 0;
        el.innerText = likes;
    });
}

// BANCO DE DADOS COMPLETO COM 50 JOGOS
const bancoJogos = [
    { nome: "The Witcher 3: Wild Hunt", genero: "RPG de Ação", desc: "Explore um mundo aberto rico em história na pele de Geralt de Rivia." },
    { nome: "Hollow Knight", genero: "Metroidvania", desc: "Desça pelas profundezas de Hallownest num universo sombrio e desafiador." },
    { nome: "Cyberpunk 2077", genero: "RPG Futurista", desc: "Explore a caótica Night City num visual cyberpunk impressionante." },
    { nome: "Minecraft Java Edition", genero: "Sobrevivência / Sandbox", desc: "Construa e explore mundos infinitos com liberdade total." },
    { nome: "Elden Ring", genero: "Souls-like / RPG", desc: "Enfrente chefes lendários e explore as Terras Intermediárias." },
    { nome: "Red Dead Redemption 2", genero: "Ação / Mundo Aberto", desc: "Viva a vida de um fora da lei na era do Velho Oeste americano." },
    { nome: "God of War Ragnarök", genero: "Ação / Aventura", desc: "Acompanhe Kratos e Atreus na jornada pelos nove reinos nórdicos." },
    { nome: "Grand Theft Auto V", genero: "Ação / Mundo Aberto", desc: "Três criminosos interligados cometem os maiores assaltos de Los Santos." },
    { nome: "Valorant", genero: "FPS Tático", desc: "Jogo de tiro competitivo em equipes com agentes e habilidades únicas." },
    { nome: "League of Legends", genero: "MOBA", desc: "Dispute partidas estratégicas 5v5 para destruir o Nexus inimigo." },
    { nome: "Counter-Strike 2", genero: "FPS Competitivo", desc: "O clássico jogo de tiro de precisão em rodadas de ataque e defesa." },
    { nome: "Fortnite", genero: "Battle Royale", desc: "Sobreviva, construa e seja o último jogador ou time em pé." },
    { nome: "Apex Legends", genero: "Battle Royale / Hero Shooter", desc: "Domine o combate dinâmico com lendas de habilidades distintas." },
    { nome: "Resident Evil 4 Remake", genero: "Terror / Ação", desc: "Leon S. Kennedy enfrenta hordas em uma vila europeia misteriosa." },
    { nome: "Stardew Valley", genero: "Simulação / Fazenda", desc: "Crie a fazenda dos seus sonhos, faça amigos e explore cavernas." },
    { nome: "Terraria", genero: "Sandbox 2D / Ação", desc: "Cave, lute, explore e construa em um vasto universo em pixels." },
    { nome: "Dark Souls III", genero: "Souls-like", desc: "Enfrente batalhas impiedosas em um mundo em ruínas." },
    { nome: "Sekiro: Shadows Die Twice", genero: "Ação / Furtividade", desc: "Domine a arte da katana no Japão feudal enfrentando inimigos mortais." },
    { nome: "Bloodborne", genero: "Souls-like / Terror", desc: "Cace pesadelos na macabra e gótica cidade de Yharnam." },
    { nome: "Hadès", genero: "Rogue-like", desc: "Lute para escapar do Submundo grego dominando poderes olímpicos." },
    { nome: "Celeste", genero: "Plataforma", desc: "Ajude Madeline a superar seus dilemas enquanto escala a Montanha Celeste." },
    { nome: "Dead Cells", genero: "Rogue-lite / Metroidvania", desc: "Explore um castelo em constante mudança em combates frenéticos." },
    { nome: "Portal 2", genero: "Puzzle / Ficção Científica", desc: "Resolva desafios com portais numa instalação científica abandonada." },
    { nome: "Half-Life 2", genero: "FPS / Aventura", desc: "Gordon Freeman lidera a resistência contra uma força alienígena dominadora." },
    { nome: "DOOM Eternal", genero: "FPS / Ação", desc: "Massacre hordas demoníacas em alta velocidade com armas devastadoras." },
    { nome: "Overwatch 2", genero: "Hero Shooter", desc: "Combate em equipe focado em objetivos com heróis de funções únicas." },
    { nome: "Genshin Impact", genero: "RPG de Ação / Anime", desc: "Explore Teyvat dominando elementos e recrutando diversos personagens." },
    { nome: "Sea of Thieves", genero: "Aventura / Piratas", desc: "Navegue, navegue em batalhas navais e procure tesouros com amigos." },
    { nome: "Forza Horizon 5", genero: "Corrida / Mundo Aberto", desc: "Acelere por paisagens vibrantes e dinâmicas no mapa do México." },
    { nome: "The Legend of Zelda: Tears of the Kingdom", genero: "Ação / Aventura", desc: "Explore os céus e as terras de Hyrule criando invenções incríveis." },
    { nome: "Super Mario Odyssey", genero: "Plataforma 3D", desc: "Viaje por diversos reinos resgatando a Princesa Peach com a ajuda de Cappy." },
    { nome: "Persona 5 Royal", genero: "JRPG", desc: "Viva a vida de um estudante enquanto rouba os corações de adultos corruptos." },
    { nome: "Monster Hunter: World", genero: "Ação / Caça", desc: "Cace monstros gigantescos para criar equipamentos cada vez mais fortes." },
    { nome: "Baldur's Gate 3", genero: "RPG / Turnos", desc: "Suas escolhas moldam uma história épica no universo de Dungeons & Dragons." },
    { nome: "Overcooked! 2", genero: "Cooperativo / Cozinha", desc: "Trabalhe em equipe para preparar pedidos em cozinhas totalmente malucas." },
    { nome: "It Takes Two", genero: "Aventura Cooperativa", desc: "Uma jornada única criada exclusivamente para jogar em dupla." },
    { nome: "Fall Guys", genero: "Party Game / Battle Royale", desc: "Desvie de obstáculos malucos em corridas multiplayer cheias de caos." },
    { nome: "Subnautica", genero: "Sobrevivência / Exploração", desc: "Mergulhe nas profundezas de um oceano alienígena misterioso e perigoso." },
    { nome: "Lethal Company", genero: "Coop / Terror Comédia", desc: "Colete sucata em luas abandonadas tentando sobreviver às criaturas." },
    { nome: "Phasmophobia", genero: "Terror Co-op", desc: "Utilize equipamentos caça-fantasmas para identificar assombrações." },
    { nome: "Left 4 Dead 2", genero: "FPS / Zumbis", desc: "Sobreviva a hordas de infectados em campanhas cooperativas clássicas." },
    { nome: "Alan Wake 2", genero: "Survival Horror", desc: "Sinta o suspense psicológico enquanto investiga assassinatos e pesadelos." },
    { nome: "Control", genero: "Ação / Ficção Científica", desc: "Use poderes telecinéticos para conter forças paranormais em um prédio secreto." },
    { nome: "Starfield", genero: "RPG Espacial", desc: "Explore mais de mil planetas numa jornada épica pelo espaço." },
    { nome: "Cuphead", genero: "Run and Gun", desc: "Enfrente chefes insanos com visuais inspirados em desenhos dos anos 1930." },
    { nome: "Undertale", genero: "RPG Indie", desc: "Um jogo onde ninguém precisa morrer e suas escolhas mudam tudo." },
    { nome: "RimWorld", genero: "Simulador de Colônia", desc: "Gerencie sobreviventes em um planeta distante enfrentando crises diárias." },
    { nome: "Cities: Skylines", genero: "Simulador de Cidades", desc: "Construa e gerencie o tráfego, economia e serviços de uma grande metrópole." },
    { nome: "Euro Truck Simulator 2", genero: "Simulação de Direção", desc: "Entregue cargas por estradas da Europa fundando sua própria empresa." },
    { nome: "Hollow Knight: Silksong", genero: "Metroidvania", desc: "A aguardada jornada de Hornet por um reino dominado por seda e música." }
];

// FUNÇÃO DO SORTEADOR
function indicarJogo() {
    const sorteado = bancoJogos[Math.floor(Math.random() * bancoJogos.length)];
    const res = document.getElementById('resultado-indicacao');
    res.style.display = 'block';
    res.innerHTML = `<strong>🎮 Jogo Sorteado:</strong> ${sorteado.nome}<br>
                     <strong>🏷️ Gênero:</strong> ${sorteado.genero}<br>
                     <strong>📝 Resumo:</strong> ${sorteado.desc}`;
}

// FUNÇÃO DE VOTAÇÃO DA ENQUETE
function votarEnquete(opcao) {
    alert(`Obrigado pelo voto na opção: ${opcao}!`);
}