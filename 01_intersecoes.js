/*
Entrada: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Saída: 1,4,13

Entrada: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Saída: 1,9,10
*/

function stringsToNumbers(inputArray) {
  // variavel contera o array de numeros obtidos a partir do array de entrada
  const arrayOfNumbers = []; 
  
  // convertendo cada string numerica do array de entrada para seu valor numerico na base 10, e armazenando no array final que sera retornado:
  for (let i = 0; i < inputArray.length; i++) {
    arrayOfNumbers.push(parseInt(inputArray[i]));
  }

  return arrayOfNumbers;
}

function searchRepeated(stringList) {
  /*
    Admitindo que nenhum elemento do array de entrada seja uma string vazia,
    e que nos elementos do array cada numero esteja separado por "," (virgula) 
    ou ", " (virgula seguida de espaco), a funcao string.split() eh
    usada para transformar a string do elemento num array de 'strings numericas'.
  */
  const numericStrings0 = stringList[0].split(",");
  const numericStrings1 = stringList[1].split(",");

  // Convertendo arrays de strings em arrays de numeros, com a funcao declarada mais acima no codigo:
  const numbersList0 = stringsToNumbers(numericStrings0);
  const numbersList1 = stringsToNumbers(numericStrings1);

  /*
    Com os arrays de numeros obtidos optei por usar uma tabela hash simples
    para verificar os numeros que constassem em ambos os arrays.
    A tabela hash facilita obter a intersecao mesmo que originalmente os numeros
    nao viessem ordenados como foi dito no enunciado.
  */

  const hashTable = {}; // tabela hash contera todos os numeros do primeiro array como chave, e estas chaves terao valor booleano 'true'
  
  const outputArray = []; // array contera o resultado final (intersecao dos numeros)
  
  // populando a hash table com todos os numeros do primeiro array:
  for (let i = 0; i < numbersList0.length; i++) {
    let actualNumber = numbersList0[i]; // numero 'atual' do array, visto na iteracao
    if (!hashTable[actualNumber]) {
      hashTable[actualNumber] = true; //adiciona o numero na tabela caso ainda nao esteja
    }
  }

  /*
    percorre segundo array, procura na tabela hash se o numero 'atual'
    na iteracao ja existe. Se existe entao o numero eh repetido e pode ser
    adicionado ao array que contem o resultado final
  */
  for (let j = 0; j < numbersList1.length; j++) {
    let actualNumber = numbersList1[j];
    if (hashTable[actualNumber]) {  //verifica se numero atual ja esta na tabela
      outputArray.push(actualNumber); //numero repetido vai para array de saida
    }    
  }

  return outputArray;
}


const inputA = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
console.log("Saida A: ", searchRepeated(inputA));

const inputB = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
console.log("Saida B: ", searchRepeated(inputB));

const inputC = ["-3, -2, 0, 5, 8, 11", "-3, -1, 0, 3, 4, 5, 6, 7, 9, 11, 15"];
console.log("Saida C: ", searchRepeated(inputC));
