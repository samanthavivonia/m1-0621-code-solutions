/* exported findIndex */
function findIndex(array, value) {
  var itsHere = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      itsHere = i;
      break;
    }
  }
  return itsHere;
}
