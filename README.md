<p align="center">
   <img src=".github/logo.svg"/>
</p>

# Happy

> Projeto desenvolvido durante a nlw 3.0

## :construction_worker: Instalação

**Você vai precisar ter o [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) instalados no seu computador. Feito isso, você pode clonar o projeto via HTTPS, rodando este comando:** 

```
git clone https://github.com/cunhaedu/happy.git
```

## :computer: Sobre o Projeto

O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional com o propósito fazer o dia de muitas crianças mais feliz.

<p align="center">
   <img src=".github/happy.svg"/>
</p>


## :layout: Layout

Nos links abaixo você encontra o layout do projeto web e também do mobile. No entanto, é necessário ter uma conta no [Figma](http://figma.com/) para acessá-lo.

* [Layout Web](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web)
* [Layout Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile)

## :rocket: Desafios

Ao final do evento, a Rocketseat disponibilizou alguns desafios para levar este app para o próximo nível, e você pode conferir esses desafios [aqui](https://www.notion.so/Vers-o-2-0-do-Happy-c754db7a4d41469e8c2d00fcf75392c4). Até agora eu consegui implementar a funcionalidade de localização real do usuário e adicionei também a possibilidade de contanto por whatsapp, mas pretendo ao decorrer das próximas semanas cumprir todos os outros desafios.

## :runner: Como usar

### Backend

```
# Clone este repositório
$ git clone https://github.com/cunhaedu/happy.git

# Entre na pasta backend
$ cd backend

# Instale as dependências
$ yarn install

#crie um arquivo chamado database.sqlite no seguinte diretório
$ backend/src/database

# Rode o seguinte comando
$ yarn typeorm

# Execute as migrations
$ yarn typeorm migrate:run

# Inicie o servidor
$ yarn dev

# Com isso, a aplicação deverá rodar na porta 3333
```

### Web

```
# Entre na pasta web
$ cd web

# Instale as dependências
$ yarn install

# Execute o comando 
$ yarn start

# Com isso a versão web estará rodando na porta 3000
```

### Mobile

```
# Entre na pasta mobile
$ cd mobile

# Instale as dependências
$ yarn install

# Rode 
$ yarn start

# Feito isso, o Expo vai abrir na porta 19000
# Escaneie o código QR através do aplicativo expo no celular
```

## :rocket:  Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

* [Node.js](https://nodejs.org/en/download/)

* [React](https://pt-br.reactjs.org/)

* [ReactNative](https://reactnative.dev/)

* [Expo](https://expo.io/)

*[Typescript](https://www.typescriptlang.org/)

## :postbox: Faq


**Questão:** O que fazer caso tenha problemas com as fontes no mobile?

**Resposta:** Tente executar o seguinte comando:

```
$ expo install expo-font @expo-google-fonts/Nunito
```

## :closed_book: Licença

Released in 2020.

Este projeto está sobre a [Licença MIT](https://github.com/cunhaedu/nlw/tree/master/LICENSE).

Feito por [Eduardo Assunção](https://github.com/cunhaedu)
