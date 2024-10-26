# Dungeon Generator

Este projeto é um gerador de calabouços que cria uma grade de salas de forma procedural. O objetivo é criar um layout de calabouço que pode ser usado em jogos.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
  - [Exemplos de Execução](#exemplos-de-execução)
  - [Principais Funcionalidades](#principais-funcionalidades)

## Instalação

Para instalar e configurar o sistema, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/ShinigameBR/web-procedural-dungeon-generator.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd web-procedural-dungeon-generator/src
   ```

## Configuração

O sistema não requer configuração adicional para ser executado. No entanto, você pode ajustar as seguintes variáveis no código para personalizar o gerador de calabouços:

- `tileWidth`: Define a largura de cada célula em pixels.
- `rows`: Define o número de linhas na grade do calabouço.
- `cols`: Define o número de colunas na grade do calabouço.
- `roomCount`: Define o número de salas a serem geradas.

Essas variáveis podem ser ajustadas na função `initializeDungeon` no arquivo main.js.

## Uso

O projeto é uma aplicação web, portanto, você pode abrir o arquivo `index.html` diretamente em um navegador de sua escolha.Após abrir o arquivo index.html, o calabouço será gerado automaticamente. Você verá uma grade com salas representadas visualmente.

### Exemplos de Execução

- Você pode clicar no botão "Gerar Nova Dungeon" para recarregar a página e gerar um novo calabouço.
- Além disso, você pode clicar com o botão direito do mouse sobre o calabouço e salvá-lo como uma imagem.

### Principais Funcionalidades

- `Geração de Grade`: A classe Grid gera uma grade de células.
- `Criação de Salas`: Salas são geradas de forma procedural e posicionadas na grade.
- `Desenho de Salas` e Células: As salas e células são desenhadas no canvas usando a classe Cell e Room.
- `Conexão de Salas`: O gerador conecta as salas com corredores para criar um layout de calabouço interconectado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir para dar sua opinião.
