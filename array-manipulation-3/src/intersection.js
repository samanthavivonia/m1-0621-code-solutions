/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true && newArray.includes(first[i]) === false) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (first.includes(second[i]) === true && newArray.includes(second[i]) === false) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
