/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (newArray.includes(first[i]) === false) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (newArray.includes(second[i]) === false) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
