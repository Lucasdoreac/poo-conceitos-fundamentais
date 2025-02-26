/* Dados para o site POO Fundamentos */

// Dados para a seção de introdução
const introData = {
  cards: [
    {
      icon: 'fas fa-history',
      title: 'História da POO',
      text: 'A POO surgiu na década de 1960 com a linguagem Simula, mas ganhou popularidade com Smalltalk nos anos 70. Alan Kay, um dos criadores do Smalltalk, introduziu o termo "orientação a objetos" e estabeleceu os conceitos fundamentais que conhecemos hoje.',
      modalId: 'modal-historia'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Definição',
      text: 'A Programação Orientada a Objetos é um paradigma que organiza o design de software em torno de dados, ou objetos, em vez de funções e lógica. Um objeto pode ser definido como um campo de dados que tem atributos e comportamentos únicos.',
      modalId: 'modal-definicao'
    },
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Vantagens e Aplicações',
      text: 'A POO facilita a manutenção, reutilização de código e compreensão do sistema. É aplicada em uma ampla variedade de domínios, desde desenvolvimento de software empresarial até jogos, sistemas operacionais e interfaces gráficas.',
      modalId: 'modal-vantagens'
    }
  ]
};

// Dados para a seção de conceitos
const conceitosData = {
  tabs: [
    {
      id: 'tab-classes',
      title: 'Classes',
      content: `
        <h3>Classes</h3>
        <p>
          Uma classe é um modelo ou protótipo que define os atributos (variáveis) e comportamentos (métodos) 
          que os objetos de um determinado tipo possuem. Ela atua como um plano para criar objetos, 
          definindo sua estrutura sem ocupar espaço na memória até que um objeto seja instanciado.
        </p>
        <h4>Características das Classes:</h4>
        <ul>
          <li>Definem a estrutura de dados e comportamentos que seus objetos terão</li>
          <li>Funcionam como modelos para criar múltiplos objetos similares</li>
          <li>Podem conter construtores para inicializar objetos</li>
          <li>Podem ter membros estáticos compartilhados por todas as instâncias</li>
          <li>Podem implementar interfaces ou estender outras classes</li>
        </ul>
        <h4>Exemplo de Classe em Java:</h4>
        <pre><code>
public class Carro {
    // Atributos
    private String marca;
    private String modelo;
    private int ano;
    private double velocidadeAtual;
    
    // Construtor
    public Carro(String marca, String modelo, int ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidadeAtual = 0;
    }
    
    // Métodos
    public void acelerar(double incremento) {
        velocidadeAtual += incremento;
    }
    
    public void frear(double decremento) {
        if (velocidadeAtual >= decremento) {
            velocidadeAtual -= decremento;
        } else {
            velocidadeAtual = 0;
        }
    }
    
    // Getters e Setters
    public String getMarca() {
        return marca;
    }
    
    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    // Outros getters e setters...
}
        </code></pre>
      `
    },
    {
      id: 'tab-objetos',
      title: 'Objetos',
      content: `
        <h3>Objetos</h3>
        <p>
          Um objeto é uma instância de uma classe. Quando criamos um objeto, estamos criando uma entidade 
          concreta que ocupa espaço na memória e tem seus próprios valores específicos para os atributos 
          definidos na classe.
        </p>
        <h4>Características dos Objetos:</h4>
        <ul>
          <li>Possuem estado (valores de seus atributos)</li>
          <li>Possuem comportamento (métodos que podem ser invocados)</li>
          <li>Têm identidade única (mesmo com atributos idênticos, são entidades distintas)</li>
          <li>Encapsulam dados e comportamentos relacionados</li>
          <li>Interagem com outros objetos por meio de mensagens</li>
        </ul>
        <h4>Exemplo de Criação de Objetos em Java:</h4>
        <pre><code>
// Criando objetos da classe Carro
Carro carro1 = new Carro("Toyota", "Corolla", 2022);
Carro carro2 = new Carro("Honda", "Civic", 2021);

// Interagindo com os objetos
carro1.acelerar(20);
System.out.println(carro1.getMarca() + " " + carro1.getModelo() + " está a " + carro1.getVelocidadeAtual() + " km/h");

carro2.acelerar(30);
carro2.frear(10);
System.out.println(carro2.getMarca() + " " + carro2.getModelo() + " está a " + carro2.getVelocidadeAtual() + " km/h");
        </code></pre>
      `
    },
    {
      id: 'tab-atributos',
      title: 'Atributos',
      content: `
        <h3>Atributos</h3>
        <p>
          Atributos são variáveis que pertencem a uma classe e definem o estado ou as características dos objetos. 
          Cada objeto criado a partir da classe terá seus próprios valores para esses atributos.
        </p>
        <h4>Tipos de Atributos:</h4>
        <ul>
          <li><strong>Atributos de instância:</strong> Pertencem a cada objeto individualmente</li>
          <li><strong>Atributos estáticos (de classe):</strong> Compartilhados por todos os objetos da classe</li>
          <li><strong>Atributos constantes:</strong> Valores que não podem ser alterados após a inicialização</li>
        </ul>
        <h4>Modificadores de Acesso:</h4>
        <ul>
          <li><strong>private:</strong> Acessível apenas dentro da própria classe</li>
          <li><strong>protected:</strong> Acessível dentro da classe, subclasses e pacote</li>
          <li><strong>public:</strong> Acessível de qualquer lugar</li>
          <li><strong>default (sem modificador):</strong> Acessível apenas dentro do pacote</li>
        </ul>
        <h4>Exemplo de Atributos em Java:</h4>
        <pre><code>
public class ContaBancaria {
    // Atributos de instância privados
    private String numero;
    private String titular;
    private double saldo;
    
    // Atributo estático (compartilhado por todas as instâncias)
    private static double taxaManutencao = 10.0;
    
    // Atributo constante
    public final String BANCO = "Banco Nacional";
    
    // Construtor e métodos...
}
        </code></pre>
      `
    },
    {
      id: 'tab-metodos',
      title: 'Métodos',
      content: `
        <h3>Métodos</h3>
        <p>
          Métodos são funções definidas dentro de uma classe que descrevem os comportamentos dos objetos. 
          Eles operam sobre os atributos da classe e podem interagir com outros objetos.
        </p>
        <h4>Tipos de Métodos:</h4>
        <ul>
          <li><strong>Métodos de instância:</strong> Operam sobre o estado de um objeto específico</li>
          <li><strong>Métodos estáticos (de classe):</strong> Associados à classe, não a instâncias específicas</li>
          <li><strong>Construtores:</strong> Métodos especiais chamados na criação de objetos</li>
          <li><strong>Métodos acessores (getters):</strong> Retornam valores de atributos</li>
          <li><strong>Métodos modificadores (setters):</strong> Alteram valores de atributos</li>
        </ul>
        <h4>Sobrecarga e Sobrescrita:</h4>
        <ul>
          <li><strong>Sobrecarga de métodos:</strong> Múltiplos métodos com o mesmo nome, mas diferentes parâmetros</li>
          <li><strong>Sobrescrita de métodos:</strong> Redefinição de um método herdado de uma superclasse</li>
        </ul>
        <h4>Exemplo de Métodos em Java:</h4>
        <pre><code>
public class ContaBancaria {
    private String numero;
    private String titular;
    private double saldo;
    
    // Construtor
    public ContaBancaria(String numero, String titular, double saldoInicial) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    
    // Método de instância
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado com sucesso.");
        } else {
            System.out.println("Valor inválido para depósito.");
        }
    }
    
    // Sobrecarga de método
    public void depositar(double valor, String descricao) {
        depositar(valor);
        System.out.println("Descrição: " + descricao);
    }
    
    // Método estático
    public static double calcularRendimento(double valor, double taxa) {
        return valor * (taxa / 100);
    }
    
    // Getters e setters
    public double getSaldo() {
        return saldo;
    }
    
    // Outros métodos...
}
        </code></pre>
      `
    },
    {
      id: 'tab-mensagens',
      title: 'Mensagens',
      content: `
        <h3>Mensagens</h3>
        <p>
          Mensagens são a forma como os objetos se comunicam entre si. Quando um objeto envia uma mensagem 
          para outro, ele está essencialmente invocando um método no objeto receptor.
        </p>
        <h4>Componentes de uma Mensagem:</h4>
        <ul>
          <li><strong>Receptor:</strong> O objeto que recebe a mensagem</li>
          <li><strong>Nome do método:</strong> A operação a ser executada</li>
          <li><strong>Parâmetros:</strong> Informações adicionais necessárias para executar o método</li>
        </ul>
        <h4>Características das Mensagens:</h4>
        <ul>
          <li>Permitem a comunicação entre objetos independentemente de sua implementação interna</li>
          <li>Facilitam o polimorfismo, permitindo que diferentes objetos respondam de maneiras diferentes à mesma mensagem</li>
          <li>São a base para o acoplamento fraco entre componentes de software</li>
        </ul>
        <h4>Exemplo de Troca de Mensagens em Java:</h4>
        <pre><code>
public class Cliente {
    private String nome;
    private ContaBancaria conta;
    
    public Cliente(String nome, ContaBancaria conta) {
        this.nome = nome;
        this.conta = conta;
    }
    
    public void realizarTransacao(String tipo, double valor) {
        if (tipo.equals("deposito")) {
            // Enviando uma mensagem ao objeto conta
            conta.depositar(valor);
        } else if (tipo.equals("saque")) {
            // Enviando outra mensagem ao objeto conta
            boolean sucesso = conta.sacar(valor);
            if (sucesso) {
                System.out.println("Saque realizado com sucesso.");
            } else {
                System.out.println("Saldo insuficiente para saque.");
            }
        }
    }
    
    // Outros métodos...
}

// Em outro lugar do código:
ContaBancaria contaJoao = new ContaBancaria("12345-6", "João Silva", 1000.0);
Cliente joao = new Cliente("João Silva", contaJoao);

// Cliente envia mensagem para realizar transação
joao.realizarTransacao("deposito", 500.0);

// Que por sua vez envia mensagem para a conta bancária
// contaJoao.depositar(500.0) é executado internamente
        </code></pre>
      `
    }
  ]
};

