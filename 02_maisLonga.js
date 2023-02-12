/*
Entrada: "Hello world123 567"
Saída: Hello

Entrada: "Justa é a fintech que mais cresce no Brasil"
Saída: fintech

Entrada: "Justino é o mascote da Justa"
Saída: Justino

As palavras também podem conter números, mas somente as letras serão consideradas no tamanho da palavra!!!

Ignore as pontuações e a situação em que a String será vazia!!!
*/

function findLongestWord(inputString) {
  /*
    Para tratar a string de entrada, uso um replace com expressao regular para
    capturar todos os numeros da string de entrada e substitui-los por
    caractere vazio "" :
  */
  const stringWithoutNumbers = inputString.replace(/\d/g, "");
    
  /*
    A seguir, a nova string que nao contem os numeros eh convertida para
    um array de strings, admitindo que as palavras estejam separadas por
    espaco em branco " ", ja que o enunciado permite ignorar pontuacoes:
  */
  const wordsArray = stringWithoutNumbers.split(" ");
      
  /*
    Inicialmente defino que a primeira palavra obtida (que aqui eh
    o primeiro elemento do array construido), eh a mais longa:
  */
  let longestWord = wordsArray[0];
  
  /*
    Iterando pelo array a partir do 2o elemento (2a palavra), caso a palavra
    conferida atualmente seja mais longa que a 'mais longa anteriormente',
    a variavel longestWord eh atualizada com a 'nova palavra mais longa':
  */
  for (let i = 1; i < wordsArray.length; i++) {
    let actualWord = wordsArray[i];
    if (actualWord.length > longestWord.length) {
      longestWord = actualWord;
    }
  }

  return longestWord;
}

const test0 = "Hello world123 567";

const test1 = "Justa é a fintech que mais cresce no Brasil";

const test2 = "Justino é o mascote da Justa";

const test3 = "0012Hello world123 567 acên tüàção !?[{/| ;.^% 1234world5678";

console.log("Entrada: ", test0);
console.log("Saida: ", findLongestWord(test0));

console.log("Entrada: ", test1);
console.log("Saida: ", findLongestWord(test1));

console.log("Entrada: ", test2);
console.log("Saida: ", findLongestWord(test2));

console.log("Entrada: ", test3);
console.log("Saida: ", findLongestWord(test3));