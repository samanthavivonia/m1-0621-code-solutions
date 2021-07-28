/* exported isPalindromic */
function isPalindromic(string) {
  var stringToArray = string.split('');
  var backwardsString = '';
  for (var i = (stringToArray.length - 1); i >= 0; i--) {
    backwardsString += stringToArray[i];
  }
  if (string.replace(' ', '') === backwardsString.replace(' ', '')) {
    return true;
  } else {
    return false;
  }
}