// Dados para a seção de pilares
const pilaresData = {
  cards: [
    {
      icon: 'fas fa-lock',
      title: 'Encapsulamento',
      color: '#4285f4',
      text: 'O encapsulamento é o princípio de ocultar os detalhes internos de implementação de um objeto e expor apenas as interfaces necessárias. Isso protege os dados e garante a integridade do estado do objeto.',
      concepts: [
        'Controle de acesso através de modificadores (private, protected, public)',
        'Uso de métodos getters e setters para manipular atributos de forma controlada',
        'Proteção contra modificações indevidas',
        'Redução do acoplamento entre componentes'
      ],
      code: `
public class ContaBancaria {
    private double saldo; // Atributo encapsulado
    
    public double getSaldo() {
        return saldo; // Acesso controlado ao saldo
    }
    
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }
    
    public boolean sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            saldo -= valor;
            return true;
        }
        return false;
    }
}
      `,
      modalId: 'modal-encapsulamento'
    },
    {
      icon: 'fas fa-sitemap',
      title: 'Herança',
      color: '#34a853',
      text: 'A herança é o mecanismo que permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse). Isso promove a reutilização de código e estabelece uma relação "é um" entre classes.',
      concepts: [
        'Superclasse (classe pai) e subclasse (classe filha)',
        'Herança simples vs. herança múltipla',
        'Herança hierárquica e em níveis',
        'Método super para acessar membros da superclasse',
        'Classes abstratas e métodos abstratos'
      ],
      code: `
// Superclasse
public class Veiculo {
    protected String marca;
    protected String modelo;
    protected int ano;
    
    public Veiculo(String marca, String modelo, int ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    public void ligar() {
        System.out.println("Veículo ligado");
    }
}

// Subclasse
public class Carro extends Veiculo {
    private int numeroPortas;
    
    public Carro(String marca, String modelo, int ano, int numeroPortas) {
        super(marca, modelo, ano); // Chamada ao construtor da superclasse
        this.numeroPortas = numeroPortas;
    }
    
    // Sobrescrita de método
    @Override
    public void ligar() {
        System.out.println("Carro ligado com ignição eletrônica");
    }
    
    public void abrirPortaMalas() {
        System.out.println("Porta-malas aberto");
    }
}
      `,
      modalId: 'modal-heranca'
    },
    {
      icon: 'fas fa-random',
      title: 'Polimorfismo',
      color: '#fbbc05',
      text: 'O polimorfismo é a capacidade de objetos de diferentes classes responderem à mesma mensagem de diferentes maneiras. Permite tratar objetos de forma genérica através de suas superclasses ou interfaces.',
      concepts: [
        'Polimorfismo de sobrescrita (runtime): Métodos com mesma assinatura em classes relacionadas por herança',
        'Polimorfismo de sobrecarga (compile-time): Múltiplos métodos com mesmo nome, mas diferentes parâmetros',
        'Polimorfismo de inclusão: Baseado na relação de subtipo (um objeto de uma subclasse pode ser tratado como um objeto de sua superclasse)'
      ],
      code: `
// Polimorfismo de sobrescrita
public abstract class Forma {
    public abstract double calcularArea();
}

public class Circulo extends Forma {
    private double raio;
    
    public Circulo(double raio) {
        this.raio = raio;
    }
    
    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}

public class Retangulo extends Forma {
    private double largura;
    private double altura;
    
    public Retangulo(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }
    
    @Override
    public double calcularArea() {
        return largura * altura;
    }
}

// Uso do polimorfismo:
public class CalculadoraGeometrica {
    public void imprimirArea(Forma forma) {
        System.out.println("Área: " + forma.calcularArea());
    }
}

// Em outro lugar do código:
CalculadoraGeometrica calc = new CalculadoraGeometrica();
calc.imprimirArea(new Circulo(5)); // Polimorfismo em ação
calc.imprimirArea(new Retangulo(4, 6)); // Mesmo método, comportamento diferente
      `,
      modalId: 'modal-polimorfismo'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Abstração',
      color: '#ea4335',
      text: 'A abstração é o processo de identificar as características essenciais de um objeto, ignorando detalhes menos importantes. Permite representar entidades complexas do mundo real de forma simplificada.',
      concepts: [
        'Identificação de atributos e comportamentos relevantes',
        'Classes abstratas que definem contratos básicos',
        'Interfaces como contratos puros (sem implementação)',
        'Modelos conceituais que capturam a essência dos objetos'
      ],
      code: `
// Interface (abstração pura)
public interface Pagavel {
    double getValorPagamento();
}

// Classe abstrata (abstração parcial)
public abstract class Animal {
    protected String nome;
    
    public Animal(String nome) {
        this.nome = nome;
    }
    
    public abstract void emitirSom(); // Método abstrato
    
    public void dormir() { // Método concreto
        System.out.println(nome + " está dormindo");
    }
}

// Implementações concretas
public class Cachorro extends Animal {
    public Cachorro(String nome) {
        super(nome);
    }
    
    @Override
    public void emitirSom() {
        System.out.println("Au au!");
    }
}

public class Gato extends Animal {
    public Gato(String nome) {
        super(nome);
    }
    
    @Override
    public void emitirSom() {
        System.out.println("Miau!");
    }
}
      `,
      modalId: 'modal-abstracao'
    }
  ]
};

