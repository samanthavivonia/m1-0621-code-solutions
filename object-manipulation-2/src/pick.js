/* exported pick */
function pick(source, keys) {
  var pickedObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      pickedObj[keys[i]] = source[keys[i]];
    }
  }
  return pickedObj;
}
