/* exported reverseWord */
function reverseWord(word) {
  var reverseWordArray = [];
  for (var i = word.length; i >= 0; i--) {
    reverseWordArray.push(word[i]);
  }
  return reverseWordArray.join('');
}
