const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "const myVar = 10;",
        "var myVar = 10;",
        "let myVar = 10;",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados com coerção",
        "Compara apenas valores, sem considerar tipos",
        "Compara valores e tipos de dados sem coerção",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar elementos pelo ID",
        "Selecionar elementos pelo nome da tag",
        "Selecionar elementos pelo nome da classe",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma função em JavaScript?",
      respostas: [
        "let minhaFuncao = function() {}",
        "const minhaFuncao = () => {}",
        "function minhaFuncao() {}",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de objetos para representar documentos HTML",
        "Uma linguagem de programação",
        "Um método para declarar variáveis",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do comando 'return' em uma função?",
      respostas: [
        "Declarar uma variável local",
        "Retornar um valor da função",
        "Encerrar a execução da função",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "O processo de mover declarações para o topo do escopo",
        "Uma técnica de animação de elementos HTML",
        "Uma forma de manipulação de strings",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' permite reatribuição, enquanto 'const' cria variáveis imutáveis",
        "'let' e 'const' são intercambiáveis, não há diferença",
        "'const' é usado para variáveis que nunca serão reatribuídas, enquanto 'let' é usado para variáveis que podem ser reatribuídas",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Uma ação desencadeada pelo usuário ou pelo navegador",
        "Uma função assíncrona",
        "Uma variável global",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a principal diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "'undefined' é usado para valores nulos, enquanto 'null' é usado para valores não nulos",
        "Não há diferença significativa entre 'null' e 'undefined'",
        "'null' representa a ausência de valor atribuído intencionalmente, enquanto 'undefined' representa a ausência de valor não intencional",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostratTotal = document.querySelector('#acertos span')
  mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for(const resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        
        mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  };