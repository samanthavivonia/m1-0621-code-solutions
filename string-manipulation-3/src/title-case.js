/* exported titleCase */
function shouldBeSmol(string) {
  return (
    string.toLowerCase() === 'a' ||
    string.toLowerCase() === 'an' ||
    string.toLowerCase() === 'in' ||
    string.toLowerCase() === 'for' ||
    string.toLowerCase() === 'of' ||
    string.toLowerCase() === 'the' ||
    string.toLowerCase() === 'to' ||
    string.toLowerCase() === 'for');
}

function titleCase(title) {
  var wordArray = title.split(' ');
  var titleArray = [];
  for (var i = 0; i < wordArray.length; i++) {

    if (shouldBeSmol(wordArray[i]) === true && i !== 0 && wordArray[i - 1][wordArray[i - 1].length - 1] !== ':') {
      titleArray.push(wordArray[i].toLowerCase());
    } else if (wordArray[i].toLowerCase() === 'javascript') {
      titleArray.push('JavaScript');
    } else if (wordArray[i].toLowerCase() === 'api') {
      titleArray.push('API');
    } else if (wordArray[i].includes('-') === true) {
      var hyphenWord = wordArray[i].split('-');
      hyphenWord = (hyphenWord[0][0].toUpperCase() + hyphenWord[0].slice(1).toLowerCase()) + ('-') + (hyphenWord[1][0].toUpperCase() + hyphenWord[1].slice(1).toLowerCase());
      titleArray.push(hyphenWord);
    } else {
      titleArray.push((wordArray[i][0]).toUpperCase() + (wordArray[i].slice(1).toLowerCase()));
    }
  }
  wordArray = titleArray.join(' ');
  wordArray = wordArray.replaceAll('Javascript', 'JavaScript');
  return wordArray;
}
