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

// Banco de Dados do Sorteador de Jogos (Indicações)
const jogosParaIndicar = [
    {
        nome: "Minecraft (Java Edition)",
        genero: "Sandbox / Sobrevivência",
        sinopse: "Você acorda em um mundo infinito gerado por blocos. Sem tutoriais ou objetivos impostos, precisa explorar cavernas, coletar recursos e construir abrigo antes do anoitecer, quando criaturas hostis surgem."
    },
    {
        nome: "The Witcher 3: Wild Hunt",
        genero: "RPG / Mundo Aberto",
        sinopse: "Geralt de Rívia é um caçador de monstros mutante em um mundo devastado pela guerra. Ele precisa encontrar Ciri, sua filha adotiva que possui um poder antigo capaz de manipular o espaço e o tempo."
    },
    {
        nome: "Hollow Knight",
        genero: "Metroidvania / Ação",
        sinopse: "Um cavaleiro silencioso adentra as ruínas de Hallownest, um antigo reino de insetos subterrâneo que caiu em desgraça devido a uma infecção luminosa."
    },
    {
        nome: "Elden Ring",
        genero: "Soulslike / Ação",
        sinopse: "Nas Terras Intermédias, o Anel de Prístino foi despedaçado, corrompendo os semideuses com seus fragmentos de poder. Como um Maculado banido, você retorna para explorar reinos vastos."
    },
    {
        nome: "Cyberpunk 2077",
        genero: "RPG de Ficção Científica",
        sinopse: "Na perigosa cidade de Night City, você joga com V, um mercenário contratado para roubar um biochip experimental contendo a mente do falecido roqueiro rebelde Johnny Silverhand."
    }
];

function indicarJogo() {
    const resultadoDiv = document.getElementById("resultado-indicacao");
    if (!resultadoDiv) return;

    const jogoSorteado = jogosParaIndicar[Math.floor(Math.random() * jogosParaIndicar.length)];

    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <h4 style="color: #04d361; font-size: 1.3rem; margin-bottom: 0.5rem;">🎮 ${jogoSorteado.nome}</h4>
        <p style="margin-bottom: 0.8rem;"><strong>📌 Gênero:</strong> ${jogoSorteado.genero}</p>
        <p style="color: #a8a8b3; text-align: justify; line-height: 1.6;"><strong>📖 Sinopse Completa:</strong> ${jogoSorteado.sinopse}</p>
    `;
}