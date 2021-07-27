/* exported numVowels */
function numVowels(string) {
  var numberOfVowels = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === 'I' || string[i].toUpperCase() === 'E' || string[i].toUpperCase() === 'A' || string[i].toUpperCase() === 'O' || string[i].toUpperCase() === 'U') {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
}
