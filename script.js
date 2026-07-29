// Banco de Dados com as 40 Matérias Completas
const bancoDeMaterias = {
    // NOVIDADES (1 a 10)
    'novidade-1': {
        titulo: "Anúncio do Novo Console de Última Geração",
        texto: "Patentes recentes vazadas no escritório de propriedade intelectual confirmam que os próximos consoles focarão no processamento dedicado via Inteligência Artificial para reconstrução de quadros e Ray Tracing nativo sem perda de desempenho. A promessa é de suporte nativo a 4K e 120 FPS constantes em quase todos os jogos AAA."
    },
    'novidade-2': {
        titulo: "Lançamentos do Mês: O que chega aos consoles e PC",
        texto: "Este mês promete ser um dos mais movimentados do ano para a indústria dos games. Grandes sequências de franquias aclamadas e novos títulos indies surpreendentes estão chegando. Entre os destaques estão jogos de aventura em mundo aberto, novos simuladores de corrida ultra-realistas e jogos de ação competitivos."
    },
    'novidade-3': {
        titulo: "Evento Anual de E-Sports Bate Recorde de Premiação",
        texto: "O campeonato mundial deste ano anunciou uma premiação total que supera a marca de US$ 20 milhões. Equipes do mundo inteiro já desembarcaram para os treinos intensivos. Os organizadores prometem uma arena tecnológica com hologramas e transmissões ao vivo em resolução 4K para milhões de espectadores online."
    },
    'novidade-4': {
        titulo: "A Nova Era da Realidade Virtual nos Games",
        texto: "A nova geração de óculos VR promete eliminar totalmente os fios e a necessidade de computadores externos superpotentes. Com rastreamento ocular e motores hápicos no capacete, o jogador sente vibrações no rosto conforme o ambiente ao redor muda, levando a imersão a um nível nunca antes visto."
    },
    'novidade-5': {
        titulo: "Novo Motor Gráfico Renderiza Florestas em Tempo Real",
        texto: "A nova engine apresentada por desenvolvedores independentes promete revolucionar a criação de cenários. Com física de folhas individualizadas, simulação realista de vento e água com refração física exata, os estúdios poderão criar mundos abertos sem telas de carregamento intermediárias."
    },
    'novidade-6': {
        titulo: "Remake do Clássico dos Anos 2000 é Confirmado",
        texto: "Atendendo a pedidos de milhares de fãs, a desenvolvedora anunciou oficialmente o desenvolvimento do remake completo de um dos jogos mais marcantes dos anos 2000. O título será refeito do zero na linguagem e motores gráficos modernos, mantendo a história original com jogabilidade reformulada."
    },
    'novidade-7': {
        titulo: "Jogos em Nuvem Diretamente em Smart TVs",
        texto: "A tecnologia de Cloud Gaming finalmente chegou ao ponto de estabilidade ideal. Sem necessidade de comprar um console de mil reais, qualquer usuário com uma TV inteligente e um controle Bluetooth conectado pode jogar os lançamentos mais pesados da atualidade direto pela internet."
    },
    'novidade-8': {
        titulo: "Jogo Indie Surpresa Bate 1 Milhão de Jogadores",
        texto: "Desenvolvido por apenas três pessoas, um novo jogo indie focado em cooperação e física divertida viralizou nas redes sociais e bateu o recorde de 1 milhão de pessoas jogando simultaneamente nas plataformas digitais, superando até grandes produções milionárias."
    },
    'novidade-9': {
        titulo: "Feira Internacional de Games Revela Novos Trailers",
        texto: "Durante o evento principal da feira, mais de 30 trailers inéditos foram mostrados ao vivo. Entre as revelações estão novas franquias de ficção científica, expansões gratuitas para jogos populares e atualizações sobre títulos aguardados há anos pela comunidade."
    },
    'novidade-10': {
        titulo: "Fusão Entre Grandes Estúdios Abala o Mercado",
        texto: "Uma das maiores compras da história do entretenimento foi finalizada esta semana. A fusão reúne sob o mesmo teto franquias consagradas de RPG, tiro e estratégia. Especialistas acreditam que isso facilitará a criação de crossovers e grandes lançamentos no serviço de assinatura."
    },

    // UPDATES (1 a 10)
    'update-1': {
        titulo: "GTA VI - Vazamentos Detalham Sistema de Física",
        texto: "Novas análises do código vazado indicam que a física dos veículos e dos cenários em GTA VI será a mais complexa já criada. Colisões afetam o comportamento dinâmico do carro, partes da lataria amassam com precisão milimétrica e a inteligência dos NPCs reage a tiros e clima de forma realista."
    },
    'update-2': {
        titulo: "Fortnite - Patch Notes da Nova Temporada",
        texto: "A atualização traz mudanças significativas no mapa, adicionando novas regiões futuristas e tempestades dinâmicas. Além disso, as armas de assalto sofreram balanceamento de dano e novos consumíveis de cura rápida foram adicionados ao baú lendário."
    },
    'update-3': {
        titulo: "Valorant & CS2 - Reformulação de Agentes e Recuo",
        texto: "Os novos patches competitivos focaram no equilíbrio tático. As habilidades de contenção de mapa de vários agentes sofreram aumentos no tempo de recarga, enquanto o padrão de recuo (recoil) das snipers foi ajustado para evitar tiros perfeitos em movimento."
    },
    'update-4': {
        titulo: "Minecraft - Otimização de FPS e Correção de Renderização",
        texto: "O novo patch foca em resolver pequenos travamentos ao carregar novas chunks do mapa. A otimização melhora a estabilidade em computadores fracos e corrige bugs clássicos de renderização de iluminação em cavernas profundas."
    },
    'update-5': {
        titulo: "League of Legends - Análise do Novo Campeão",
        texto: "A atualização introduz o novo atirador com mecânicas de mobilidade baseadas em terreno. O patch também alterou itens fundamentais da selva e reajustou a vida das torres para evitar jogos finalizados em menos de 15 minutos."
    },
    'update-6': {
        titulo: "Cyberpunk 2077 - Update de Desempenho e IA",
        texto: "O mais recente patch traz suporte para as tecnologias mais avançadas de geração de quadros por inteligência artificial. A polícia do jogo agora realiza perseguições táticas em tempo real e a densidade de pedestres nas ruas foi otimizada."
    },
    'update-7': {
        titulo: "EA Sports FC - Atualização das Janelas de Transferência",
        texto: "O novo update do simulador de futebol traz todas as transferências recentes do mercado internacional atualizadas, além de adicionar mais de 50 novas faces escaneadas de jogadores e correções na física da bola no modo Ultimate Team."
    },
    'update-8': {
        titulo: "Rocket League - Nova Temporada e Arenas Especiais",
        texto: "A nova temporada traz arenas com temáticas espaciais e efeitos de gravidade customizados para eventos de tempo limitado. Novos modelos de carros e rastros de turbo foram adicionados ao passe de temporada."
    },
    'update-9': {
        titulo: "Apex Legends - Rotação de Lendas e Mapa Reformulado",
        texto: "A atualização da temporada trouxe alterações nas habilidades passivas de lendas defensivas para acelerar a dinâmica das partidas. O mapa principal teve áreas antigas destruídas para dar lugar a complexos industriais."
    },
    'update-10': {
        titulo: "Genshin Impact & Honkai - Expansão de Continente",
        texto: "Uma vasta região inexplorada com novas missões de história, chefes semanais e quebra-cabeças ambientais foi liberada. O patch também aumentou o limite de resina armazenável para facilitar a evolução de artefatos."
    },

    // TEORIAS (1 a 10)
    'teoria-1': {
        titulo: "Teoria do Sonho: O protagonista esteve desacordado?",
        texto: "Analisando a paleta de cores e os relógios espalhados pelo mapa, descobrimos que o tempo nunca passa de forma natural. Diversos detalhes no cenário sugerem que todos os acontecimentos são uma jornada metafórica da mente do protagonista superando traumas do passado."
    },
    'teoria-2': {
        titulo: "O que Esperar da Sequência do RPG do Ano?",
        texto: "Juntando easter eggs encontrados na versão final e diários de áudio escondidos, os fãs teorizam que a sequência mudará totalmente de mapa, levando os jogadores para o continente vizinho que era mencionado apenas em livros dentro do jogo."
    },
    'teoria-3': {
        titulo: "O Enigma do Chefão Final: Ele era o verdadeiro herói?",
        texto: "Símbolos e inscrições em ruínas antigas mostram que o vilão final não queria destruir o mundo, mas sim conter uma força muito mais sombria que estava presa sob o Castelo. Ao derrotá-lo, o jogador pode ter libertado o verdadeiro mal."
    },
    'teoria-4': {
        titulo: "Mundos Conectados: Dois jogos no mesmo planeta",
        texto: "Uma teoria popular provou através de marcas de corporações idênticas nos cenários que um famoso jogo de ficção científica e um jogo de ação espacial acontecem na mesma linha do tempo, apenas separados por 200 anos de história."
    },
    'teoria-5': {
        titulo: "A Identidade Secreta do Fantasma do Cenário",
        texto: "Sabe a figura sombria que aparece distante no topo dos prédios em algumas missões? Fãs analisaram a malha do modelo 3D nos arquivos do jogo e descobriram que ele possui as mesmas cicatrizes do mentor do protagonista."
    },
    'teoria-6': {
        titulo: "Viagem no Tempo e o Paradoxo Não Resolvido",
        texto: "Ao analisar a linha do tempo da campanha, percebe-se que a viagem no tempo realizada na missão 7 cria um paradoxo: se o herói salvou o reino no passado, a sua versão do futuro não teria motivos para viajar no tempo."
    },
    'teoria-7': {
        titulo: "A Origem Secreta da Infecção no Survival Horror",
        texto: "Documentos esquecidos em arquivos secretos apontam que o vírus responsável pelo apocalipse não surgiu de uma mutação natural, mas sim de uma tentativa militar de criar soldados com regeneração acelerada de tecidos."
    },
    'teoria-8': {
        titulo: "Qual é o Final Realmente Canônico?",
        texto: "Apesar de haver três finais possíveis no jogo, falas de desenvolvedores em entrevistas recentes e referências em quadrinhos derivados apontam que o final 'Ruim' é o que oficialmente conecta a história com a sequência já anunciada."
    },
    'teoria-9': {
        titulo: "Inteligência Artificial Ganhou Consciência Própria?",
        texto: "Uma análise do comportamento da IA que guia o jogador ao longo da história revela que seus diálogos vão se tornando cada vez menos mecânicos e mais emocionais à medida que o jogador escolhe opções de compaixão."
    },
    'teoria-10': {
        titulo: "O Mistério dos Habitantes da Ilha Abandonada",
        texto: "Por que uma civilização inteira sumiu de repente deixando comida na mesa e construtos ativos? Pistas em murais de pedra indicam que eles descobriram como transferir suas consciências para a própria ilha."
    },

    // MUNDO JAVA (1 a 10)
    'java-1': {
        titulo: "Minecraft Java Snapshots: Testando o Futuro",
        texto: "As snapshots do Minecraft Java Edition são a janela onde a Mojang testa mecânicas antes de lançá-las ao mundo. Testamos as novas ferramentas de construção, biomas subterrâneos reformulados e os novos comportamentos dos mobs neutros."
    },
    'java-2': {
        titulo: "Os Melhores Mods em Java para Otimização de FPS",
        texto: "A comunidade de Java desenvolveu modificações incríveis que reescrevem o motor de renderização do Minecraft. Mods como Sodium e Lithium conseguem triplicar o número de quadros por segundo em computadores fracos."
    },
    'java-3': {
        titulo: "A Era dos Celulares J2ME nos Anos 2000",
        texto: "Antes dos smartphones com Android e iOS, o Java ME (J2ME) era a tecnologia dominante que permitia rodar jogos coloridos e divertidos em aparelhos tijolão com teclas numéricas. A era de ouro dos jogos móveis começou aqui!"
    },
    'java-4': {
        titulo: "Diamond Rush: O Inesquecível Clássico Java",
        texto: "Diamond Rush marcou época nos celulares antigos. Com quebra-cabeças inteligentes em templos, pedras rolantes e inimigos variados, o título provou que jogos para celular em Java podiam ter um design de fases excepcional."
    },
    'java-5': {
        titulo: "Bounce Tales: A Física Maravilhosa do Game da Bolinha",
        texto: "Com uma física surpreendentemente fluida para a época, Bounce Tales colocava o jogador no controle de uma bolinha vermelha que podia mudar de forma para flutuar ou quebrar barreiras. Um verdadeiro marco da nostalgia Java!"
    },
    'java-6': {
        titulo: "Como Funciona a Programação de Jogos em Java",
        texto: "Criar um jogo em Java envolve entender conceitos fundamentais como Game Loop, Renderização em Canvas e Gerenciamento de Memória (Garbage Collector). É uma das melhores linguagens para aprender lógica de jogos do zero."
    },
    'java-7': {
        titulo: "Como Criar seu Próprio Servidor de Minecraft Java",
        texto: "Utilizando a base em Java e arquivos de servidor dedicados como Paper ou Spigot, qualquer jogador pode configurar um servidor personalizado em seu computador para jogar com amigos utilizando plugins e comandos customizados."
    },
    'java-8': {
        titulo: "RuneScape: O MMORPG em Java que Rodava no Navegador",
        texto: "RuneScape fez história no início dos anos 2000 por permitir que milhares de jogadores explotassem um mundo gigante e interativo rodando o jogo diretamente dentro de abas do navegador de internet através do Java Applet."
    },
    'java-9': {
        titulo: "Emuladores de Jogos Java para PC e Android",
        texto: "Hoje em dia é possível reviver todos os jogos clássicos de celular da época do J2ME usando emuladores leves como o J2ME Loader no Android ou o KSEmulator no PC, preservando a história dos games mobile."
    },
    'java-10': {
        titulo: "Por que o Java Continua Forte no Desenvolvimento de Games?",
        texto: "Mesmo com o surgimento de novas linguagens, o Java continua extremamente relevante devido à sua portabilidade ('escreva uma vez, rode em qualquer lugar'), facilidade de manutenção e comunidade gigante de modding."
    }
};

