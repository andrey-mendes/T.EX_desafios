# T.EX_desafios
Repositório destinado aos desafios do curso FullStack Javascript da escola T.EX

## Desafio 1
> Criar uma versão da página Sobre, utilizando a tecnologia CSS

- Aplicar Responsividade mínima para mobile retrato
- Cabeçalho e Rodapé pode ser idênticos ao projeto
- Use sua criatividade
- O exercício é individual
- Após concluído, faça os commits no gitHub Pessoal de cada aluno
- Postar no Discord a URLdo repositório assim que concluído

---
## Desafio 2
>**Interface**

- Um elemento DIV de id ‘boxMensagem’
- Um elemento BUTTON de id ‘btnMensagem’

**Programa**

- Criar um ARRAY bidimensional com 10 posições
- Preencher o ARRAY com STRNGS que representem nomes e descrições de países
- O evento CLICK do elemento BUTTON deve executar as seguintes ações:
  - Sortear um valor aleatório obtido do ARRAY paises
  - Acumular a quantidade de vezes que cada respectivo nome se repete
  - Imprimir na DIV ‘boxMensagem’:
    -  O nome do país sorteado
    -  A descrição
    - A quantidade de vezes que foi exibido

---
## Desafio 3
O jogo consiste em duas telas TelaInicial e TelaJogo

>TelaInicial
1. imagens estáticas
2. campo texto id : nome
3. button id : btnJogar

```
<div id="telaInicial" class="init">
    <div class="d-flex">
        <img src="./images/question.png" alt="question">
        <img src="./images/question.png" alt="question">
        <img src="./images/question.png" alt="question">
    </div>
    <div class="mt-5">
        <input type="text" id="nome" placeholder="Digite seu nome aqui :)">
        <button id="btnJogar" class="pointer">I N I C I A R</button>
    </div>
</div>
```

>Programa

usuário insere o nome de jogador no campo nome
btnJogar.click : nome é armazenado em localStorage e recuperado na TelaJogo

### Tela Jogo

1. span id: pontuacao
2. span id : anterior
3. div id : numbers
4. button id : btnPlay

```
<div id="telaJogo" class="init hide">
  <div class="d-flex pontos">
    <p>Pontos: <span id="pontuacao">0</span></p>
    <p>Resultado Anterior: <span id="anterior">1 1 1</span></p>
  </div>
  <div id="numbers" class="d-flex">
    <img src="./images/question.png" alt="question1">
    <img src="./images/question.png" alt="question2">
    <img src="./images/question.png" alt="question3">
  </div>
  <button id="btnPlay">J O G A R</button>
</div>
```

## Programa

1. btnPlay:
   1. executa uma função que sorteia três números aleatórios entre 1 e 3
   2. armazena a sequencia dos números obtidos dentro de um array
   3. atribui a sequencia dos números obtidos a uma variável destinada a armazenar a última sequencia obtida
   4. imprime em tela a sequencia anterior (span anterior)
2. imagens das interrogações
   1. click: substitui a imagem por outra que representa o número sorteado

## Validação do Jogo

Após o click da última imagem que revela seu específico número, o sistema verifica:

1. Se os números do array  são iguais (111, 222 ou 333)
   1. Se sim:
      1. acumular um na variável ponto e imprimir em tela (span pontuacao
2. Se a sequencia de números do último sorteio é igual a sequencia do sorteio atual
   1. Se sim:
      1. acumular um na variável ponto e imprimir em tela (span pontuacao
3. Limitar o jogo em 10 tentativas para alcançar 3 pontos.
4. Se limite excedido e pontos == 3: exibir a imagem do troféu
5. Se limite excedido e pontos <3 : exibir a imagem Looser


_Mostrar imagem de vitória ou derrota usando modal._

---