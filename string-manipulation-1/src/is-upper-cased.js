/* exported isUpperCased */
function isUpperCased(string) {
  var answer = true;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      answer = false;
    }
  }
  return answer;
}
