/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixWords = [];
  for (var i = 0; i < words.length; i++) {
    suffixWords.push(words[i] + suffix);
  }
  return suffixWords;
}
