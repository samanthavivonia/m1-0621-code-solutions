/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 9) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  return numbers;
}

console.log('getNumbersToTen: ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 18) {
    currentNumber += 2;
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty: ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += (word + ' ');
    count++;
  }
  return repeated;
}

console.log('repeatWord: ', repeatWord('tomato', 3));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('tomato');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

var testNumbers = [1, 2, 3];
console.log('doubleAll: ', doubleAll(testNumbers));

function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}

function getValues(object) {
  var keys = [];
  for (var i in object) {
    keys.push(object[i]);
  }
  return keys;
}

var person = {
  firstName: 'Jo',
  lastName: 'Anna',
  company: 'SCA'
};

console.log('getKeys: ', getKeys(person));
console.log('getValues: ', getValues(person));
