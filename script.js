// Sistema de Curtidas
function curtir(botao) {
    const contadorSpan = botao.querySelector('.contador');
    let curtidas = parseInt(contadorSpan.textContent);
    
    curtidas++;
    contadorSpan.textContent = curtidas;
    botao.classList.add('curtido');
}

// Banco de Dados com Nome, Gênero e História/Sinopse dos Jogos
const jogosParaIndicar = [
    {
        nome: "Minecraft (Java Edition)",
        genero: "Sandbox / Sobrevivência",
        historia: "Você acorda em um mundo gerado infinitamente feito inteiramente de blocos. Sem instruções prévias, precisa coletar madeira, construir abrigos e explorar cavernas profundas antes que a noite caia e os monstros apareçam. O objetivo final é fortalecer seu personagem até alcançar a dimensão do End e derrotar o temível Ender Dragon."
    },
    {
        nome: "The Witcher 3: Wild Hunt",
        genero: "RPG de Ação / Mundo Aberto",
        historia: "Você controla Geralt de Rívia, um caçador de monstros mutante. Em um mundo devastado pela guerra, Geralt precisa encontrar Ciri, sua filha adotiva, que possui poderes capazes de mudar o mundo e está sendo perseguida implacavelmente pela Caçada Selvagem, um exército espectral e aterrorizante."
    },
    {
        nome: "Hollow Knight",
        genero: "Metroidvania / Ação",
        historia: "Na pele de um pequeno cavaleiro silencioso, você desce às ruínas esquecidas do reino subterrâneo de Hallownest. Enfrentando insetos corrompidos por uma infecção misteriosa e descobrindo segredos antigos, sua missão é desvendar a origem da escuridão e salvar o reino da ruína total."
    },
    {
        nome: "Elden Ring",
        genero: "Soulslike / Ação e Aventura",
        historia: "Nas Terras Intermédias, o lendário Anel de Prístino foi destruído. Como um Maculado banido, você deve retornar a este reino em colapso, enfrentar demideuses e chefes colossais corrompidos pelo poder dos fragmentos do anel para reivindicar o poder supremo e se tornar o Próximo Lorde Prístino."
    },
    {
        nome: "Cyberpunk 2077",
        genero: "RPG de Ficção Científica",
        historia: "Em Night City, uma megalópole obcecada por poder e modificações corporais, você joga como V, um mercenário urbano. Após um roubo dar terrivelmente errado, um biochip com a consciência de um lendário roqueiro falecido é instalado no seu cérebro, dando início a uma corrida contra o tempo para salvar sua própria vida."
    },
    {
        nome: "Celeste",
        genero: "Plataforma Desafiador",
        historia: "Acompanhe a jornada de Madeline enquanto ela tenta escalar a misteriosa e perigosa Montanha Celeste. Ao longo da subida, ela precisa superar não apenas obstáculos físicos mortais, mas também enfrentar seus próprios demônios internos, ansiedade e dúvidas pessoais."
    },
    {
        nome: "Hades II",
        genero: "Rogue-like / Ação Acelerada",
        historia: "Assuma o papel de Melinoë, a Princesa do Submundo e irmã de Zagreus. Usando magia negra e armas lendárias, você deve lutar contra as forças de Cronos, o Titã do Tempo, para resgatar seu pai e salvar o panteão dos deuses gregos."
    },
    {
        nome: "Red Dead Redemption 2",
        genero: "Ação / Narrativa Épica no Faroeste",
        historia: "No fim da era do Velho Oeste americano em 1899, Arthur Morgan é um membro fiel da gangue Van der Linde. Com agentes federais e caçadores de recompensa na sua cola, a gangue precisa roubar e lutar para sobreviver, enquanto Arthur é forçado a escolher entre seus próprios ideais e a lealdade ao grupo."
    },
    {
        nome: "God of War Ragnarök",
        genero: "Ação e Aventura / Mitologia Nórdica",
        historia: "Kratos e seu filho Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças de Asgard se preparam para a profetizada batalha do fim do mundo, o Ragnarök. Pelo caminho, enfrentam deuses vingativos como Thor e Odin."
    },
    {
        nome: "Stardew Valley",
        genero: "Simulação de Vida no Campo",
        historia: "Cansado da rotina exaustiva do trabalho em uma grande corporação, você herda a antiga fazenda do seu avô na pacata Vila dos Pelicanos. Com ferramentas usadas e poucas moedas, você precisa limpar o terreno, cultivar plantas, criar animais e interagir com os moradores para trazer a vila de volta à vida."
    }
];

// Gerador Aleatório com Sinopse Completa
function indicarJogo() {
    const resultadoDiv = document.getElementById('resultado-indicacao');
    if (!resultadoDiv) return;

    const jogoSorteado = jogosParaIndicar[Math.floor(Math.random() * jogosParaIndicar.length)];
    
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <h4 style="color: #04d361; font-size: 1.3rem; margin-bottom: 0.5rem;">🎮 ${jogoSorteado.nome}</h4>
        <p style="margin-bottom: 0.8rem;"><strong>📌 Gênero:</strong> ${jogoSorteado.genero}</p>
        <p style="color: #a8a8b3; text-align: justify; line-height: 1.5;"><strong>📖 História & Sinopse:</strong> ${jogoSorteado.historia}</p>
    `;
}