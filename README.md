# registro-de-dieta

Este projeto tem o objetivo de construir uma aplicação web simples utilizando o FrameWork Angular, este projeto foi desenvolvido no contexto da disciplina de FrameWorks Web do curso de pos Graduação em Tecnologia Java da UTFPR.
O objetivo da aplicação é permitir ao usuario registrar as refeições diárias, incluindo descrição, quantidade e alimentos consumidos. O usuário podera cadastrar os alimentos consumidos em cada uma das refeicoes principais, onde serão exibidas as informações nutricionais como carboidratos, proteínas e gorduras. A aplicação calcula a ingestão calórica por refeição e a necessidade calórica do usuário.

# Protótipo das telas

https://www.figma.com/file/vz1zpg18FFt2cU7hjemV9f/Registro-de-Dieta?type=design&node-id=0-1&mode=design

# Endereço de Deploy - GitHub Pages

https://edson-vieira19.github.io/fw-registro-de-dieta

# Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [X] Utilizar componentes de um framework CSS, como Bootstrap, Materialize ou outro à sua escolha.
- [X] Apresentar as telas com layout responsivo, adaptando-se a diferentes tamanhos de tela, usando um framework CSS ou implementações personalizadas.
- [X] Desenvolver o layout da aplicação com componentes, tornando o cabeçalho e o rodapé componentes reutilizáveis.
- [X] Aplicar pelo menos dois tipos de data-binding, como Interpolation, Property Binding, Event Binding, Two-Way Data Binding.
- [X] Empregar variáveis de template e a anotação ViewChild para interagir com elementos do DOM ou componentes diretamente no template ou no código TypeScript do aplicativo
- [X] Mapear os componentes às rotas no módulo de rotas, criando uma estrutura de navegação eficiente.
- [X] Permitir a navegação fluida entre as diferentes páginas do aplicativo por meio de links e botões de navegação
- [X] Utilizar o armazenamento local (LocalStorage ou SessionStorage) para armazenar dados temporários, quando necessário.</br>
- [X] Validar os campos do formulário com expressões regulares (REGEX) e apresentar as mensagens de erro.
- [X] Implementar máscaras em campos de formulário, quando necessário, para melhorar a experiência do usuário ao inserir dados.
- [X] Desabilitar o botão de envio (submit) enquanto o formulário estiver em um estado inválido.
- [X] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Promises.
- [X] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Observables.
- [X] Criar o cadastro completo de uma entidade, incluindo operações de criação, leitura, atualização e exclusão (CRUD) utilizando uma API, como o JSON Server.
- [X] Aplicar a diretiva estrutural ngFor para apresentar uma lista dinâmica de dados em seu aplicativo.
- [X] Utilizar a diretiva ngIf para controlar a exibição ou ocultação de elementos com base em condições específicas
- [X] Formatar a apresentação de dados com Pipes, de acordo com os requisitos do aplicativo.
- [X] Executar o processo de build da aplicação e realizar o deploy para tornar o aplicativo acessível online.
- [ ] Estabelecer a passagem de dados entre componentes por meio da hierarquia de componentes, empregando as anotações @Input e @Output.



# Manual de Execução
* Clonar o repositório com git clone
* Abrir o projeto no editor Visual Studio Code (VS Code)
* Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto
* Instalar as dependências contidas no package.json Comando: npm i
* executar o json server json-server --watch db.json
* Abrir um novo terminal pelo VSCode e então executar o projeto Angular Comando: ng serve -o



