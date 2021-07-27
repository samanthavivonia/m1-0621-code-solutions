/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i !== firstIndex && i !== secondIndex) {
      newString += string[i];
    } if (i === firstIndex) {
      newString += string[secondIndex];
    } if (i === secondIndex) {
      newString += string[firstIndex];
    }
  }
  return newString;
}
