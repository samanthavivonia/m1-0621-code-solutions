/* exported capitalize */
function capitalize(string) {
  var firstLetter = string[0].toUpperCase();
  var restOfString = string.slice(1).toLowerCase();
  return firstLetter + restOfString;
}
