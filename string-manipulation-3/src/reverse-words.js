/* exported reverseWords */
function reverseWords(string) {
  var wordArray = string.split(' ');
  for (var i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i].split('');
    wordArray[i] = wordArray[i].reverse();
    wordArray[i] = wordArray[i].join('');
  }
  wordArray = wordArray.join(' ');
  return wordArray;
}