// Dados para os modais
const modalsData = {
  modals: [
    {
      id: 'modal-historia',
      title: 'História da Programação Orientada a Objetos',
      content: `
        <p>
          A história da Programação Orientada a Objetos remonta à década de 1960, quando os conceitos começaram a ser desenvolvidos.
          Aqui está uma linha do tempo com os principais marcos:
        </p>
        <ul>
          <li><strong>1960s:</strong> A linguagem Simula foi desenvolvida por Ole-Johan Dahl e Kristen Nygaard no Centro Norueguês de Computação. Simula introduziu conceitos como classes, objetos, herança e métodos virtuais, estabelecendo as bases para a POO.</li>
          <li><strong>1970s:</strong> Alan Kay, Dan Ingalls, Adele Goldberg e outros no Xerox PARC desenvolveram a linguagem Smalltalk, considerada a primeira linguagem de programação totalmente orientada a objetos. Kay cunhou o termo "orientação a objetos" e estabeleceu muitos dos princípios que conhecemos hoje.</li>
          <li><strong>1980s:</strong> Bjarne Stroustrup desenvolveu C++ no Bell Labs, adicionando recursos de orientação a objetos à linguagem C. C++ ganhou popularidade por combinar a eficiência do C com os benefícios da POO.</li>
          <li><strong>1990s:</strong> James Gosling e sua equipe na Sun Microsystems criaram Java, uma linguagem orientada a objetos projetada para ser portátil e segura. Java se tornou uma das linguagens mais populares para desenvolvimento empresarial e web.</li>
          <li><strong>2000s:</strong> Surgimento de linguagens modernas como C#, Python (que adotou mais fortemente os conceitos de POO) e Ruby, todas incorporando e evoluindo os conceitos de POO.</li>
          <li><strong>2010s:</strong> JavaScript evolui com ES6 adicionando classes e outros recursos de POO, tornando a orientação a objetos mais acessível para desenvolvimento web.</li>
        </ul>
        <p>
          Ao longo deste período, os conceitos fundamentais da POO foram refinados e expandidos, culminando nos quatro pilares que conhecemos hoje: encapsulamento, herança, polimorfismo e abstração. 
          A popularidade da POO cresceu porque ela oferece uma maneira intuitiva de modelar o mundo real em software, facilitando o desenvolvimento, manutenção e escalabilidade de sistemas complexos.
        </p>
      `
    },
    {
      id: 'modal-definicao',
      title: 'O que é Programação Orientada a Objetos?',
      content: `
        <p>
          A Programação Orientada a Objetos (POO) é um paradigma de programação baseado no conceito de "objetos", que são estruturas de dados que contêm dados (atributos) e código (métodos). A ideia fundamental é modelar software em termos de objetos do mundo real ou conceitos abstratos, cada um com suas próprias características e comportamentos.
        </p>
        <h4>Conceitos-chave da POO:</h4>
        <ul>
          <li><strong>Objetos:</strong> Entidades que combinam estado (dados) e comportamento (código) em uma única unidade</li>
          <li><strong>Classes:</strong> "Blueprints" ou moldes a partir dos quais objetos são criados</li>
          <li><strong>Atributos:</strong> Variáveis que armazenam dados dentro de um objeto</li>
          <li><strong>Métodos:</strong> Funções que definem o comportamento de um objeto</li>
          <li><strong>Encapsulamento:</strong> Ocultação dos detalhes de implementação interna</li>
          <li><strong>Herança:</strong> Mecanismo para reutilização de código entre classes relacionadas</li>
          <li><strong>Polimorfismo:</strong> Capacidade de objetos de diferentes tipos responderem à mesma interface</li>
          <li><strong>Abstração:</strong> Simplificação de entidades complexas, destacando características essenciais</li>
        </ul>
        <h4>Diferenças em relação à programação procedural:</h4>
        <ul>
          <li>Na programação procedural, o foco está nas funções e procedimentos que operam sobre dados separados.</li>
          <li>Na POO, o foco está nos objetos que contêm tanto os dados quanto as operações que manipulam esses dados.</li>
          <li>A POO promove um design mais modular e organizado, facilitando a manutenção e extensão do código.</li>
          <li>A POO oferece mecanismos como herança e polimorfismo que não estão naturalmente disponíveis na programação procedural.</li>
        </ul>
        <p>
          Linguagens que suportam POO incluem Java, C++, C#, Python, Ruby, JavaScript (com ES6+), PHP e muitas outras. Cada uma implementa os conceitos de POO de maneira ligeiramente diferente, mas os princípios fundamentais permanecem os mesmos.
        </p>
      `
    },
    {
      id: 'modal-vantagens',
      title: 'Vantagens e Aplicações da POO',
      content: `
        <h4>Vantagens da Programação Orientada a Objetos:</h4>
        <ul>
          <li><strong>Modularidade:</strong> O código pode ser dividido em partes independentes (objetos), facilitando o desenvolvimento em equipe.</li>
          <li><strong>Reutilização:</strong> Através de herança e composição, código existente pode ser reutilizado em novos contextos.</li>
          <li><strong>Manutenibilidade:</strong> A encapsulação permite que partes do sistema sejam modificadas sem afetar outras partes.</li>
          <li><strong>Escalabilidade:</strong> Sistemas OO são geralmente mais fáceis de expandir e escalar devido à sua estrutura modular.</li>
          <li><strong>Modelagem natural:</strong> A POO reflete como pensamos sobre o mundo real, tornando o design de software mais intuitivo.</li>
          <li><strong>Segurança:</strong> O encapsulamento protege dados sensíveis, permitindo acesso apenas através de interfaces definidas.</li>
          <li><strong>Flexibilidade:</strong> O polimorfismo permite que novos comportamentos sejam adicionados com mudanças mínimas no código existente.</li>
        </ul>
        
        <h4>Aplicações da POO:</h4>
        <ul>
          <li><strong>Desenvolvimento de software empresarial:</strong> Sistemas ERP, CRM e outros sistemas corporativos extensos</li>
          <li><strong>Desenvolvimento web:</strong> Frameworks como Spring (Java), Django (Python), Ruby on Rails</li>
          <li><strong>Desenvolvimento móvel:</strong> Android (Java/Kotlin), iOS (Swift/Objective-C)</li>
          <li><strong>Desenvolvimento de jogos:</strong> Unity (C#), Unreal Engine (C++)</li>
          <li><strong>Sistemas operacionais:</strong> Componentes do Windows, macOS, e muitas partes dos sistemas Linux</li>
          <li><strong>Interfaces gráficas:</strong> Bibliotecas de UI como Qt, JavaFX, .NET WPF</li>
          <li><strong>Bancos de dados orientados a objetos:</strong> MongoDB, Db4o</li>
          <li><strong>Simulações e modelagem:</strong> Sistemas que simulam fenômenos do mundo real</li>
          <li><strong>Inteligência artificial e Machine Learning:</strong> Bibliotecas como TensorFlow têm APIs orientadas a objetos</li>
        </ul>
        
        <p>
          A POO tornou-se o paradigma dominante para desenvolvimento de software complexo porque oferece um equilíbrio entre abstração de alto nível (facilitando o pensamento sobre problemas complexos) e controle de baixo nível sobre como os sistemas são implementados.
        </p>
      `
    },
    {
      id: 'modal-encapsulamento',
      title: 'Encapsulamento - Exemplos Avançados',
      content: `
        <p>
          O encapsulamento é a prática de ocultar os detalhes internos de um objeto e expor apenas as interfaces necessárias para interagir com ele. Vamos explorar alguns exemplos avançados:
        </p>
        
        <h4>Exemplo 1: Validação de Dados com Encapsulamento</h4>
        <pre><code>
public class Pessoa {
    private String nome;
    private int idade;
    private String email;
    
    // Construtor
    public Pessoa(String nome, int idade, String email) {
        setNome(nome);
        setIdade(idade);
        setEmail(email);
    }
    
    // Getters e setters com validação
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio");
        }
        this.nome = nome;
    }
    
    public int getIdade() {
        return idade;
    }
    
    public void setIdade(int idade) {
        if (idade < 0 || idade > 150) {
            throw new IllegalArgumentException("Idade deve estar entre 0 e 150");
        }
        this.idade = idade;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        if (email == null || !email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
            throw new IllegalArgumentException("Email inválido");
        }
        this.email = email;
    }
}
        </code></pre>
        
        <h4>Exemplo 2: Encapsulamento com Imutabilidade</h4>
        <pre><code>
public final class Ponto {
    private final double x;
    private final double y;
    
    public Ponto(double x, double y) {
        this.x = x;
        this.y = y;
    }
    
    public double getX() {
        return x;
    }
    
    public double getY() {
        return y;
    }
    
    // Em vez de setters, criamos métodos que retornam novos objetos
    public Ponto moverX(double delta) {
        return new Ponto(x + delta, y);
    }
    
    public Ponto moverY(double delta) {
        return new Ponto(x, y + delta);
    }
    
    public Ponto mover(double deltaX, double deltaY) {
        return new Ponto(x + deltaX, y + deltaY);
    }
    
    public double distanciaAte(Ponto outro) {
        double dx = this.x - outro.x;
        double dy = this.y - outro.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
        </code></pre>
        
        <h4>Exemplo 3: Encapsulamento com Propriedades Computadas</h4>
        <pre><code>
public class CirculoComPropriedadeComputada {
    private double raio;
    
    public CirculoComPropriedadeComputada(double raio) {
        setRaio(raio);
    }
    
    public double getRaio() {
        return raio;
    }
    
    public void setRaio(double raio) {
        if (raio < 0) {
            throw new IllegalArgumentException("Raio não pode ser negativo");
        }
        this.raio = raio;
    }
    
    // Propriedades computadas - derivadas de outras propriedades
    public double getDiametro() {
        return 2 * raio;
    }
    
    public double getCircunferencia() {
        return 2 * Math.PI * raio;
    }
    
    public double getArea() {
        return Math.PI * raio * raio;
    }
}
        </code></pre>
        
        <h4>Exemplo 4: Encapsulamento com Estado Interno Protegido</h4>
        <pre><code>
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Biblioteca {
    private List<Livro> livros = new ArrayList<>();
    
    public void adicionarLivro(Livro livro) {
        livros.add(livro);
    }
    
    public void removerLivro(Livro livro) {
        livros.remove(livro);
    }
    
    // Retorna uma cópia não modificável da lista
    public List<Livro> getLivros() {
        return Collections.unmodifiableList(livros);
    }
    
    // Método para pesquisar por título
    public List<Livro> pesquisarPorTitulo(String termo) {
        List<Livro> resultados = new ArrayList<>();
        for (Livro livro : livros) {
            if (livro.getTitulo().toLowerCase().contains(termo.toLowerCase())) {
                resultados.add(livro);
            }
        }
        return resultados;
    }
    
    // Método para contar total
    public int getTotalLivros() {
        return livros.size();
    }
}

class Livro {
    private String titulo;
    private String autor;
    
    public Livro(String titulo, String autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    
    public String getTitulo() {
        return titulo;
    }
    
    public String getAutor() {
        return autor;
    }
}
        </code></pre>
        
        <p>
          Esses exemplos demonstram como o encapsulamento vai muito além de simplesmente tornar atributos privados. 
          O encapsulamento bem implementado também envolve:
        </p>
        <ul>
          <li>Validação de dados para garantir integridade</li>
          <li>Proteção contra modificações indesejadas (imutabilidade quando apropriado)</li>
          <li>Exposição de propriedades computadas em vez de detalhes internos</li>
          <li>Proteção de coleções e estados internos</li>
          <li>Definição de interfaces claras e concisas para interação</li>
        </ul>
      `
    },
    {
      id: 'modal-heranca',
      title: 'Herança - Exemplos Avançados',
      content: `
        <p>
          A herança permite que uma classe (subclasse) herde características de outra classe (superclasse). Vamos explorar alguns exemplos avançados:
        </p>
        
        <h4>Exemplo 1: Herança com Template Method Pattern</h4>
        <pre><code>
public abstract class DocumentProcessor {
    // Template method - define o algoritmo geral
    public final void processDocument(String document) {
        String content = loadDocument(document);
        content = parseContent(content);
        content = processContent(content); // Este método será sobrescrito pelas subclasses
        saveResult(content);
    }
    
    // Métodos comuns compartilhados por todas as subclasses
    protected String loadDocument(String path) {
        System.out.println("Carregando documento: " + path);
        // Código para carregar o documento
        return "Conteúdo do documento " + path;
    }
    
    protected String parseContent(String content) {
        System.out.println("Analisando conteúdo");
        // Código para analisar o conteúdo
        return content + " (analisado)";
    }
    
    // Método abstrato que deve ser implementado pelas subclasses
    protected abstract String processContent(String content);
    
    protected void saveResult(String content) {
        System.out.println("Salvando resultado: " + content);
        // Código para salvar o resultado
    }
}

// Subclasse para processamento de texto
public class TextProcessor extends DocumentProcessor {
    @Override
    protected String processContent(String content) {
        System.out.println("Processando como documento de texto");
        // Lógica específica para processamento de texto
        return content + " (processado como texto)";
    }
}

// Subclasse para processamento de imagem
public class ImageProcessor extends DocumentProcessor {
    @Override
    protected String processContent(String content) {
        System.out.println("Processando como imagem");
        // Lógica específica para processamento de imagem
        return content + " (processado como imagem)";
    }
    
    // Sobrescreve também o método de análise
    @Override
    protected String parseContent(String content) {
        System.out.println("Analisando metadados da imagem");
        // Análise especializada para imagens
        return content + " (metadados analisados)";
    }
}
        </code></pre>
        
        <h4>Exemplo 2: Hierarquia de herança com métodos construtores em cadeia</h4>
        <pre><code>
public class Pessoa {
    protected String nome;
    protected int idade;
    
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    public void apresentar() {
        System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
    }
}

public class Funcionario extends Pessoa {
    protected String cargo;
    protected double salario;
    
    public Funcionario(String nome, int idade, String cargo, double salario) {
        super(nome, idade); // Chama o construtor da classe pai
        this.cargo = cargo;
        this.salario = salario;
    }
    
    @Override
    public void apresentar() {
        super.apresentar(); // Chama o método da classe pai
        System.out.println("Trabalho como " + cargo + ".");
    }
    
    public void trabalhar() {
        System.out.println(nome + " está trabalhando como " + cargo + ".");
    }
}

public class Gerente extends Funcionario {
    private String departamento;
    private List<Funcionario> equipe;
    
    public Gerente(String nome, int idade, double salario, String departamento) {
        super(nome, idade, "Gerente", salario * 1.2); // Gerentes têm 20% de bônus
        this.departamento = departamento;
        this.equipe = new ArrayList<>();
    }
    
    @Override
    public void apresentar() {
        super.apresentar();
        System.out.println("Sou gerente do departamento de " + departamento + ".");
        System.out.println("Gerencio uma equipe de " + equipe.size() + " pessoas.");
    }
    
    public void adicionarMembro(Funcionario funcionario) {
        equipe.add(funcionario);
        System.out.println(funcionario.nome + " adicionado à equipe de " + nome + ".");
    }
    
    public void gerenciarEquipe() {
        System.out.println(nome + " está gerenciando a equipe do departamento de " + departamento + ":");
        for (Funcionario f : equipe) {
            System.out.println("- " + f.nome + " (" + f.cargo + ")");
        }
    }
}
        </code></pre>
        
        <h4>Exemplo 3: Herança com interfaces para comportamentos específicos</h4>
        <pre><code>
// Interface para objetos que podem voar
interface Voador {
    void voar();
}

// Interface para objetos que podem nadar
interface Nadador {
    void nadar();
}

// Classe base
public abstract class Animal {
    protected String nome;
    protected String especie;
    
    public Animal(String nome, String especie) {
        this.nome = nome;
        this.especie = especie;
    }
    
    public abstract void emitirSom();
    
    public void dormir() {
        System.out.println(nome + " está dormindo...");
    }
}

// Ave - pode voar, mas não pode nadar
public class Ave extends Animal implements Voador {
    private double envergaduraAsas;
    
    public Ave(String nome, String especie, double envergaduraAsas) {
        super(nome, especie);
        this.envergaduraAsas = envergaduraAsas;
    }
    
    @Override
    public void emitirSom() {
        System.out.println(nome + " está cantando!");
    }
    
    @Override
    public void voar() {
        System.out.println(nome + " está voando com suas asas de " + envergaduraAsas + "m de envergadura!");
    }
}

// Peixe - pode nadar, mas não pode voar
public class Peixe extends Animal implements Nadador {
    private String tipoAgua; // "doce" ou "salgada"
    
    public Peixe(String nome, String especie, String tipoAgua) {
        super(nome, especie);
        this.tipoAgua = tipoAgua;
    }
    
    @Override
    public void emitirSom() {
        System.out.println(nome + " não emite sons audíveis para humanos.");
    }
    
    @Override
    public void nadar() {
        System.out.println(nome + " está nadando em água " + tipoAgua + "!");
    }
}

// Pato - pode voar E nadar!
public class Pato extends Animal implements Voador, Nadador {
    public Pato(String nome) {
        super(nome, "Pato");
    }
    
    @Override
    public void emitirSom() {
        System.out.println(nome + ": Quack! Quack!");
    }
    
    @Override
    public void voar() {
        System.out.println(nome + " está voando baixo sobre a água!");
    }
    
    @Override
    public void nadar() {
        System.out.println(nome + " está nadando graciosamente!");
    }
}
        </code></pre>
        
        <p>
          Estes exemplos demonstram várias técnicas avançadas de herança:
        </p>
        <ul>
          <li>Template Method para definir um algoritmo na superclasse com partes específicas implementadas nas subclasses</li>
          <li>Construtores em cadeia para inicializar hierarquias de classes</li>
          <li>Combinação de herança com interfaces para modelar comportamentos múltiplos</li>
          <li>Sobrescrita seletiva de métodos para especialização</li>
          <li>Uso de super para estender, e não apenas substituir, comportamentos herdados</li>
        </ul>
      `
    },
    {
      id: 'modal-polimorfismo',
      title: 'Polimorfismo - Exemplos Avançados',
      content: `
        <p>
          O polimorfismo permite que objetos de diferentes classes sejam tratados através de uma interface comum. Vamos explorar alguns exemplos avançados:
        </p>
        
        <h4>Exemplo 1: Polimorfismo com Factory Method Pattern</h4>
        <pre><code>
// Interface comum
public interface Notificacao {
    void enviar(String mensagem);
}

// Implementações concretas
public class NotificacaoEmail implements Notificacao {
    private String emailDestino;
    
    public NotificacaoEmail(String emailDestino) {
        this.emailDestino = emailDestino;
    }
    
    @Override
    public void enviar(String mensagem) {
        System.out.println("Enviando e-mail para " + emailDestino + ": " + mensagem);
        // Lógica para enviar e-mail
    }
}

public class NotificacaoSMS implements Notificacao {
    private String numeroTelefone;
    
    public NotificacaoSMS(String numeroTelefone) {
        this.numeroTelefone = numeroTelefone;
    }
    
    @Override
    public void enviar(String mensagem) {
        System.out.println("Enviando SMS para " + numeroTelefone + ": " + mensagem);
        // Lógica para enviar SMS
    }
}

public class NotificacaoPush implements Notificacao {
    private String deviceToken;
    
    public NotificacaoPush(String deviceToken) {
        this.deviceToken = deviceToken;
    }
    
    @Override
    public void enviar(String mensagem) {
        System.out.println("Enviando notificação push para dispositivo " + deviceToken + ": " + mensagem);
        // Lógica para enviar push
    }
}

// Factory para criar notificações
public class NotificacaoFactory {
    public static Notificacao criarNotificacao(String tipo, String destino) {
        switch (tipo.toLowerCase()) {
            case "email":
                return new NotificacaoEmail(destino);
            case "sms":
                return new NotificacaoSMS(destino);
            case "push":
                return new NotificacaoPush(destino);
            default:
                throw new IllegalArgumentException("Tipo de notificação não suportado: " + tipo);
        }
    }
}

// Uso do factory e polimorfismo
public class ServicoNotificacao {
    public void notificarUsuario(String userId, String mensagem, String tipoNotificacao) {
        // Obter detalhes do usuário de um serviço/banco de dados
        String destino = obterDestinoUsuario(userId, tipoNotificacao);
        
        // Criar notificação (sem se preocupar com o tipo concreto)
        Notificacao notificacao = NotificacaoFactory.criarNotificacao(tipoNotificacao, destino);
        
        // Enviar notificação (polimorfismo em ação)
        notificacao.enviar(mensagem);
    }
    
    private String obterDestinoUsuario(String userId, String tipoNotificacao) {
        // Simulação - em um sistema real, isso viria de um banco de dados
        if (tipoNotificacao.equals("email")) {
            return "usuario" + userId + "@exemplo.com";
        } else if (tipoNotificacao.equals("sms")) {
            return "+55" + userId + "9999888";
        } else {
            return "DEVICE_" + userId + "_TOKEN";
        }
    }
}
        </code></pre>
        
        <h4>Exemplo 2: Polimorfismo com Strategy Pattern</h4>
        <pre><code>
// Interface para estratégias de pagamento
public interface EstrategiaPagamento {
    boolean processar(double valor);
}

// Implementações concretas
public class PagamentoCartaoCredito implements EstrategiaPagamento {
    private String numeroCartao;
    private String nomeCartao;
    private String cvv;
    private String dataValidade;
    
    public PagamentoCartaoCredito(String numeroCartao, String nomeCartao, String cvv, String dataValidade) {
        this.numeroCartao = numeroCartao;
        this.nomeCartao = nomeCartao;
        this.cvv = cvv;
        this.dataValidade = dataValidade;
    }
    
    @Override
    public boolean processar(double valor) {
        System.out.println("Processando pagamento de R$" + valor + " com cartão de crédito: " + mascaraCartao(numeroCartao));
        // Lógica para processar pagamento com cartão
        return true; // Simulando sucesso
    }
    
    private String mascaraCartao(String numeroCartao) {
        return "****-****-****-" + numeroCartao.substring(numeroCartao.length() - 4);
    }
}

public class PagamentoPix implements EstrategiaPagamento {
    private String chavePix;
    
    public PagamentoPix(String chavePix) {
        this.chavePix = chavePix;
    }
    
    @Override
    public boolean processar(double valor) {
        System.out.println("Processando pagamento de R$" + valor + " via PIX para a chave: " + chavePix);
        // Lógica para processar pagamento PIX
        return true; // Simulando sucesso
    }
}

public class PagamentoBoleto implements EstrategiaPagamento {
    private String cpfPagador;
    
    public PagamentoBoleto(String cpfPagador) {
        this.cpfPagador = cpfPagador;
    }
    
    @Override
    public boolean processar(double valor) {
        String codigoBoleto = gerarCodigoBoleto(valor, cpfPagador);
        System.out.println("Gerando boleto de R$" + valor + " para CPF " + cpfPagador);
        System.out.println("Código do boleto: " + codigoBoleto);
        // Em um caso real, o pagamento só é confirmado após compensação do boleto
        return false; // Boleto gerado, mas ainda não foi pago
    }
    
    private String gerarCodigoBoleto(double valor, String cpfPagador) {
        // Lógica para gerar código de boleto
        return "34191.79001 12345.678901 12345.678901 1 91230000" + String.format("%08d", (int)(valor*100));
    }
}

// Classe que usa as estratégias
public class ProcessadorPagamento {
    private EstrategiaPagamento estrategia;
    
    public ProcessadorPagamento() {
        // Construtor padrão sem estratégia definida
    }
    
    public ProcessadorPagamento(EstrategiaPagamento estrategia) {
        this.estrategia = estrategia;
    }
    
    public void setEstrategia(EstrategiaPagamento estrategia) {
        this.estrategia = estrategia;
    }
    
    public boolean processarPagamento(double valor) {
        if (estrategia == null) {
            throw new IllegalStateException("Estratégia de pagamento não definida");
        }
        return estrategia.processar(valor);
    }
}

// Exemplo de uso
public class Main {
    public static void main(String[] args) {
        // Criar processador
        ProcessadorPagamento processador = new ProcessadorPagamento();
        
        // Processar com cartão de crédito
        processador.setEstrategia(new PagamentoCartaoCredito("1234567890123456", "JOSE SILVA", "123", "12/25"));
        boolean resultadoCartao = processador.processarPagamento(100.50);
        
        // Processar com PIX
        processador.setEstrategia(new PagamentoPix("email@exemplo.com"));
        boolean resultadoPix = processador.processarPagamento(50.75);
        
        // Processar com boleto
        processador.setEstrategia(new PagamentoBoleto("123.456.789-00"));
        boolean resultadoBoleto = processador.processarPagamento(199.99);
    }
}
        </code></pre>
        
        <h4>Exemplo 3: Polimorfismo com Double Dispatch</h4>
        <pre><code>
// Hierarquia de Visitantes
interface Visitante {
    void visitar(Circulo circulo);
    void visitar(Retangulo retangulo);
    void visitar(Triangulo triangulo);
}

// Hierarquia de Formas
interface Forma {
    void aceitar(Visitante visitante);
}

class Circulo implements Forma {
    private double raio;
    
    public Circulo(double raio) {
        this.raio = raio;
    }
    
    public double getRaio() {
        return raio;
    }
    
    @Override
    public void aceitar(Visitante visitante) {
        visitante.visitar(this); // Double dispatch
    }
}

class Retangulo implements Forma {
    private double largura;
    private double altura;
    
    public Retangulo(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }
    
    public double getLargura() {
        return largura;
    }
    
    public double getAltura() {
        return altura;
    }
    
    @Override
    public void aceitar(Visitante visitante) {
        visitante.visitar(this); // Double dispatch
    }
}

class Triangulo implements Forma {
    private double base;
    private double altura;
    
    public Triangulo(double base, double altura) {
        this.base = base;
        this.altura = altura;
    }
    
    public double getBase() {
        return base;
    }
    
    public double getAltura() {
        return altura;
    }
    
    @Override
    public void aceitar(Visitante visitante) {
        visitante.visitar(this); // Double dispatch
    }
}

// Implementações concretas de visitantes
class CalculadoraArea implements Visitante {
    private double areaTotal = 0;
    
    @Override
    public void visitar(Circulo circulo) {
        double area = Math.PI * circulo.getRaio() * circulo.getRaio();
        areaTotal += area;
        System.out.println("Área do círculo: " + area);
    }
    
    @Override
    public void visitar(Retangulo retangulo) {
        double area = retangulo.getLargura() * retangulo.getAltura();
        areaTotal += area;
        System.out.println("Área do retângulo: " + area);
    }
    
    @Override
    public void visitar(Triangulo triangulo) {
        double area = (triangulo.getBase() * triangulo.getAltura()) / 2;
        areaTotal += area;
        System.out.println("Área do triângulo: " + area);
    }
    
    public double getAreaTotal() {
        return areaTotal;
    }
}

class DesenhadorFormas implements Visitante {
    @Override
    public void visitar(Circulo circulo) {
        System.out.println("Desenhando círculo com raio " + circulo.getRaio());
    }
    
    @Override
    public void visitar(Retangulo retangulo) {
        System.out.println("Desenhando retângulo de " + retangulo.getLargura() + "x" + retangulo.getAltura());
    }
    
    @Override
    public void visitar(Triangulo triangulo) {
        System.out.println("Desenhando triângulo com base " + triangulo.getBase() + " e altura " + triangulo.getAltura());
    }
}

// Exemplo de uso
public class Main {
    public static void main(String[] args) {
        List<Forma> formas = Arrays.asList(
            new Circulo(5),
            new Retangulo(4, 6),
            new Triangulo(3, 8)
        );
        
        // Calcular áreas
        CalculadoraArea calculadora = new CalculadoraArea();
        for (Forma forma : formas) {
            forma.aceitar(calculadora);
        }
        System.out.println("Área total: " + calculadora.getAreaTotal());
        
        // Desenhar formas
        DesenhadorFormas desenhador = new DesenhadorFormas();
        for (Forma forma : formas) {
            forma.aceitar(desenhador);
        }
    }
}
        </code></pre>
        
        <p>
          Estes exemplos demonstram técnicas avançadas de polimorfismo:
        </p>
        <ul>
          <li>Uso de interfaces para definir comportamentos comuns</li>
          <li>Factory Method para criar diferentes implementações sem preocupação com o tipo concreto</li>
          <li>Pattern Strategy para selecionar algoritmos em tempo de execução</li>
          <li>Double Dispatch (pattern Visitor) para resolver chamadas de método com base em dois objetos</li>
          <li>Polimorfismo como base de diversos padrões de design orientados a objetos</li>
        </ul>
      `
    },
    {
      id: 'modal-abstracao',
      title: 'Abstração - Exemplos Avançados',
      content: `
        <p>
          A abstração envolve identificar as características relevantes de um objeto ou sistema, ignorando detalhes menos importantes. Vamos explorar alguns exemplos avançados:
        </p>
        
        <h4>Exemplo 1: Abstração em uma Arquitetura em Camadas</h4>
        <pre><code>
// Camada de Modelo (Abstração dos dados)
public class Usuario {
    private long id;
    private String nome;
    private String email;
    private String senha; // Armazenada com hash na prática
    
    // Construtores, getters, setters
}

// Camada de Acesso a Dados (Abstração do armazenamento)
public interface UsuarioRepository {
    Usuario buscarPorId(long id);
    Usuario buscarPorEmail(String email);
    List<Usuario> buscarTodos();
    void salvar(Usuario usuario);
    void atualizar(Usuario usuario);
    void excluir(long id);
}

// Implementação concreta para banco de dados
public class UsuarioDatabaseRepository implements UsuarioRepository {
    private Connection connection; // Conexão com o banco de dados
    
    public UsuarioDatabaseRepository(Connection connection) {
        this.connection = connection;
    }
    
    @Override
    public Usuario buscarPorId(long id) {
        // Implementação com SQL e JDBC
        try {
            PreparedStatement stmt = connection.prepareStatement("SELECT * FROM usuarios WHERE id = ?");
            stmt.setLong(1, id);
            ResultSet rs = stmt.executeQuery();
            // Mapear resultado para objeto Usuario
            // [...]
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar usuário", e);
        }
        return null; // Placeholder
    }
    
    // Outras implementações...
}

// Implementação concreta para armazenamento em memória (para testes)
public class UsuarioMemoryRepository implements UsuarioRepository {
    private Map<Long, Usuario> usuarios = new HashMap<>();
    private long nextId = 1;
    
    @Override
    public Usuario buscarPorId(long id) {
        return usuarios.get(id);
    }
    
    // Outras implementações...
}

// Camada de Serviço (Abstração da lógica de negócio)
public interface UsuarioService {
    Usuario autenticar(String email, String senha);
    Usuario registrar(String nome, String email, String senha);
    void alterarSenha(long usuarioId, String senhaAtual, String novaSenha);
    // Outros métodos...
}

public class UsuarioServiceImpl implements UsuarioService {
    private UsuarioRepository repository;
    private HashService hashService; // Serviço para hash de senhas
    
    public UsuarioServiceImpl(UsuarioRepository repository, HashService hashService) {
        this.repository = repository;
        this.hashService = hashService;
    }
    
    @Override
    public Usuario autenticar(String email, String senha) {
        Usuario usuario = repository.buscarPorEmail(email);
        if (usuario == null) {
            return null; // Usuário não encontrado
        }
        
        if (!hashService.verificar(senha, usuario.getSenha())) {
            return null; // Senha incorreta
        }
        
        return usuario; // Autenticação bem-sucedida
    }
    
    // Outras implementações...
}

// Camada de Controle (Abstração da interface)
public class UsuarioController {
    private UsuarioService usuarioService;
    
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    
    public Response login(Request request) {
        String email = request.getParameter("email");
        String senha = request.getParameter("senha");
        
        Usuario usuario = usuarioService.autenticar(email, senha);
        if (usuario == null) {
            return Response.error("Credenciais inválidas");
        }
        
        // Criar sessão, gerar token, etc.
        return Response.success("Login bem-sucedido", usuario);
    }
    
    // Outros endpoints...
}
        </code></pre>
        
        <h4>Exemplo 2: Abstração com Event-Driven Design</h4>
        <pre><code>
// Abstração de eventos
public interface Evento {
    String getTipo();
    LocalDateTime getTimestamp();
    Map<String, Object> getDados();
}

public class EventoBase implements Evento {
    private final String tipo;
    private final LocalDateTime timestamp;
    private final Map<String, Object> dados;
    
    public EventoBase(String tipo, Map<String, Object> dados) {
        this.tipo = tipo;
        this.timestamp = LocalDateTime.now();
        this.dados = new HashMap<>(dados); // Cópia defensiva
    }
    
    @Override
    public String getTipo() {
        return tipo;
    }
    
    @Override
    public LocalDateTime getTimestamp() {
        return timestamp;
    }
    
    @Override
    public Map<String, Object> getDados() {
        return Collections.unmodifiableMap(dados); // Retorna cópia imutável
    }
}

// Eventos concretos
public class UsuarioCriadoEvento extends EventoBase {
    public UsuarioCriadoEvento(long usuarioId, String nome, String email) {
        super("USUARIO_CRIADO", Map.of(
            "usuarioId", usuarioId,
            "nome", nome,
            "email", email
        ));
    }
}

public class PedidoRealizadoEvento extends EventoBase {
    public PedidoRealizadoEvento(long pedidoId, long usuarioId, double valor) {
        super("PEDIDO_REALIZADO", Map.of(
            "pedidoId", pedidoId,
            "usuarioId", usuarioId,
            "valor", valor
        ));
    }
}

// Abstração de manipuladores de eventos
public interface EventoHandler<T extends Evento> {
    void manipular(T evento);
    boolean podeManipular(Evento evento);
}

// Implementações concretas
public class UsuarioCriadoHandler implements EventoHandler<UsuarioCriadoEvento> {
    private EmailService emailService;
    
    public UsuarioCriadoHandler(EmailService emailService) {
        this.emailService = emailService;
    }
    
    @Override
    public void manipular(UsuarioCriadoEvento evento) {
        String email = (String) evento.getDados().get("email");
        String nome = (String) evento.getDados().get("nome");
        
        // Enviar e-mail de boas-vindas
        emailService.enviarEmail(
            email,
            "Bem-vindo ao nosso sistema!",
            "Olá " + nome + ", obrigado por se cadastrar..."
        );
        
        System.out.println("Usuário criado processado: " + nome);
    }
    
    @Override
    public boolean podeManipular(Evento evento) {
        return "USUARIO_CRIADO".equals(evento.getTipo());
    }
}

public class PedidoRealizadoHandler implements EventoHandler<PedidoRealizadoEvento> {
    private NotificacaoService notificacaoService;
    private UsuarioRepository usuarioRepository;
    
    // Construtor com injeção de dependências...
    
    @Override
    public void manipular(PedidoRealizadoEvento evento) {
        long usuarioId = (long) evento.getDados().get("usuarioId");
        long pedidoId = (long) evento.getDados().get("pedidoId");
        double valor = (double) evento.getDados().get("valor");
        
        Usuario usuario = usuarioRepository.buscarPorId(usuarioId);
        
        // Enviar notificação
        notificacaoService.notificar(
            usuario,
            "Pedido Confirmado",
            "Seu pedido #" + pedidoId + " no valor de R$ " + valor + " foi confirmado."
        );
        
        System.out.println("Pedido processado: " + pedidoId);
    }
    
    @Override
    public boolean podeManipular(Evento evento) {
        return "PEDIDO_REALIZADO".equals(evento.getTipo());
    }
}

// Barramento de eventos
public class EventoBus {
    private List<EventoHandler<? extends Evento>> handlers = new ArrayList<>();
    
    public void registrarHandler(EventoHandler<? extends Evento> handler) {
        handlers.add(handler);
    }
    
    public void publicar(Evento evento) {
        System.out.println("Evento publicado: " + evento.getTipo() + " em " + evento.getTimestamp());
        
        for (EventoHandler handler : handlers) {
            if (handler.podeManipular(evento)) {
                try {
                    handler.manipular(evento);
                } catch (Exception e) {
                    System.err.println("Erro ao processar evento: " + e.getMessage());
                }
            }
        }
    }
}
        </code></pre>
        
        <h4>Exemplo 3: Abstração com Model-View-Presenter (MVP)</h4>
        <pre><code>
// Modelo (Model)
public class Tarefa {
    private long id;
    private String titulo;
    private String descricao;
    private boolean concluida;
    private LocalDate prazo;
    
    // Construtores, getters, setters
}

public interface TarefaRepository {
    List<Tarefa> buscarTodas();
    Tarefa buscarPorId(long id);
    void salvar(Tarefa tarefa);
    void atualizar(Tarefa tarefa);
    void excluir(long id);
}

// View (Interface)
public interface TarefaView {
    void exibirTarefas(List<Tarefa> tarefas);
    void exibirMensagem(String mensagem);
    void limparFormulario();
    String getTituloInput();
    String getDescricaoInput();
    LocalDate getPrazoInput();
    long getTarefaSelecionada();
}

// Presenter
public class TarefaPresenter {
    private TarefaView view;
    private TarefaRepository repository;
    
    public TarefaPresenter(TarefaView view, TarefaRepository repository) {
        this.view = view;
        this.repository = repository;
    }
    
    public void carregarTarefas() {
        List<Tarefa> tarefas = repository.buscarTodas();
        view.exibirTarefas(tarefas);
    }
    
    public void criarTarefa() {
        String titulo = view.getTituloInput();
        String descricao = view.getDescricaoInput();
        LocalDate prazo = view.getPrazoInput();
        
        if (titulo == null || titulo.trim().isEmpty()) {
            view.exibirMensagem("O título é obrigatório");
            return;
        }
        
        Tarefa novaTarefa = new Tarefa();
        novaTarefa.setTitulo(titulo);
        novaTarefa.setDescricao(descricao);
        novaTarefa.setPrazo(prazo);
        novaTarefa.setConcluida(false);
        
        repository.salvar(novaTarefa);
        view.limparFormulario();
        view.exibirMensagem("Tarefa criada com sucesso!");
        carregarTarefas(); // Recarregar lista
    }
    
    public void marcarComoConcluida() {
        long tarefaId = view.getTarefaSelecionada();
        if (tarefaId <= 0) {
            view.exibirMensagem("Selecione uma tarefa");
            return;
        }
        
        Tarefa tarefa = repository.buscarPorId(tarefaId);
        if (tarefa == null) {
            view.exibirMensagem("Tarefa não encontrada");
            return;
        }
        
        tarefa.setConcluida(true);
        repository.atualizar(tarefa);
        view.exibirMensagem("Tarefa marcada como concluída!");
        carregarTarefas(); // Recarregar lista
    }
    
    // Outros métodos...
}

// Implementação concreta da View (exemplo simplificado para console)
public class TarefaConsoleView implements TarefaView {
    private Scanner scanner = new Scanner(System.in);
    private TarefaPresenter presenter;
    private long tarefaSelecionada;
    
    public void setPresenter(TarefaPresenter presenter) {
        this.presenter = presenter;
    }
    
    public void exibirMenu() {
        System.out.println("\n===== GERENCIADOR DE TAREFAS =====");
        System.out.println("1. Listar todas as tarefas");
        System.out.println("2. Criar nova tarefa");
        System.out.println("3. Marcar tarefa como concluída");
        System.out.println("4. Excluir tarefa");
        System.out.println("0. Sair");
        System.out.print("Escolha uma opção: ");
        
        int opcao = scanner.nextInt();
        scanner.nextLine(); // Consumir quebra de linha
        
        switch (opcao) {
            case 1:
                presenter.carregarTarefas();
                break;
            case 2:
                System.out.println("\n--- Nova Tarefa ---");
                presenter.criarTarefa();
                break;
            case 3:
                selecionarTarefa();
                presenter.marcarComoConcluida();
                break;
            case 4:
                selecionarTarefa();
                presenter.excluirTarefa();
                break;
            case 0:
                System.out.println("Saindo...");
                System.exit(0);
                break;
            default:
                System.out.println("Opção inválida!");
        }
        
        exibirMenu(); // Loop do menu
    }
    
    private void selecionarTarefa() {
        presenter.carregarTarefas();
        System.out.print("\nDigite o ID da tarefa: ");
        tarefaSelecionada = scanner.nextLong();
        scanner.nextLine(); // Consumir quebra de linha
    }
    
    @Override
    public void exibirTarefas(List<Tarefa> tarefas) {
        System.out.println("\n--- Tarefas ---");
        if (tarefas.isEmpty()) {
            System.out.println("Nenhuma tarefa encontrada.");
            return;
        }
        
        for (Tarefa tarefa : tarefas) {
            System.out.println(
                tarefa.getId() + ". " +
                (tarefa.isConcluida() ? "[✓] " : "[ ] ") +
                tarefa.getTitulo() +
                (tarefa.getPrazo() != null ? " (Prazo: " + tarefa.getPrazo() + ")" : "")
            );
        }
    }
    
    // Outras implementações...
}
        </code></pre>
        
        <p>
          Estes exemplos demonstram técnicas avançadas de abstração:
        </p>
        <ul>
          <li>Arquitetura em camadas para separar preocupações (dados, lógica de negócio, apresentação)</li>
          <li>Uso de interfaces para definir contratos e permitir múltiplas implementações</li>
          <li>Event-driven design para desacoplar componentes e permitir extensibilidade</li>
          <li>Padrão MVP para separar lógica de negócio da interface com o usuário</li>
          <li>Injeção de dependências para reduzir acoplamento entre componentes</li>
        </ul>
      `
    }
  ]
};

// Exportar os dados para uso no script principal
window.siteData = {
  intro: introData,
  conceitos: conceitosData,
  pilares: pilaresData,
  modals: modalsData
};