<p align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://user-images.githubusercontent.com/39415174/83923322-5f890f80-a758-11ea-88fa-9df8c50630b9.png" width="200px" />
</p>

# Projeto Ecoleta
![capa](https://user-images.githubusercontent.com/39415174/83946739-0fa65900-a7e9-11ea-9433-219ec85b1ed1.jpg)
Projeto desenvolvido durante a [NextLevelWeek](https://nextlevelweek.com/) ([Rocketseat](https://rocketseat.com.br)) para aplicar conceitos de `Typescript`, `Node.js`, `ReactJS` e `React Native`.

O projeto consiste em uma aplicação teste desenvolvida nos ambientes de backend, frontend e mobile, homenageando a semana internacional do meio ambiente, criando um cenário virtual envolvendo a logística de coleta de diversos itens, como resíduos eletrônicos de diversos gêneros, materiais recicláveis, materiais orgânicos, e resíduos no geral.
  
  [Começando](#começando)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Instalação](#instalação)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Execução](#execução)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Tecnologias](#tecnologias)&nbsp;&nbsp;|&nbsp;&nbsp;

## Começando
É possível replicar a aplicação desenvolvida por meio do conjuntos de instruções detalhadamente fornecidos abaixo.

### Pré Requisitos

* `Git` - Computador (para clonar efetivamente o repositório)
* `Node.js` - Computador 
* `expo`- Mobile (Emulador ou Dispositivo)

## Instalação

O processo é inicializado com a clonagem do repositório da aplicação através dos seguintes comandos:

```bash
git clone https://github.com/luisfmnunes/NextLevelWeek.git
cd NextLevelWeek
```

### Preparação do Backend
Instalando as dependências do backend da aplicação:

```bash
cd server
npm install
```
Em seguida, devem ser configuradas as migrations do banco de dados e o seed do mesmo com os seguintes comandos:

```bash
npm run knex:migrate
npm run knex:seed
```

### Preparação do Frontend

Instalando as dependências do frontend da aplicação:

```bash
cd ../web
npm install
```


### Preparação do Mobile

Instalando as dependências da aplicação mobile:

```bash
cd ../mobile
npm install
```


## Execução
As aplicações podem ser facilmente inicializadas para teste e desenvolvimento seguindo as instruções a seguir:

### Backend
A primeira parte que deve ser executada no ambiente de desenvolvimento é o servidor `node.js`, desenvolvido por meio da biblioteca express (certifique-se de realizar as migrations do banco de dados, desenvolvidas em knex, antes de dar prosseguimento.)

```bash
npm run dev
```

### Frontend
Este é o site desenvolvido com `ReactJS` onde os pontos de coleta são cadastrados. O backend deve encontrar-se operacional para o devido armazenamento e consulta dos dados e informações da página. Para inicializar, basta executar o comando abaixo, inicializando automaticamente a página web com atualização em tempo real das alterações efetuadas no código:

```bash
npm start
```
### Mobile
Nesta parte você irá inicializar a aplicação mobile, desenvolvida com `React Native` onde os pontos de coleta podem ser consultados por cidade. novamente o backend deve encontrar-se operacional para o devido funcionamento.

```bash
npm start
```
Após o projeto mobile inicializar, será exibido um `QRCode` no terminal e uma aba dos eu navegador irá carregar o `Metro Bundler`. É necessária a instalação do aplicativo `expo` para executar a aplicação em seu ambiente Mobile (Dispositivo ou Emulador).

Ele está disponível nas APP Stores:

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) na Google Play
- [Expo Client](https://apps.apple.com/br/app/expo-client/id982107779) na Apple Store

O aplicativo pode ser inicializado de diversas maneiras com o `expo`, como através do escaneamento do `QRCode` gerado (como explicado [aqui](https://docs.expo.io/get-started/create-a-new-app/)), por meio de conexão USB do dispositivo móvel com o computador, e até mesmo por endereçamento web (IP via LAN ou link geral pela função Tunnel).

## Tecnologias

* [Node.js](https://nodejs.org/) - Usado para construir o backend (webservice REST) do projeto
* [express](https://expressjs.com/) - Framework Web utilizado no backend
* [knex.js](http://knexjs.org/) - Usado no backend para auxiliar no gerenciamento e versionamento do banco de dados
* [sqlite3](https://www.sqlite.org/) - Banco de dados utilisado no backend para peristência dos dados
* [React](https://reactjs.org/) - Usado para construir o frontend (website)
* [React Native](https://reactnative.dev/) - Usado para construir a aplicação Mobile nativa (Android e iOS)
* [expo](https://expo.io/) - Usado para facilitar o desenvolvimento com `React Native`
* [typescript](https://www.typescriptlang.org/) - Usado para auxiliar na integridade do código e no ambiente de desenvolvimento.

A lista completa de tecnologias utilizadas no projeto encontram-se no arquivo `package.json`, presentes dentro da pasta de cada parte da aplicação.

