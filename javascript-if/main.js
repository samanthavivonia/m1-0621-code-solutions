/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  var remainder;
  if (number % 2 !== 0) {
    remainder = false;
  } else {
    remainder = true;
  }
  return remainder;
}

function startsWithJ(string) {
  var isJ;
  if (string[0] === 'J') {
    isJ = true;
  } else {
    isJ = false;
  }
  return isJ;
}

function isOldEnoughToDrink(person) {
  var over21;
  if (person.age >= 21) {
    over21 = true;
  } else {
    over21 = false;
  }
  return over21;
}

function isOldEnoughToDrive(person) {
  var over21;
  if (person.age >= 16) {
    over21 = true;
  } else {
    over21 = false;
  }
  return over21;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  var acidity;
  if (pH === '7') {
    acidity = 'neutral';
  } else if ((pH < 7) && (pH > 0)) {
    acidity = 'acid';
  } else if ((pH > 7) && (pH < 14)) {
    acidity = 'base';
  } else {
    acidity = 'invalid pH level';
  }
  return acidity;
}

function introduceWarnerBro(name) {
  var greeting;
  if (name === 'yakko') {
    greeting = 'We\'re the warner brothers!';
  } else if (name === 'wakko') {
    greeting = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    greeting = 'I\'m cute~';
  } else {
    greeting = 'Goodnight everybody!';
  }
  return greeting;
}
