const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o tipo de tração mais comum em carros de drift?",
        alternativas: [
            {
                texto: "Traseira",
                afirmacao: "Carros com tração traseira são preferidos em drift porque permitem que a traseira do carro se mova mais livremente, facilitando o controle durante os derrapagens.
"
            },
            {
                texto: "Dianteira",
                afirmacao: "Carros com tração dianteira são menos comuns no drift porque tendem a subvirar, o que dificulta o controle da traseira durante o drift."
            }
           
        ]
    },
    {
        enunciado: "Qual é a importância do ângulo de caster em um carro de drift?",
        alternativas: [
            {
                texto: " Aumenta a estabilidade",
                afirmacao: "Um ângulo de caster maior ajuda a melhorar a estabilidade e o controle direcional, permitindo ao piloto manter um drift mais controlado e consistente.
"
            },
            {
                texto: "Reduz o desgaste dos pneus",
                afirmacao: "Embora o ângulo de caster possa ajudar na estabilidade, a principal função não é reduzir o desgaste dos pneus, mas sim melhorar a resposta do volante e a sensação de direção.
"
            }
           
        ]
    },
    {
        enunciado: "Qual tipo de suspensão é mais frequentemente usado em carros de drift?",
        alternativas: [
            {
                texto: "Suspensão de coifa ajustável",
                afirmacao:"Suspensões de coifa ajustável permitem modificar a altura do carro e a rigidez das molas, o que é crucial para ajustar o carro para diferentes condições de pista e estilos de drift."
            },
            {
                texto: "Suspensão de mola helicoidal fixa",
                afirmacao:"Suspensões de mola helicoidal fixa são menos flexíveis em termos de ajuste, o que pode limitar a capacidade do carro de se adaptar às exigências do drift e às variações de pista."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>
            respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}
mostraPergunta();
