/* exported getValues */
function getValues(object) {
  var keys = [];
  for (var i in object) {
    keys.push(object[i]);
  }
  return keys;
}
