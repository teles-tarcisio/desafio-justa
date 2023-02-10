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
  console.log("entrada pura: ", inputString);
  
  /*
    replace com regex para remover todos os numeros:
    /\d/g --> somente digitos
    /[^\d]/g --> tudo exceto digitos
  */

  const stringWithoutNumbers = inputString.replace(/\d/g, "");
  console.log("sem numeros: ", stringWithoutNumbers);


  const stringToArray = stringWithoutNumbers.split(" ");
  console.log("array: ", stringToArray);

  let longestWord = stringToArray[0];
  
  for (let i = 1; i < stringToArray.length; i++) {
    if (stringToArray[i].length > longestWord.length) {
      longestWord = stringToArray[i];
    }
  }

  return longestWord;
}

const teste0 = "Hello world123 567 pont u ação !?[{ ;:^% $*-+ 123world456";

const teste1 = "Justa é a fintech que mais cresce no Brasil";

const teste2 = "Justino é o mascote da Justa";

console.log(findLongestWord(teste0));
console.log(findLongestWord(teste1));
console.log(findLongestWord(teste2));