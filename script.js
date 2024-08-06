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
    {
        enunciado: "Quantos títulos nacionais o Flamengo conquistou?",
        alternativas: [
            {
                texto: "7",
                afirmacao: "Você sabe que o Flamengo conquistou 7 títulos brasileiros ao longo de sua história!"
            },
            {
                texto: "10",
                afirmacao: "Apesar de ser um número expressivo, o Flamengo conquistou 7 títulos nacionais."
            }
        ]
    },
    {
        enunciado: "Qual foi o primeiro título internacional conquistado pelo Flamengo?",
        alternativas: [
            {
                texto: "Copa Libertadores",
                afirmacao: "O Flamengo conquistou sua primeira Libertadores em 1981, um marco na história do clube!"
            },
            {
                texto: "Mundial Interclubes",
                afirmacao: "O Mundial Interclubes foi conquistado posteriormente, em 1981, após a Libertadores."
            }
        ]
    },
    {
        enunciado: "Quem foi o técnico do Flamengo na conquista da Libertadores de 2019?",
        alternativas: [
            {
                texto: "Jorge Jesus",
                afirmacao: "Jorge Jesus foi o técnico responsável por levar o Flamengo à glória na Libertadores de 2019!"
            },
            {
                texto: "Abel Braga",
                afirmacao: "Abel Braga teve passagem pelo Flamengo, mas não foi o técnico na conquista da Libertadores."
            }
        ]
    },
    // Continue adicionando mais perguntas aqui...
    {
        enunciado: "Quem é conhecido como 'Rei do Rio'?",
        alternativas: [
            {
                texto: "Zico",
                afirmacao: "Zico é chamado de 'Rei do Rio' pela sua idolatria e conquistas pelo Flamengo!"
            },
            {
                texto: "Gabigol",
                afirmacao: "Gabigol é um jogador muito querido, mas 'Rei do Rio' é o apelido de Zico."
            }
        ]
    },
    {
        enunciado: "Em que ano o Flamengo foi fundado?",
        alternativas: [
            {
                texto: "1895",
                afirmacao: "O Flamengo foi fundado em 1895, tornando-se um dos clubes mais antigos do Brasil!"
            },
            {
                texto: "1912",
                afirmacao: "O ano de 1912 é importante, mas não é quando o Flamengo foi fundado."
            }
        ]
    },
    {
        enunciado: "Qual é o mascote oficial do Flamengo?",
        alternativas: [
            {
                texto: "Urubu",
                afirmacao: "O mascote oficial do Flamengo é o Urubu, uma representação marcante do clube!"
            },
            {
                texto: "Leão",
                afirmacao: "O Leão é um mascote de outro clube, não do Flamengo."
            }
        ]
    },
    // Adicione mais perguntas e alternativas relacionadas ao Flamengo conforme necessário...
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
