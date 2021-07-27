/* exported includes */
function includes(array, value) {
  var answer = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      answer = true;
      break;
    }
  }
  return answer;
}
