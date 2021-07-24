/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === false) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
