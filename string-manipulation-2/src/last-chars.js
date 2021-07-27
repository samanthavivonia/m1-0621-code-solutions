/* exported lastChars */
function lastChars(length, string) {
  var newLength = 0;
  if (length <= string.length) {
    newLength = length;
  } else {
    newLength = string.length;
  }
  var newString = string.slice(string.length - newLength);
  return newString;
}
