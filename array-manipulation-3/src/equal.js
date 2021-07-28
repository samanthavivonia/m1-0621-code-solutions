/* exported equal */
function equal(first, second) {
  var result = true;
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      result = false;
      break;
    }
  }
  for (i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      result = false;
      break;
    }
  }
  return result;
}
