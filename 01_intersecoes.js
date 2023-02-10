/*
Entrada: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Saída: 1,4,13

Entrada: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Saída: 1,9,10
*/

function stringToList(inputString) {
  /*
    Admitindo que na string de entrada desta funcao
    cada numero esteja separado por "," (virgula)
    ou ", " (virgula seguida de espaco),
    a funcao string.split() eh usada para transformar
    a string de entrada num array em que cada elemento
    eh uma 'string numerica'.

    O array contendo as 'strings numericas' eh retornado
    diretamente por esta funcao:
  */
  const arrayOfStrings = inputString.split(",");
  return arrayOfStrings;
}

function stringsToNumbers(inputArray) {
  /*
    variavel que contera o array de numeros obtidos
    a partir do array de 'strings numericas':
  */
  const arrayOfNumbers = [];
  
  /*
  optei por nao usar higher order functions,
  mas poderia ser usado p.ex. map para converter
  cada elemento do array de strings numericas, no lugar
  do loop for puro
  */
  for (let i = 0; i < inputArray.length; i++) {
    arrayOfNumbers.push(parseInt(inputArray[i]));
  }

  return arrayOfNumbers;
}

function searchRepeated(firstArray, secondArray) {
  const hashTable = {};
  const outputArray = [];

  // numeros ja sao ordenados (enunciado), facilita usar hash

  // hash tbm eh usado pq funciona mesmo que tamanhos dos arrays seja diferente

  /*
    hash melhor tbm pois usando no lugar de p.ex. for's
    aninhados, reduz complex. tempo de O(n^2) para
    O(2n) = O(n). caso entrada fosse muito grande a
    diferenca seria notada logo
  */

  for (let i = 0; i < firstArray.length; i++) {
    let element1 = firstArray[i];
    if (!hashTable[element1]) {
      hashTable[element1] = true;
    }
    /*
      tabela hash contera todos os numeros do 1o array
      como chave, e valor 'true'
    */
  }

  for (let j = 0; j < secondArray.length; j++) {
    let element2 = secondArray[j];
    if (hashTable[element2]) {
      outputArray.push(element2);
    }
    else {
      continue;
    }
    /*
      procura se na tabela hash o elemento atual
      do segundo array ja existe (chave sera o numero,
      valor true), se existe entao o numero eh repetido
      e pode ser adicionado no array final
    */
  }

  return outputArray;
}





const input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
console.log("entrada0 pura: ", input[0]);
console.log("entrada1 pura: ", input[1]);

const arrayStringsNumeros0 = stringToList(input[0]);
const arrayStringsNumeros1 = stringToList(input[1]);
console.log("saida array strings0: ", arrayStringsNumeros0);
console.log("saida array strings1: ", arrayStringsNumeros1);

const arrayNumeros0 = stringsToNumbers(arrayStringsNumeros0);
const arrayNumeros1 = stringsToNumbers(arrayStringsNumeros1);
console.log("saida array numeros0: ", arrayNumeros0);
console.log("saida array numeros1: ", arrayNumeros1);

const arrayRepetidos = searchRepeated(arrayNumeros0, arrayNumeros1);
console.log("resultado final repetidos: ", arrayRepetidos);


// inputB = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
const inputA = [1, 3, 9, 10, 17, 18];
const inputB = [1, 4, 9, 10];
console.log("tamanhos diferentes: ");
console.log("A: ", inputA);
console.log("B: ", inputB);
console.log("resultado tam dif: ", searchRepeated(inputA, inputB));