// Salva e Trava Curtida + Redireciona para a Matéria Completa
function curtirELer(idItem) {
    let curtido = localStorage.getItem("curtido_" + idItem);

    if (!curtido) {
        localStorage.setItem("curtido_" + idItem, "true");
    }

    // Redireciona abrindo a matéria com o ID correto
    window.location.href = "materia.html?id=" + idItem;
}

// Verifica se já foi curtido nas páginas de lista e adiciona o botão de reler
function atualizarBotoesSalvos() {
    const botoes = document.querySelectorAll(".btn-curtir");

    botoes.forEach(botao => {
        const onclickAttr = botao.getAttribute("onclick");
        if (onclickAttr) {
            const match = onclickAttr.match(/'([^']+)'/);
            if (match) {
                const idItem = match[1];
                const estaCurtido = localStorage.getItem("curtido_" + idItem);

                if (estaCurtido) {
                    botao.classList.add("curtido");
                    botao.innerHTML = "✅ Curtido! (1)";
                    botao.disabled = true;
                    botao.style.cursor = "default";

                    const card = botao.parentElement;
                    if (!card.querySelector(".btn-reler")) {
                        const btnReler = document.createElement("a");
                        btnReler.href = "materia.html?id=" + idItem;
                        btnReler.className = "btn-reler";
                        btnReler.innerHTML = "📖 Reler Matéria Completa";
                        card.appendChild(btnReler);
                    }
                }
            }
        }
    });
}

