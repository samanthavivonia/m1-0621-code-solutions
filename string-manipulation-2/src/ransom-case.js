/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0 || i === 0) {
      newString += string[i].toLowerCase();
    } if (i % 2 !== 0) {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
