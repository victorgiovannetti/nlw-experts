const perguntas = [
    {
      pergunta: "Quem é o capitão dos Chapéus de Palha?",
      respostas: [
        "Monkey D. Luffy",
        "Roronoa Zoro",
        "Nami",
        "Trafalgar D. Water Law"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do arquipélago onde está localizado o quartel-general da Marinha?",
      respostas: [
        "Arquipélago Sabaody",
        "Arquipélago Boin",
        "Arquipélago Shabondy",
        "Arquipélago Marineford"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o espadachim da tripulação dos Chapéus de Palha?",
      respostas: [
        "Roronoa Zoro",
        "Sanji",
        "Usopp",
        "Franky"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do irmão de Luffy que se tornou um almirante da Marinha?",
      respostas: [
        "Portgas D. Ace",
        "Sabo",
        "Gol D. Roger",
        "Monkey D. Dragon"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o cozinheiro da tripulação dos Chapéus de Palha?",
      respostas: [
        "Nami",
        "Usopp",
        "Sanji",
        "Brook"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o sonho de Luffy?",
      respostas: [
        "Ser o melhor espadachim do mundo",
        "Encontrar o One Piece e se tornar o Rei dos Piratas",
        "Criar um mapa completo do mundo",
        "Descobrir o maior tesouro da história da humanidade"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o arqueólogo da tripulação dos Chapéus de Palha?",
      respostas: [
        "Nico Robin",
        "Sanji",
        "Brook",
        "Franky"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do navio dos Chapéus de Palha?",
      respostas: [
        "Thousand Sunny",
        "Going Merry",
        "Red Force",
        "Queen Mama Chanter"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do médico da tripulação dos Chapéus de Palha?",
      respostas: [
        "Nami",
        "Usopp",
        "Sanji",
        "Tony Tony Chopper"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o nome da ilha onde Luffy e sua tripulação se encontram pela primeira vez?",
      respostas: [
        "Arquipélago Sabaody",
        "Ilha dos Tritões",
        "Vila Fuchsia",
        "Ilha de Dawn"
      ],
      correta: 3
    },
    {
      pergunta: "Quem é conhecido como o 'Rei dos Piratas'?",
      respostas: [
        "Monkey D. Luffy",
        "Gol D. Roger",
        "Trafalgar D. Water Law",
        "Kaido"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do arquipélago onde Luffy começa sua jornada?",
      respostas: [
        "Arquipélago Sabaody",
        "Arquipélago Boin",
        "Arquipélago Shabondy",
        "Arquipélago do Gourmet"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o nome da organização criminosa liderada por Donquixote Doflamingo?",
      respostas: [
        "Marinha",
        "Baroque Works",
        "Geração Milenar",
        "Família Donquixote"
      ],
      correta: 3
    },
    {
      pergunta: "Quem é o atirador da tripulação dos Chapéus de Palha?",
      respostas: [
        "Nami",
        "Usopp",
        "Sanji",
        "Brook"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da irmã mais nova de Nami?",
      respostas: [
        "Vivi",
        "Rebecca",
        "Nojiko",
        "Shirahoshi"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o líder dos Revolucionários?",
      respostas: [
        "Monkey D. Dragon",
        "Gol D. Roger",
        "Edward Newgate",
        "Silvers Rayleigh"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do antigo navio dos Chapéus de Palha?",
      respostas: [
        "Thousand Sunny",
        "Going Merry",
        "Red Force",
        "Queen Mama Chanter"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o carpinteiro da tripulação dos Chapéus de Palha?",
      respostas: [
        "Nami",
        "Usopp",
        "Sanji",
        "Franky"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o nome do arquipélago onde Luffy aprendeu técnicas de artes marciais?",
      respostas: [
        "Arquipélago Sabaody",
        "Arquipélago Boin",
        "Arquipélago Shabondy",
        "Arquipélago Rusukaina"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o nome do antigo companheiro de Luffy que morreu na batalha contra a Marinha?",
      respostas: [
        "Portgas D. Ace",
        "Sabo",
        "Gol D. Roger",
        "Shanks"
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