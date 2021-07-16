function convertMinutesToSeconds(minutes) {
  var conversion = minutes * 60;
  return conversion;
}

console.log('Convert 5 Minutes to Seconds: ', convertMinutesToSeconds(5));

function greet(name) {
  var makeGreeting = '"Hey, ' + name + '"';
  return makeGreeting;
}

console.log('Greet Beavis: ', greet('Beavis'));

function getArea(width, height) {
  var areaCalc = width * height;
  return areaCalc;
}

console.log('Area of 17 and 42: ', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('First Name of Person: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log('Get Last Element of Array: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
