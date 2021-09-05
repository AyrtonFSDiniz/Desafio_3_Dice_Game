/*Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e
tenham resultados aleatórios.


O programa tem que:

• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
• Perguntar quantos jogadores vão jogar; (1,5 pontos)
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
• Guarda todos os objetos em uma lista; (2,0 pontos)
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos)
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos)
*/

const prompt = require('prompt-sync')();


console.log("############### DICE GAME ###############");
console.log();

let rodadas = +prompt ("Quantas rodadas pretende jogar? ");     // entrada de rodadas
console.log();


let njogadores = +prompt ("Quantos jogadores irão jogar? ");    // entrada de quantidade de jogadores


var lista = [];                                                 // lista que ira ter todos os resultados de todas as rodadas


for (i = 0; i < njogadores; i++) {                             // laço para guardar o nome de cada jogador conforme quantidade deles

  var v1 = {};                                                 // objeto para armazenar nome e valor do dado jogado
  var players = prompt ("Qual se nome? ");                     // entrada do nome de cada jogador via laço For

  function escolha(min, max) {                                  // função para gerar numero aleatorio de 1 a 6 - faces do dado
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var dado = (escolha(1, 6));


  for (x = 0; x < rodadas; x++) {                               // laço para controlar rodadas

    
  
    v1.nome = players;                                          // armazenando nome do jogador no dicionario
    v1.ndado = dado;                                            // armazenando valor do dado do jogador no dicionario


    lista.push(v1);                                             // armazenando dicionario na lista


lista.sort((a,b) => a.ndado- b.ndado).reverse();                // ordenando vencedor da rodada
console.log(lista);                                             // console.log para verificação
  }
 }

/* Faltou contabilizar o ganhador de cada rodada e declarar o campeão da soma das rodadas.  Alem disso, tem um bug no fato de o programa
repetir a jogada do mesmo jogador o numero de vezes de rodadas selecionadas e não fazer que cada jogador tenha sua vez antes da proxima rodada*/