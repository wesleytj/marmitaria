# Proposta do projeto
 Essa aplicação tem uma proposta bem simples, que é criar um controle de marmitas. Onde estaremos praticando os primeiros passos de uma aplicação em Angular.
 Então, essa aplicação terá no primeiro momento, dois componentes principais, que serão as Marmitas e um Estoque, teremos uma lista de alimentos quem compoem as Marmitas e em      algum momento, teremos que comprar esses alimentos (igredientes).
 Então, como mencionado, o ponto o principal, é a vivência prática da criação de um projeto, como criar uma aplicação, um software e/ou uma página web.

# Planejamento do projeto
 Funcionalidades: <br>
  --> Estoque de alimentos; <br>
  --> Marmitas; <br>
  
 Componentes (components): <br>
  --> Root; <br>
  --> Cabeçalho (header); <br>
  --> Lista de Alimentos; <br>
  --> Edição da lista de alimentos; <br>
  --> Lista de Marmitas; <br>
  --> Edição de itens da Marmita; <br>
  --> Detalhes da Marmita; <br>
  
 Modelo (models): <br>
  --> Alimento; <br>
  --> Marmita; <br>
  
  ```
  • Root
    • Cabeçalho 
      • Estoque de Alimentos 
        • Lista de alimentos 
        • Edição da lista de alimentos 
        • Alimento
      • Marmitas
        • Lista de marmitas 
        • Edição item da marmita 
        • Detalhe da marmita 
        • Marmita
  ```
  
 # Configurando APP
  * Vamos iniciar criando nossa aplicação, via terminal `ng new Marmitaria`. <br>
  * `? Would you like to add Angular routing? (y/N)` responderemos `n`. <br>
  * `? Which stylescheet format would you like to use?` aqui você pode utilizar a que mais te agradar, mas vamos selecionar `SCSS` por costume. <br>
  * Após a criação do projeto, vamos entrar na pasta dele `cd Marmitaria` e vamos abrir com VSCode `code .` (você pode abrir com o editor da sua preferência).
  * Para termos uma experiencia clean de um projeto zerado, vamos apagar todo conteúdo padrão dentro de `app.component.html` <br>
    ```
    • Marmitaria
      • src
        • app
          • app.component.html
    ```
    Podemos também, apagar o conteúdo `title = 'Marmitaria';` dentro do typescript `app.component.ts` <br>
  * Para não perdermos muito tempo com estilização, vamos criar nossos primeiros conteúdos, utilizando Bootstrap. Então, no terminal, podemos digitar `npm install bootstrap` . Após a instalação do Bootstrap, precisamos fazer referência a ele dentro do arquivo `angular.json`, então na parte de estilos (styles) acrescentamos o caminho do Bootstrap dentro do nosso projeto: <br><br>
    `"node_modules/bootstrap/dist/css/bootstrap.min.css",`. <br><br>
    ``` json
    "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
    ```
  * E agora, podemos rodar o projeto pra testar se está tudo certo. Ainda no terminal, vamos digitar o comando `ng serve`. <br>
    No primeiro momento nosso projeto vai abrir em branco, pois apagamos os conteúdos padrões anteriormente dentro do `app.component.html`, mas vamos criar alguma coisa pra testar inclusive nosso Bootstrap. <br>
    Ainda dentro do `app.component.html`, vamos colocar o seguinte comando <br>
    ``` html
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Funciona!</h1>
        </div>
      </div>
    </div>
    ```
