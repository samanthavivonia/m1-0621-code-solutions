/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var i in source) {
    if (keys.includes(i) === true) {
      continue;
    } if (keys.includes(i) === false) {
      newObject[i] = source[i];
    }
  }
  return newObject;
}