// Carrega o título e texto dinamicamente dentro de materia.html
function carregarMateriaCompleta() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const tituloEl = document.getElementById('materia-titulo');
    const conteudoEl = document.getElementById('materia-conteudo');

    if (id && bancoDeMaterias[id]) {
        const materia = bancoDeMaterias[id];
        tituloEl.textContent = materia.titulo;
        conteudoEl.innerHTML = `<p>${materia.texto}</p>`;
        document.title = materia.titulo + " - GustaTech";
    } else if (tituloEl && conteudoEl) {
        tituloEl.textContent = "Matéria Não Encontrada";
        conteudoEl.innerHTML = "<p>A história procurada não existe ou foi removida.</p>";
    }
}

// Executa atualização ao carregar páginas
document.addEventListener("DOMContentLoaded", function () {
    atualizarBotoesSalvos();
});

// =========================================================
// BANCO DE DADOS COM 50 JOGOS VARIADOS PARA O SORTEADOR
// =========================================================
const jogosParaIndicar = [
    {
        nome: "Minecraft (Java Edition)",
        genero: "Sandbox / Sobrevivência",
        sinopse: "Você acorda em um mundo infinito gerado por blocos. Sem tutoriais impostos, precisa explorar cavernas, coletar recursos e construir abrigos antes que as criaturas da noite apareçam."
    },
    {
        nome: "The Witcher 3: Wild Hunt",
        genero: "RPG / Mundo Aberto",
        sinopse: "Geralt de Rívia é um caçador de monstros mutante procurando por sua filha adotiva Ciri, que está sendo perseguida por uma horda de cavaleiros espectrais conhecida como Caçada Selvagem."
    },
    {
        nome: "Hollow Knight",
        genero: "Metroidvania / Ação",
        sinopse: "Um cavaleiro silencioso adentra o reino esquecido de Hallownest para desvendar os segredos de uma infecção luminosa que enlouqueceu todos os seus habitantes."
    },
    {
        nome: "Elden Ring",
        genero: "Soulslike / RPG de Ação",
        sinopse: "Nas Terras Intermédias, o Anel de Prístino foi destruído. Como um Maculado, você deve derrotar semideuses corrompidos e reivindicar o trono do Lorde Prístino."
    },
    {
        nome: "Cyberpunk 2077",
        genero: "RPG / Ficção Científica",
        sinopse: "Na metrópole futurista de Night City, o mercenário V acidentalmente instala um biochip com a consciência do falecido roqueiro rebelde Johnny Silverhand, iniciando uma corrida contra o tempo pela sobrevivência."
    },
    {
        nome: "Red Dead Redemption 2",
        genero: "Ação / Mundo Aberto Ocidental",
        sinopse: "Arthur Morgan é um membro da gangue Van der Linde em fuga da lei no fim da era do Velho Oeste americano, lutando entre a lealdade aos seus companheiros e seus próprios princípios morais."
    },
    {
        nome: "EA Sports FC 24 (FIFA)",
        genero: "Esporte / Futebol",
        sinopse: "O principal simulador de futebol do mundo, trazendo elencos reais atualizados, física realista da bola, partidas competitivas online e a experiência de gerenciar um clube no Modo Carreira."
    },
    {
        nome: "Grand Theft Auto V (GTA V)",
        genero: "Ação / Mundo Aberto",
        sinopse: "Três criminosos muito diferentes arriscam tudo em uma série de assaltos ousados na perigosa e ensolarada cidade de Los Santos."
    },
    {
        nome: "God of War Ragnarök",
        genero: "Ação / Aventura Mitológica",
        sinopse: "Kratos e seu filho Atreus devem viajar pelos Nove Reinos da mitologia nórdica em busca de respostas enquanto o apocalíptico Ragnarök se aproxima."
    },
    {
        nome: "Forza Horizon 5",
        genero: "Corrida / Mundo Aberto",
        sinopse: "Pilote centenas dos melhores carros do mundo em corridas alucinantes através dos cenários vibrantes e em constante mudança das paisagens do México."
    },
    {
        nome: "Stardew Valley",
        genero: "Simulação / RPG de Fazenda",
        sinopse: "Você herdou a antiga fazenda do seu avô. Com ferramentas velhas e poucas moedas, você precisa aprender a viver da terra e transformar os campos abandonados em um lar próspero."
    },
    {
        nome: "Resident Evil 4 Remake",
        genero: "Survival Horror / Ação",
        sinopse: "O agente especial Leon S. Kennedy é enviado a uma vilarejo isolado na Europa para resgatar a filha do presidente americano, enfrentando hordas de aldeões infectados por um parasita misterioso."
    },
    {
        nome: "Grand Turismo 7",
        genero: "Simulador de Corrida",
        sinopse: "Celebrando a cultura automotiva, o jogo oferece centenas de veículos detalhados, pistas históricas e simulação precisa de física e desgaste de pneus."
    },
    {
        nome: "NBA 2K24",
        genero: "Esporte / Basquete",
        sinopse: "A experiência definitiva de basquete que permite comandar seus times favoritos da NBA, criar seu próprio atleta e disputar ligas online."
    },
    {
        nome: "Spider-Man 2 (PS5)",
        genero: "Ação / Super-herói",
        sinopse: "Peter Parker e Miles Morales enfrentam seu maior desafio quando o simbionte Venom ameaça destruir a cidade de Nova York e suas vidas pessoais."
    },
    {
        nome: "The Legend of Zelda: Tears of the Kingdom",
        genero: "Aventura / Mundo Aberto",
        sinopse: "Link explora os céus e as profundezas de Hyrule usando novas habilidades de construção para deter uma força ancestral que ameaça o reino."
    },
    {
        nome: "Terraria",
        genero: "Sandbox / Aventura 2D",
        sinopse: "Cave, lute, explore e construa! Nesse jogo de sobrevivência 2D, o mundo é seu tela enquanto você enfrenta dezenas de chefes monstruosos."
    },
    {
        nome: "Rocket League",
        genero: "Esporte / Ação com Carros",
        sinopse: "Futebol encontra carros movidos a foguete! Partidas aceleradas onde o objetivo é usar impulsos e manobras aéreas para colocar a bola gigante no gol adversário."
    },
    {
        nome: "Overwatch 2",
        genero: "Tiro Tático / Hero Shooter",
        sinopse: "Um jogo de tiro em equipe onde heróis futuristas com habilidades únicas batalham ao redor do mundo por objetivos táticos."
    },
    {
        nome: "Valorant",
        genero: "Tiro Tático / FPS",
        sinopse: "Um FPS competitivo de 5 contra 5 baseado em rodadas, onde o uso preciso de armas de fogo se junta a habilidades mágicas e tecnológicas dos agentes."
    },
    {
        nome: "Counter-Strike 2 (CS2)",
        genero: "Tiro Tático / FPS",
        sinopse: "O clássico jogo de confronto entre Contra-Terroristas e Terroristas em sua versão modernizada com nova engine gráfica e física de fumaça interativa."
    },
    {
        nome: "League of Legends",
        genero: "MOBA / Estratégia",
        sinopse: "Duas equipes de 5 campeões se enfrentam em uma arena para destruir a estrutura principal (Nexus) da base inimiga utilizando estratégia e trabalho em equipe."
    },
    {
        nome: "Dark Souls III",
        genero: "Soulslike / RPG de Ação",
        sinopse: "Viaje por Lothric em um mundo à beira do apocalipse, derrotando os Lordes das Cinzas para decidir o destino da Primeira Chama."
    },
    {
        nome: "Sekiro: Shadows Die Twice",
        genero: "Ação / Aventura Ninja",
        sinopse: "No Japão do período Sengoku, um shinobi de um braço só busca resgatar seu jovem mestre e se vingar de seus inimigos usando aparas de espada perfeitas."
    },
    {
        nome: "Bloodborne",
        genero: "Soulslike / Terror Gótico",
        sinopse: "Um caçador chega à cidade amaldiçoada de Yharnam em busca de uma cura, mas descobre que as ruas foram tomadas por feras bestiais e segredos cósmicos."
    },
    {
        nome: "Monster Hunter: World",
        genero: "RPG de Ação / Caça",
        sinopse: "Assuma o papel de um caçador explorando um ecossistema vivo para rastrear e batalhar contra monstros colossais, usando seus materiais para forjar armas melhores."
    },
    {
        nome: "Fall Guys",
        genero: "Party Game / Battle Royale",
        sinopse: "Dezenas de competidores em forma de jujuba enfrentam percursos de obstáculos caóticos até restar apenas um vencedor com a coroa."
    },
    {
        nome: "Dead by Daylight",
        genero: "Terror Assimétrico",
        sinopse: "Um jogo de horror 4vs1 onde um jogador assume o papel de um Assassino brutal e os outros quatro tentam escapar sem serem capturados."
    },
    {
        nome: "Genshin Impact",
        genero: "RPG / Mundo Aberto Fantasia",
        sinopse: "O Viajante chega ao mundo mágico de Teyvat para procurar seu irmão perdido, dominando poderes elementais e conhecendo aliados com histórias únicas."
    },
    {
        nome: "Sea of Thieves",
        genero: "Aventura Pirata / Mundo Aberto",
        sinopse: "Viva a vida pirata definitiva navegando com seus amigos, buscando tesouros perdidos, enfrentando esqueletos e batalhando contra navios rivais."
    },
    {
        nome: "Cuphead",
        genero: "Plataforma / Boss Rush",
        sinopse: "Inspirado nos desenhos animados dos anos 1930, Cuphead e Mugman precisam derrotar chefes insanos para pagar uma dívida que fizeram com o Diabo."
    },
    {
        nome: "Hadès",
        genero: "Rogue-like / Ação Mitológica",
        sinopse: "Zagreus, o príncipe do Submundo, luta para fugir do reino de seu pai Hades através de dungeons geradas aleatoriamente e bênçãos dos deuses do Olimpo."
    },
    {
        nome: "Dead Cells",
        genero: "Rogue-lite / Metroidvania",
        sinopse: "Explore um castelo em constante mudança em um combate dinâmico em 2D. Se você morrer, volta ao início, mas guarda melhorias permanentes."
    },
    {
        nome: "Subnautica",
        genero: "Sobrevivência / Exploração Aquática",
        sinopse: "Após a nave espacial cair em um planeta alienígena coberto por água, você deve construir bases subterrâneas e explorar as profundezas do oceano para sobreviver."
    },
    {
        nome: "Need for Speed Unbound",
        genero: "Corrida Arcada / Estilo Urbano",
        sinopse: "Corra contra o tempo, despiste a polícia e participe de qualificatórias semanais de rali urbano com carros tunados e estilo visual em cel-shading."
    },
    {
        nome: "Tony Hawk's Pro Skater 1 + 2",
        genero: "Esporte / Skate Arcada",
        sinopse: "A coleção definitiva com os jogos originais de skate refeitos do zero em HD, incluindo manobras insanas, combos gigantes e a trilha sonora marcante."
    },
    {
        nome: "Doom Eternal",
        genero: "FPS / Ação Frenética",
        sinopse: "Como o Doom Slayer, você retorna à Terra para impedir uma invasão demoníaca usando um arsenal pesado e combate acelerado ao som de heavy metal."
    },
    {
        nome: "Ghost of Tsushima",
        genero: "Ação / Mundo Aberto Samurai",
        sinopse: "O samurai Jin Sakai precisa abandonar o código de honra tradicional para se tornar o 'Fantasma' e proteger a ilha de Tsushima durante a invasão mongol."
    },
    {
        nome: "Horizon Zero Dawn",
        genero: "RPG de Ação / Pós-Apocalíptico",
        sinopse: "Em um futuro onde máquinas em forma de dinossauros dominam a Terra, a caçadora Aloy busca descobrir a verdade sobre suas origens e a ruína da civilização antiga."
    },
    {
        nome: "Assassins Creed Valhalla",
        genero: "RPG / Mundo Aberto Viking",
        sinopse: "Lidere invasões vikings na Inglaterra do século IX como Eivor, construindo seu assentamento e conquistando reinos rivais."
    },
    {
        nome: "F1 23",
        genero: "Simulador de Corrida",
        sinopse: "O jogo oficial do Campeonato Mundial de Fórmula 1, trazendo todos os pilotos, equipes, circuitos oficiais e um modo história dramático."
    },
    {
        nome: "Uncharted 4: A Thief's End",
        genero: "Ação / Aventura Cinco Estrelas",
        sinopse: "O caçador de tesouros aposentado Nathan Drake é forçado a voltar ao mundo dos ladrões para salvar seu irmão e encontrar o tesouro pirata de Henry Avery."
    },
    {
        nome: "The Last of Us Part I",
        genero: "Ação / Sobrevivência Pós-Apocalíptica",
        sinopse: "Em um mundo devastado por um fungo mortal, o sobrevivente amargurado Joel é contratado para contrabandear a garota Ellie de 14 anos para fora de uma zona militar."
    },
    {
        nome: "Starfield",
        genero: "RPG / Exploração Espacial",
        sinopse: "Explore mais de mil planetas no espaço sideral como membro da Constelação, um grupo de exploradores em busca de artefatos misteriosos pela galáxia."
    },
    {
        nome: "Baldur's Gate 3",
        genero: "RPG de Turnos / D&D",
        sinopse: "Uma aventura profunda no universo de Dungeons & Dragons onde suas escolhas moldam o destino dos Reinos Esquecidos enquanto tenta se livrar de um parasita mental."
    },
    {
        nome: "Among Us",
        genero: "Party Game / Dedução Social",
        sinopse: "Prepare sua nave espacial para a decolagem, mas cuidado: um ou mais jogadores são Impostores focados em eliminar a tripulação em segredo."
    },
    {
        nome: "Phasmophobia",
        genero: "Terror Co-op / Investigação",
        sinopse: "Uma equipe de 4 investigadores paranormais entra em locais amaldiçoados usando equipamentos reais de caça-fantasmas para identificar o tipo de entidade presente."
    },
    {
        nome: "Cities: Skylines",
        genero: "Simulação / Construção de Cidade",
        sinopse: "Projete, construa e gerencie sua própria metrópole moderna, cuidando do trânsito, economia, impostos e serviços públicos dos cidadãos."
    },
    {
        nome: "Palworld",
        genero: "Sobrevivência / Coleção de Criaturas",
        sinopse: "Crie, lute e trabalhe ao lado de criaturas misteriosas chamadas 'Pals' em um vasto mundo aberto com armas de fogo e automação de bases."
    },
    {
        nome: "Persona 5 Royal",
        genero: "JRPG / Vida Escolar",
        sinopse: "Estudantes colegiais em Tóquio vivem vidas duplas como os 'Phantom Thieves of Hearts', invadindo os palácios mentais de adultos corruptos para mudar a sociedade."
    }
];

// Variável para guardar o último jogo sorteado e evitar repetição seguida
let ultimoIndiceSorteado = -1;

function indicarJogo() {
    const resultadoDiv = document.getElementById("resultado-indicacao");
    if (!resultadoDiv) return;

    let novoIndice;
    // Garante que não repete o mesmo jogo imediatamente
    do {
        novoIndice = Math.floor(Math.random() * jogosParaIndicar.length);
    } while (novoIndice === ultimoIndiceSorteado && jogosParaIndicar.length > 1);

    ultimoIndiceSorteado = novoIndice;
    const jogoSorteado = jogosParaIndicar[novoIndice];

    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <h4 style="color: #04d361; font-size: 1.3rem; margin-bottom: 0.5rem;">🎮 ${jogoSorteado.nome}</h4>
        <p style="margin-bottom: 0.8rem;"><strong>📌 Gênero:</strong> ${jogoSorteado.genero}</p>
        <p style="color: #a8a8b3; text-align: justify; line-height: 1.6;"><strong>📖 Sinopse Completa:</strong> ${jogoSorteado.sinopse}</p>
    `;
}