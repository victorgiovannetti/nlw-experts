const perguntas = [
    {
      pergunta: "Qual é o símbolo usado para comentários em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "<!-- -->",
        "**"
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a cor do texto?",
      respostas: [
        "color",
        "background-color",
        "font-color",
        "text-color"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar elementos pelo nome da tag",
        "Selecionar elementos pelo ID",
        "Selecionar elementos pelo nome da classe",
        "Selecionar elementos pelo valor do atributo"
      ],
      correta: 3
    },
    {
      pergunta: "Qual propriedade CSS é usada para alterar o estilo de uma lista de itens?",
      respostas: [
        "list-style",
        "list-type",
        "list-decoration",
        "list-item-style"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados sem coerção",
        "Compara valores e tipos de dados com coerção",
        "Compara apenas valores, sem considerar tipos",
        "Compara apenas tipos, sem considerar valores"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a propriedade CSS usada para alterar o espaçamento entre letras?",
      respostas: [
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-spacing"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 10;",
        "var myVar = 10;",
        "Todas as alternativas acima estão corretas"
      ],
      correta: 3
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a altura de um elemento?",
      respostas: [
        "height",
        "width",
        "size",
        "length"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'appendChild' em JavaScript?",
      respostas: [
        "Remover um elemento filho",
        "Adicionar um novo elemento irmão",
        "Adicionar um novo elemento filho",
        "Selecionar um elemento pelo nome"
      ],
      correta: 2
    },
    {
      pergunta: "Qual propriedade CSS é usada para alterar o estilo do texto em negrito?",
      respostas: [
        "font-weight",
        "text-style",
        "font-style",
        "bold"
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "let minhaFuncao = function() {}",
        "const minhaFuncao = () => {}",
        "def minhaFuncao() {}"
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a cor do fundo de um elemento?",
      respostas: [
        "background-color",
        "color",
        "background",
        "background-style"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do modelo de objetos usado para representar documentos HTML em JavaScript?",
      respostas: [
        "MVC",
        "DOM",
        "HTML5",
        "CSS3"
      ],
      correta: 1
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a margem interna de um elemento?",
      respostas: [
        "margin",
        "padding",
        "spacing",
        "indent"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do comando 'return' em uma função JavaScript?",
      respostas: [
        "Encerrar a execução da função",
        "Retornar um valor da função",
        "Declarar uma variável local",
        "Chamar outra função"
      ],
      correta: 1
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a fonte de texto em um elemento?",
      respostas: [
        "font-family",
        "text-family",
        "font-source",
        "text-font"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'box model' em CSS?",
      respostas: [
        "Uma técnica de animação",
        "Um método de layout para organizar elementos em uma página",
        "Uma forma de manipulação de strings",
        "Uma representação visual de como os elementos HTML são renderizados"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis em JavaScript?",
      respostas: [
        "'let' é usado para variáveis que nunca serão reatribuídas, enquanto 'const' é usado para variáveis que podem ser reatribuídas",
        "'let' permite reatribuição, enquanto 'const' cria variáveis imutáveis",
        "'let' e 'const' são intercambiáveis, não há diferença",
        "'const' é usado para variáveis que nunca serão reatribuídas, enquanto 'let' é usado para variáveis que podem ser reatribuídas"
      ],
      correta: 3
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a largura de um elemento?",
      respostas: [
        "size",
        "width",
        "height",
        "length"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um seletor em CSS?",
      respostas: [
        "Uma função de JavaScript para selecionar elementos do DOM",
        "Um método para definir propriedades CSS em elementos HTML",
        "Um tipo de variável em JavaScript",
        "Uma expressão que define quais elementos HTML serão estilizados"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é a função do operador '++' em JavaScript?",
      respostas: [
        "Adição",
        "Subtração",
        "Incremento",
        "Decremento"
      ],
      correta: 2
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a cor das bordas de um elemento?",
      respostas: [
        "border-color",
        "border-style",
        "border",
        "border-width"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um modelo de objetos para representar documentos HTML",
        "Um método para declarar variáveis",
        "Uma técnica de animação"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o conceito de 'cascata' em CSS?",
      respostas: [
        "Uma técnica para animar elementos HTML",
        "Uma forma de manipular eventos do usuário",
        "Um modelo de layout responsivo",
        "A aplicação de estilos a um elemento baseado em sua posição na hierarquia do documento e em outras regras de estilo"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é a função da propriedade 'display' em CSS?",
      respostas: [
        "Controlar a visibilidade de um elemento",
        "Controlar a transparência de um elemento",
        "Controlar o tamanho de um elemento",
        "Controlar como um elemento é exibido no layout"
      ],
      correta: 3
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Uma função assíncrona",
        "Uma ação desencadeada pelo usuário ou pelo navegador",
        "Uma variável global",
        "Uma expressão regular"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "'null' representa a ausência de valor atribuído intencionalmente, enquanto 'undefined' representa a ausência de valor não intencional",
        "'undefined' é usado para valores nulos, enquanto 'null' é usado para valores não nulos",
        "Não há diferença significativa entre 'null' e 'undefined'",
        "'null' representa valores indefinidos, enquanto 'undefined' representa valores nulos"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função da propriedade 'position' em CSS?",
      respostas: [
        "Definir a posição de um elemento no layout",
        "Definir a cor de fundo de um elemento",
        "Definir a margem interna de um elemento",
        "Definir a ordem de empilhamento de elementos"
      ],
      correta: 0
    },
    {
        pergunta: "Qual é o principal objetivo da técnica 'box-shadow' em CSS?",
        respostas: [
          "Alterar a cor de fundo de um elemento",
          "Adicionar uma sombra ao redor de um elemento",
          "Definir a margem interna de um elemento",
          "Criar uma borda personalizada para um elemento"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é o método JavaScript usado para converter uma string em um número inteiro?",
        respostas: [
          "parseInt()",
          "toFloat()",
          "number()",
          "convertToInt()"
        ],
        correta: 0
      }
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