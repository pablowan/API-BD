--------------------------------------
SEQUENCIA PARA CRIAR O PROJETO
--------------------------------------
Criar o arquivo package
npm init

//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
npm install -D nodemon
ou esssa forma alternativa:
npm install -g nodemon (caso aja algum erro na isntalação)
//Rodar o projeto usando o nodemon 
nodemon servidor.js
//Primeiro baixe o software do MongoDB marcando a opção "mongocompass" os testes com banco de dados serão realizados através dele
//Instalar o MongoDB no projeto
npm install --save mongodb

//Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
npm install --save mongoose

--------------------------------------
COMO RODAR O PROJETO
--------------------------------------

//Instalar todas as dependencias indicada pelo package.json
npm install

//Rodar o projeto usando o nodemon 
nodemon servidor.js
//Use o insomnia para testar as requisições e interagir com o banco
