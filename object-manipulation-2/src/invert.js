/* exported invert */
function invert(source) {
  var newObject = {};
  var keysToValues = Object.keys(source);
  var valuesToKeys = Object.values(source);
  for (var i = 0; i < keysToValues.length; i++) {
    newObject[valuesToKeys[i]] = keysToValues[i];
  }
  return newObject;
}
