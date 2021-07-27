/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringToArray = string.split(' ');
  var properlyCasedArray = [];
  for (var i = 0; i < stringToArray.length; i++) {
    properlyCasedArray.push(stringToArray[i][0].toUpperCase() + stringToArray[i].slice(1).toLowerCase());
  }
  var properlyCasedString = properlyCasedArray.join(' ');
  return properlyCasedString;
}
