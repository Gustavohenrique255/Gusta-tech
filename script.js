// Função chamada ao carregar a página para recuperar curtidas salvas
document.addEventListener("DOMContentLoaded", function () {
    atualizarBotoesSalvos();
});

// Salva e Trava Curtida + Redireciona para a Matéria Completa
function curtirELer(idItem, paginaDestino) {
    let curtido = localStorage.getItem("curtido_" + idItem);

    if (!curtido) {
        // Registra a curtida no navegador
        localStorage.setItem("curtido_" + idItem, "true");
    }

    // Redireciona na própria guia para a página da matéria
    window.location.href = paginaDestino;
}

// Verifica e aplica o estado de "Curtido" nos botões
function atualizarBotoesSalvos() {
    const botoes = document.querySelectorAll(".btn-curtir");
    
    botoes.forEach(botao => {
        // Extrai o ID do item a partir do onclick ou atributo
        const onclickAttr = botao.getAttribute("onclick");
        if (onclickAttr) {
            const match = onclickAttr.match(/'([^']+)'/);
            if (match) {
                const idItem = match[1];
                const estaCurtido = localStorage.getItem("curtido_" + idItem);
                
                if (estaCurtido) {
                    const contadorSpan = botao.querySelector(".contador");
                    if (contadorSpan) contadorSpan.textContent = "1";
                    botao.classList.add("curtido");
                    botao.innerHTML = "✅ Curtido! (1)";
                    botao.disabled = true; // Impede curtidas infinitas
                    botao.style.cursor = "not-allowed";
                }
            }
        }
    });
}

// Banco de Dados com Sinopses Detalhadas
const jogosParaIndicar = [
    {
        nome: "Minecraft (Java Edition)",
        genero: "Sandbox / Sobrevivência",
        sinopse: "Você acorda em um mundo infinito gerado por blocos. Sem tutoriais ou objetivos impostos, precisa explorar cavernas, coletar recursos e construir abrigo antes do anoitecer, quando criaturas hostis surgem. O objetivo final é criar equipamentos de diamante e netherita para acessar a dimensão do End e derrotar o Ender Dragon."
    },
    {
        nome: "The Witcher 3: Wild Hunt",
        genero: "RPG / Mundo Aberto",
        historia: "Geralt de Rívia é um caçador de monstros mutante em um mundo devastado pela guerra. Ele precisa encontrar Ciri, sua filha adotiva que possui um poder antigo capaz de manipular o espaço e o tempo. Contudo, ela está sendo perseguida pela Caçada Selvagem, uma horda de cavaleiros espectrais."
    },
    {
        nome: "Hollow Knight",
        genero: "Metroidvania / Ação",
        sinopse: "Um cavaleiro silencioso adentra as ruínas de Hallownest, um antigo reino de insetos subterrâneo que caiu em desgraça devido a uma infecção luminosa. Conforme explora os labirintos, o jogador descobre segredos sombrios sobre a criação do reino e o sacrifício necessário para conter a infecção."
    },
    {
        nome: "Elden Ring",
        genero: "Soulslike / Ação",
        sinopse: "Nas Terras Intermédias, o Anel de Prístino foi despedaçado, corrompendo os semideuses com seus fragmentos de poder. Como um Maculado banido, você retorna para explorar reinos vastos, derrotar chefes colossais e redefinir a ordem do mundo tornando-se o Lorde Prístino."
    },
    {
        nome: "Cyberpunk 2077",
        genero: "RPG de Ficção Científica",
        sinopse: "Na perigosa cidade de Night City, você joga com V, um mercenário contratado para roubar um biochip experimental. O roubo dá errado e o chip é inserido na sua cabeça, instalando a consciência do falecido roqueiro rebelde Johnny Silverhand. Agora você precisa achar uma cura antes que sua mente seja apagada."
    }
];

// Gerador com exibição da Sinopse Completa
function indicarJogo() {
    const resultadoDiv = document.getElementById("resultado-indicacao");
    if (!resultadoDiv) return;

    const jogoSorteado = jogosParaIndicar[Math.floor(Math.random() * jogosParaIndicar.length)];
    
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <h4 style="color: #04d361; font-size: 1.3rem; margin-bottom: 0.5rem;">🎮 ${jogoSorteado.nome}</h4>
        <p style="margin-bottom: 0.8rem;"><strong>📌 Gênero:</strong> ${jogoSorteado.genero}</p>
        <p style="color: #a8a8b3; text-align: justify; line-height: 1.6;"><strong>📖 Sinopse Completa:</strong> ${jogoSorteado.sinopse || jogoSorteado.historia}</p>
    `;
}