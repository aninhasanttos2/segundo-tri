const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi o ano da última conquista de Libertadores pelo Flamengo?",
        alternativas: [
            {
                texto: "2019",
                afirmacao: "Você vibrou intensamente com a conquista épica de 2019!"
            },
            {
                texto: "2022",
                afirmacao: "Infelizmente, o Flamengo ainda não conquistou outra Libertadores desde 2019."
            }
        ]
    },
    {
        enunciado: "Quem é o maior ídolo da história do Flamengo?",
        alternativas: [
            {
                texto: "Zico",
                afirmacao: "Você idolatra Zico, o maior jogador da história do Flamengo!"
            },
            {
                texto: "Bruno Henrique",
                afirmacao: "Bruno Henrique é um jogador muito querido, mas Zico ainda é o maior ídolo."
            }
        ]
    },
    {
        enunciado: "Qual o estádio do Flamengo?",
        alternativas: [
            {
                texto: "Maracanã",
                afirmacao: "Você ama o Maracanã, o lar do Flamengo!"
            },
            {
                texto: "Morumbi",
                afirmacao: "O Morumbi é um estádio incrível, mas o Maracanã é o coração do Flamengo."
            }
        ]
    },
    // Adicione mais perguntas e alternativas relacionadas ao Flamengo aqui
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "História Rubro-Negra...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
