// TOGGLE DE TEMA (DARK / LIGHT)
function alternarTema() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('gustaTech_tema', isLight ? 'light' : 'dark');
    const btn = document.getElementById('btn-tema');
    if (btn) btn.innerText = isLight ? '☀️ Claro' : '🌙 Escuro';
}

// CARREGAR TEMA SALVO E CURTIDAS GLOBAIS AO ENTRAR NA PÁGINA
window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('gustaTech_tema');
    if (temaSalvo === 'light') {
        document.body.classList.add('light-theme');
        const btn = document.getElementById('btn-tema');
        if (btn) btn.innerText = '☀️ Claro';
    }
    carregarLikesGlobais();
});

// FUNÇÃO PARA LER MATÉRIA (CORRIGE O ERRO DE CLICAR NO BOTÃO DE LER)
function lerMateria(url) {
    if (url) {
        window.location.href = url;
    }
}

// FILTRO DE BUSCA EM TEMPO REAL
function filtrarMaterias() {
    const campo = document.getElementById('campo-busca');
    if (!campo) return;
    const termo = campo.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const titulo = card.querySelector('h3') ? card.querySelector('h3').innerText.toLowerCase() : '';
        const texto = card.querySelector('p') ? card.querySelector('p').innerText.toLowerCase() : '';
        const tag = card.querySelector('.tag') ? card.querySelector('.tag').innerText.toLowerCase() : '';

        if (titulo.includes(termo) || texto.includes(termo) || tag.includes(termo)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// BANCO DE DADOS DE JOGOS PARA INDICAÇÃO
const bancoJogos = [
    { nome: "The Witcher 3: Wild Hunt", genero: "RPG de Ação / Mundo Aberto", desc: "Acompanhe Geralt de Rívia na busca por Ciri num mundo vasto e cheio de escolhas morais." },
    { nome: "Red Dead Redemption 2", genero: "Ação e Aventura / Velho Oeste", desc: "Viva o fim da era dos fora-da-lei na pele de Arthur Morgan com detalhes impressionantes." },
    { nome: "Hollow Knight", genero: "Metroidvania / Indie", desc: "Explore o reino em ruínas de Hallownest combatendo insetos e desvendando segredos." },
    { nome: "Elden Ring", genero: "Soulslike / RPG", desc: "Desbrave as Terras Intermédias com combate desafiador e exploração totalmente livre." },
    { nome: "Cyberpunk 2077", genero: "RPG de Ação / Ficção Científica", desc: "Explore Night City, uma megalópole obsessiva por poder, glamour e modificações corporais." },
    { nome: "Minecraft", genero: "Sandbox / Sobrevivência", desc: "Construa qualquer coisa que sua imaginação permitir e sobreviva à noite." },
    { nome: "Terraria", genero: "Aventura 2D / Sandbox", desc: "Escave, lute, explore e construa em um mundo gerado procedimentalmente com centenas de chefes." },
    { nome: "Stardew Valley", genero: "Simulador de Fazenda / RPG", desc: "Restaure a fazenda do seu avô, faça amizade com os moradores e aproveite a vida no campo." },
    { nome: "Celeste", genero: "Plataforma de Precisão", desc: "Ajude Madeline a superar seus demônios internos e escalar a Montanha Celeste." },
    { nome: "Dead Cells", genero: "Rogue-lite / Action-Platformer", desc: "Lute para sair de uma ilha em constante mudança com combates rápidos e fluidos." },
    { nome: "God of War Ragnarök", genero: "Ação e Aventura / Mitologia", desc: "Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças de Asgard se preparam." },
    { nome: "Resident Evil 4 Remake", genero: "Survival Horror / Ação", desc: "Leon S. Kennedy enfrenta um culto sinistro na Europa para resgatar a filha do presidente." },
    { nome: "Portal 2", genero: "Puzzle / Ficção Científica", desc: "Use a arma de portais para resolver quebra-cabeças geniais guiado pela sarcástica GLaDOS." },
    { nome: "Dark Souls III", genero: "RPG de Ação / Fantasia Sombria", desc: "Enfrente Lordes das Cinzas num mundo decadente prestes a apagar a Chama." },
    { nome: "Grand Theft Auto V", genero: "Ação / Mundo Aberto", desc: "Planeje e execute assaltos com três criminosos muito diferentes na grande Los Santos." },
    { nome: "Subnautica", genero: "Sobrevivência / Exploração Marítima", desc: "Explore os oceanos alienígenas de um planeta desconhecido construindo bases e submersíveis." },
    { nome: "Hadès", genero: "Rogue-like / Ação", desc: "Como o Príncipe do Submundo, lute para se libertar do Reino dos Mortos com a ajuda dos deuses do Olimpo." },
    { nome: "Outer Wilds", genero: "Exploração Espacial / Mistério", desc: "Descubra os segredos de um sistema solar preso em um loop temporal de 22 minutos." },
    { nome: "Forza Horizon 5", genero: "Corrida / Mundo Aberto", desc: "Acelere centenas dos melhores carros do mundo nas paisagens dinâmicas do México." },
    { nome: "Sea of Thieves", genero: "Aventura Pirata / Multiplayer", desc: "Navegue, lute, explore e saqueie com seus amigos no mundo pirata definitivo." },
    { nome: "Baldur's Gate 3", genero: "RPG de Turnos / Fantasia", desc: "Reúna seu grupo e retorne aos Reinos Esquecidos numa história moldada por suas decisões." },
    { nome: "Devil May Cry 5", genero: "Hack and Slash / Ação", desc: "Corte hordas de demônios com estilo inigualável jogando com Nero, Dante e V." },
    { nome: "Persona 5 Royal", genero: "JRPG / Simulador de Vida", desc: "Lidere os Phantom Thieves para roubar os desejos corrompidos dos adultos durante a noite e estude durante o dia." },
    { nome: "Chrono Trigger", genero: "JRPG Clássico / Viagem no Tempo", desc: "Uma obra-prima atemporal sobre heróis que viajam por diferentes eras para salvar o futuro do planeta." },
    { nome: "Fallout: New Vegas", genero: "RPG / Pós-Apocalíptico", desc: "Defina o destino da desértica Mojave enfrentando facções e escolhendo seus próprios aliados." },
    { nome: "Nier: Automata", genero: "RPG de Ação / Hack and Slash", desc: "Androids 2B e 9S lutam para recuperar a Terra dominada por formas de vida mecânicas." },
    { nome: "Sekiro: Shadows Die Twice", genero: "Ação / Furtividade", desc: "Assuma o papel do Lobo de Um Braço num Japão do período Sengoku cheio de perigos." },
    { nome: "Ghost of Tsushima", genero: "Ação e Aventura / Samurai", desc: "Jin Sakai deve abandonar as tradições samurai para libertar a ilha de Tsushima da invasão mongol." },
    { nome: "Monster Hunter: World", genero: "Ação / Caça", desc: "Cace monstros gigantescos, crie equipamentos poderosos com seus recursos e explore ecossistemas vivos." },
    { nome: "Doom Eternal", genero: "FPS / Ação Frenética", desc: "Torne-se o Slayer e destrua as hordas do Inferno em dimensões inteiras." },
    { nome: "Bioshock Infinite", genero: "FPS de Ação / História", desc: "Resgate a misteriosa Elizabeth da cidade voadora de Columbia num enredo repleto de reviravoltas." },
    { nome: "Batman: Arkham Knight", genero: "Ação / Herói", desc: "Pilote o Batmóvel e enfrente a ameaça definitiva de Espantalho sobre Gotham City." },
    { nome: "Death Stranding", genero: "Ação / Ficção Científica", desc: "Conecte uma sociedade fraturada transportando suprimentos essenciais através de terras devastadas." },
    { nome: "Mass Effect Legendary Edition", genero: "RPG / Ficção Científica", desc: "Lidere o Comandante Shepard e salve a galáxia da ameaça dos Reapers na trilogia remasterizada." },
    { nome: "Ori and the Will of the Wisps", genero: "Plataforma / Metroidvania", desc: "Embarque numa nova aventura num mundo vasto e exótico cheio de inimigos e puzzles desafiadores." },
    { nome: "Kingdom Come: Deliverance", genero: "RPG Histórico / Realista", desc: "Viva a vida de Henry no Sacro Império Romano da Boêmia Medieval com combate e história ultra-realistas." },
    { nome: "Disco Elysium", genero: "RPG Investigativo / Narrativo", desc: "Resolva um assassinato como um detetive decadente usando um sistema de habilidades psicológicas único." },
    { nome: "Alan Wake 2", genero: "Survival Horror / Psicológico", desc: "Alterne entre o escritor Alan Wake e a agente do FBI Saga Anderson para escapar de um pesadelo vivo." },
    { nome: "Left 4 Dead 2", genero: "FPS Cooperativo / Zumbis", desc: "Enfrente hordas de infectados com até 4 amigos em campanhas cheias de adrenaline." },
    { nome: "Slay the Spire", genero: "Roguelike / Deckbuilder", desc: "Combine cartas, encontre relíquias e monte o baralho perfeito para subir o Espiral." },
    { nome: "Phasmophobia", genero: "Horror / Cooperativo", desc: "Investigue locais mal-assombrados usando equipamentos caça-fantasmas reais para identificar entidades." },
    { nome: "Project Zomboid", genero: "Sobrevivência Isométrica / Zumbis", desc: "O simulador definitivo de sobrevivência zumbi: quanto tempo você consegue resistir até morrer?" },
    { nome: "Valheim", genero: "Sobrevivência / Mitologia Nórdica", desc: "Explore, construa e lute para provar seu valor aos deuses num purgatório viking gerado procedimentalmente." },
    { nome: "Lies of P", genero: "Soulslike / Fantasia Sombria", desc: "Guie Pinóquio em sua jornada para se tornar humano numa Belle Époque tomada por marionetes assassinas." },
    { nome: "Control", genero: "Ação / Paranormal", desc: "Como a nova Diretora, use poderes telecinéticos para reverter a invasão paranormal no Antigo Departamento." },
    { nome: "Starfield", genero: "RPG Espacial", desc: "Explore mais de mil planetas numa jornada épica pelo espaço." },
    { nome: "Cuphead", genero: "Run and Gun", desc: "Enfrente chefes insanos com visuais inspirados em desenhos dos anos 1930." },
    { nome: "Undertale", genero: "RPG Indie", desc: "Um jogo onde ninguém precisa morrer e suas escolhas mudam tudo." },
    { nome: "RimWorld", genero: "Simulador de Colônia", desc: "Gerencie sobreviventes em um planeta distante enfrentando crises diárias." },
    { nome: "Cities: Skylines", genero: "Simulador de Cidades", desc: "Construa e gerencie o tráfego, economia e serviços de uma grande metrópole." },
    { nome: "Euro Truck Simulator 2", genero: "Simulação de Direção", desc: "Entregue cargas por estradas da Europa fundando sua própria empresa." },
    { nome: "Hollow Knight: Silksong", genero: "Metroidvania", desc: "A aguardada jornada de Hornet por um reino dominado por seda e música." }
];

function indicarJogo() {
    const sorteado = bancoJogos[Math.floor(Math.random() * bancoJogos.length)];
    const res = document.getElementById('resultado-indicacao');
    if (res) {
        res.style.display = 'block';
        res.innerHTML = `<strong>🎮 Jogo Sorteado:</strong> ${sorteado.nome}<br>
                         <strong>🏷️ Gênero:</strong> ${sorteado.genero}<br>
                         <strong>📝 Sobre:</strong> ${sorteado.desc}`;
    }
}

// SISTEMA DE CURTIDAS GLOBAIS NA NUVEM
const PORTAL_KEY = "gustatech_2026_likes";

function carregarLikesGlobais() {
    const botoes = document.querySelectorAll('.btn-like');
    botoes.forEach(btn => {
        const idMateria = btn.getAttribute('onclick') ? btn.getAttribute('onclick').match(/'([^']+)'/)[1] : null;
        if (idMateria) {
            fetch(`https://counterapi.com/api/${PORTAL_KEY}/${idMateria}`)
                .then(res => res.json())
                .then(data => {
                    const countSpan = document.getElementById(`like-count-${idMateria}`);
                    if (countSpan && data && data.value !== undefined) {
                        countSpan.innerText = data.value;
                    }
                })
                .catch(() => {});
        }
    });
}

function curtirMateria(idMateria) {
    const countSpan = document.getElementById(`like-count-${idMateria}`);
    fetch(`https://counterapi.com/api/${PORTAL_KEY}/${idMateria}/up`)
        .then(res => res.json())
        .then(data => {
            if (countSpan && data && data.value !== undefined) {
                countSpan.innerText = data.value;
            }
        })
        .catch(() => {
            if (countSpan) {
                let atual = parseInt(countSpan.innerText) || 0;
                countSpan.innerText = atual + 1;
            }
        });
}