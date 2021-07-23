/* exported isLowerCased */
function isLowerCased(string) {
  var answer = true;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '-') {
      continue;
    }
    if (string[i] === string[i].toUpperCase()) {
      answer = false;
      break;
    }
  }
  return answer;
}
