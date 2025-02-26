document.addEventListener('DOMContentLoaded', function() {
  // Inicialização de variáveis
  let quizData = [];
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Carregar conteúdo dinâmico
  loadDynamicContent();
  
  // Configuração das abas
  setupTabs();
  
  // Configuração dos modais
  setupModals();
  
  // Inicialização do quiz
  initQuiz();
  
  // Função para carregar conteúdo dinâmico do arquivo data.js
  function loadDynamicContent() {
    if (window.siteData) {
      // Carregar cards da seção de introdução
      loadIntroCards();
      
      // Carregar abas de conceitos
      loadConceitosContent();
      
      // Carregar cards de pilares
      loadPilaresCards();
      
      // Carregar modais
      loadModals();
    }
  }
  
  // Função para carregar os cards da introdução
  function loadIntroCards() {
    const cardsContainer = document.querySelector('#introducao .cards-container');
    if (!cardsContainer || !window.siteData.intro) return;
    
    window.siteData.intro.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <div class="card-header">
          <i class="${card.icon} card-icon"></i>
          <h3 class="card-title">${card.title}</h3>
        </div>
        <div class="card-body">
          <p class="card-text">${card.text}</p>
        </div>
        <div class="card-footer">
          <a href="#" data-modal="${card.modalId}" class="btn-more">Saiba mais</a>
        </div>
      `;
      cardsContainer.appendChild(cardElement);
    });
  }
  
  // Função para carregar o conteúdo das abas de conceitos
  function loadConceitosContent() {
    const tabsNav = document.querySelector('#conceitos .tabs-nav');
    const tabsContainer = document.querySelector('#conceitos .tabs');
    if (!tabsNav || !tabsContainer || !window.siteData.conceitos) return;
    
    // Limpar navegação de abas
    tabsNav.innerHTML = '';
    
    // Adicionar botões de navegação e conteúdo das abas
    window.siteData.conceitos.tabs.forEach((tab, index) => {
      // Criar botão da aba
      const button = document.createElement('button');
      button.className = `tab-button ${index === 0 ? 'active' : ''}`;
      button.setAttribute('data-tab', tab.id);
      button.textContent = tab.title;
      tabsNav.appendChild(button);
      
      // Criar conteúdo da aba
      const content = document.createElement('div');
      content.id = tab.id;
      content.className = `tab-content ${index === 0 ? 'active' : ''}`;
      content.innerHTML = tab.content;
      tabsContainer.appendChild(content);
    });
  }
  
  // Função para carregar os cards dos pilares
  function loadPilaresCards() {
    const cardsContainer = document.querySelector('#pilares .cards-container');
    if (!cardsContainer || !window.siteData.pilares) return;
    
    window.siteData.pilares.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <div class="card-header" style="background-color: ${card.color};">
          <i class="${card.icon} card-icon"></i>
          <h3 class="card-title">${card.title}</h3>
        </div>
        <div class="card-body">
          <p class="card-text">${card.text}</p>
          <h4>Principais conceitos:</h4>
          <ul>
            ${card.concepts.map(concept => `<li>${concept}</li>`).join('')}
          </ul>
          <h4>Exemplo:</h4>
          <pre><code>${card.code}</code></pre>
        </div>
        <div class="card-footer">
          <a href="#" data-modal="${card.modalId}" class="btn-more">Exemplos avançados</a>
        </div>
      `;
      cardsContainer.appendChild(cardElement);
    });
  }
  
  // Função para carregar os modais
  function loadModals() {
    const modalsContainer = document.getElementById('modals-container');
    if (!modalsContainer || !window.siteData.modals) return;
    
    window.siteData.modals.modals.forEach(modal => {
      const modalElement = document.createElement('div');
      modalElement.id = modal.id;
      modalElement.className = 'modal';
      modalElement.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <h2 class="modal-title">${modal.title}</h2>
          ${modal.content}
        </div>
      `;
      modalsContainer.appendChild(modalElement);
    });
  }
  
  // Função para configurar as abas
  function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remover classe ativa de todos os botões e conteúdos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adicionar classe ativa ao botão e conteúdo clicado
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
    
    // Ativar a primeira aba por padrão
    if (tabButtons.length > 0 && !document.querySelector('.tab-button.active')) {
      tabButtons[0].click();
    }
  }
  
  // Função para configurar os modais
  function setupModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
      });
    });
    
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
      });
    });
    
    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
      }
    });
  }
  
  // Função para inicializar o quiz
  function initQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    if (!quizContainer) return;
    
    // Configurar dados do quiz
    quizData = [
      {
        question: "Qual é o principal objetivo da Programação Orientada a Objetos (POO)?",
        options: [
          "Reduzir a complexidade do código",
          "Facilitar a reutilização de código",
          "Melhorar a organização e a modularidade do software",
          "Todas as alternativas anteriores"
        ],
        answer: 3,
        explanation: "A Programação Orientada a Objetos tem múltiplos objetivos, incluindo reduzir a complexidade do código, facilitar a reutilização de código e melhorar a organização e modularidade do software. Todos esses benefícios trabalham juntos para criar sistemas mais manuteníveis e escaláveis."
      },
      {
        question: "O que é uma classe em POO?",
        options: [
          "Um conjunto de funções",
          "Um modelo para criar objetos",
          "Um tipo de variável",
          "Um método de programação"
        ],
        answer: 1,
        explanation: "Uma classe é um modelo ou planta que define as características (atributos) e comportamentos (métodos) que os objetos criados a partir dela terão. É como um molde que define a estrutura dos objetos."
      },
      {
        question: "O que é um objeto em POO?",
        options: [
          "Uma instância de uma classe",
          "Um tipo de dado primitivo",
          "Um método de programação",
          "Um paradigma de programação"
        ],
        answer: 0,
        explanation: "Um objeto é uma instância de uma classe. Quando criamos um objeto, estamos criando uma entidade concreta baseada no modelo definido pela classe, com seus próprios dados (estado) e comportamentos (métodos)."
      },
      {
        question: "Qual dos seguintes conceitos NÃO faz parte dos pilares da POO?",
        options: [
          "Encapsulamento",
          "Herança",
          "Polimorfismo",
          "Abstração",
          "Decomposição funcional"
        ],
        answer: 4,
        explanation: "A decomposição funcional é um conceito associado à programação procedural, não à orientação a objetos. Os quatro pilares fundamentais da POO são: Encapsulamento, Herança, Polimorfismo e Abstração."
      },
      {
        question: "O que é encapsulamento em POO?",
        options: [
          "Ocultar os detalhes internos de um objeto e expor apenas o necessário",
          "Criar múltiplas formas de um método",
          "Herdar características de uma classe pai",
          "Dividir um problema em subproblemas"
        ],
        answer: 0,
        explanation: "Encapsulamento é o princípio de ocultar os detalhes internos de implementação de um objeto e expor apenas as interfaces necessárias. Isso é geralmente feito usando modificadores de acesso como private, protected e public."
      },
      {
        question: "O que é herança em POO?",
        options: [
          "A capacidade de uma classe herdar atributos e métodos de outra classe",
          "A capacidade de um objeto se transformar em outro objeto",
          "A capacidade de um método ter múltiplas formas",
          "A capacidade de ocultar detalhes de implementação"
        ],
        answer: 0,
        explanation: "Herança é o mecanismo que permite que uma classe (chamada subclasse ou classe filha) herde características (atributos e métodos) de outra classe (chamada superclasse ou classe pai). Isso promove a reutilização de código e estabelece uma relação 'é um' entre classes."
      },
      {
        question: "O que é polimorfismo em POO?",
        options: [
          "A capacidade de um objeto se transformar em outro objeto",
          "A capacidade de um método ter múltiplas formas",
          "A capacidade de uma classe herdar atributos e métodos de outra classe",
          "A capacidade de ocultar detalhes de implementação"
        ],
        answer: 1,
        explanation: "Polimorfismo é a capacidade de tratar objetos de diferentes classes de maneira uniforme, permitindo que métodos com o mesmo nome tenham comportamentos diferentes em classes diferentes. Isso permite que um método assuma diferentes formas dependendo do contexto em que é usado."
      },
      {
        question: "Qual das seguintes linguagens foi a primeira totalmente orientada a objetos?",
        options: [
          "C++",
          "Java",
          "Smalltalk",
          "Python",
          "Pascal"
        ],
        answer: 2,
        explanation: "Smalltalk foi a primeira linguagem de programação totalmente orientada a objetos, desenvolvida no Xerox PARC na década de 1970. Ela influenciou significativamente outras linguagens orientadas a objetos que vieram depois."
      },
      {
        question: "O que é sobrecarga de métodos em POO?",
        options: [
          "Ter múltiplos métodos com o mesmo nome, mas com diferentes parâmetros",
          "Herdar características de uma classe pai",
          "Ocultar detalhes de implementação de um objeto",
          "Dividir um problema em subproblemas"
        ],
        answer: 0,
        explanation: "Sobrecarga de métodos é a capacidade de definir múltiplos métodos com o mesmo nome, mas com diferentes tipos ou número de parâmetros. Isso permite que uma classe tenha várias versões de um método, cada uma adequada para diferentes situações."
      },
      {
        question: "O que é uma interface em POO?",
        options: [
          "Um contrato que define métodos que uma classe deve implementar",
          "Um tipo de variável",
          "Um método de programação",
          "Um paradigma de programação"
        ],
        answer: 0,
        explanation: "Uma interface é um contrato que define um conjunto de métodos que uma classe deve implementar. Ela especifica o que uma classe deve fazer, sem definir como deve ser feito, promovendo um baixo acoplamento entre componentes do sistema."
      }
    ];
    
    // Construir o HTML para o quiz
    const quizHTML = `
      <div class="quiz-question">
        <!-- O conteúdo será preenchido via JavaScript -->
      </div>
      
      <div class="quiz-nav">
        <button id="prev-question" class="quiz-button" disabled>Anterior</button>
        <button id="next-question" class="quiz-button" disabled>Próxima</button>
        <button id="submit-quiz" class="quiz-button" style="display: none;">Finalizar</button>
      </div>
    `;
    
    quizContainer.innerHTML = quizHTML;
    
    // Configurar navegação do quiz
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    const submitButton = document.getElementById('submit-quiz');
    
    if (prevButton) {
      prevButton.addEventListener('click', showPreviousQuestion);
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', showNextQuestion);
    }
    
    if (submitButton) {
      submitButton.addEventListener('click', submitQuiz);
    }
    
    // Mostrar a primeira questão
    showQuestion(currentQuestionIndex);
  }
  
  // Função para mostrar uma questão do quiz
  function showQuestion(index) {
    const questionContainer = document.querySelector('.quiz-question');
    if (!questionContainer || !quizData[index]) return;
    
    const question = quizData[index];
    
    // Construir HTML da questão
    let questionHTML = `
      <div class="question-text">${index + 1}. ${question.question}</div>
      <ul class="options-list">
    `;
    
    question.options.forEach((option, i) => {
      questionHTML += `
        <li class="option-item">
          <input type="radio" id="option${i}" name="answer" class="option-input" value="${i}" ${i === question.selectedOption ? 'checked' : ''}>
          <label for="option${i}" class="option-label">${option}</label>
        </li>
      `;
    });
    
    questionHTML += `
      </ul>
      <div class="feedback"></div>
    `;
    
    questionContainer.innerHTML = questionHTML;
    
    // Adicionar eventos para os inputs de rádio
    document.querySelectorAll('.option-input').forEach(input => {
      input.addEventListener('change', () => {
        quizData[currentQuestionIndex].selectedOption = parseInt(input.value);
        
        // Habilitar o botão próximo se uma opção for selecionada
        const nextButton = document.getElementById('next-question');
        if (nextButton) {
          nextButton.disabled = false;
        }
        
        // Habilitar o botão finalizar se estiver na última questão
        const submitButton = document.getElementById('submit-quiz');
        if (submitButton && submitButton.style.display === 'block') {
          submitButton.disabled = false;
        }
      });
    });
    
    // Atualizar estado dos botões de navegação
    updateNavigationButtons();
  }
  
  // Função para mostrar a próxima questão
  function showNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    }
  }
  
  // Função para mostrar a questão anterior
  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion(currentQuestionIndex);
    }
  }
  
  // Função para atualizar os botões de navegação
  function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    const submitButton = document.getElementById('submit-quiz');
    
    if (prevButton) {
      prevButton.disabled = currentQuestionIndex === 0;
    }
    
    if (nextButton) {
      nextButton.disabled = !quizData[currentQuestionIndex].hasOwnProperty('selectedOption');
      nextButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'none' : 'block';
    }
    
    if (submitButton) {
      submitButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'block' : 'none';
      submitButton.disabled = !quizData[currentQuestionIndex].hasOwnProperty('selectedOption');
    }
  }
  
  // Função para enviar o quiz
  function submitQuiz() {
    // Calcular pontuação
    score = 0;
    quizData.forEach(question => {
      if (question.selectedOption === question.answer) {
        score++;
      }
    });
    
    // Mostrar resultados
    const quizContainer = document.querySelector('.quiz-container');
    const scorePercentage = Math.round((score / quizData.length) * 100);
    
    quizContainer.innerHTML = `
      <div class="quiz-results">
        <h2>Resultados do Quiz</h2>
        <div class="result-score">${score} / ${quizData.length} (${scorePercentage}%)</div>
        <p>Você acertou ${score} de ${quizData.length} questões.</p>
        <button class="quiz-button" id="restart-quiz">Tentar Novamente</button>
      </div>
    `;
    
    // Adicionar evento para reiniciar o quiz
    document.getElementById('restart-quiz').addEventListener('click', () => {
      // Resetar dados do quiz
      currentQuestionIndex = 0;
      score = 0;
      quizData.forEach(question => {
        delete question.selectedOption;
      });
      
      // Reiniciar o quiz
      initQuiz();
    });
  }

  // Smooth scroll para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (!this.getAttribute('data-modal')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});