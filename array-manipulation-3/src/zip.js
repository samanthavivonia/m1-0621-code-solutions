/* exported zip */
function zip(first, second) {
  var shorterArgumentArray;
  if (first.length > second.length) {
    shorterArgumentArray = second.length;
  } if (second.length > first.length) {
    shorterArgumentArray = first.length;
  } else {
    shorterArgumentArray = second.length;
  }
  var zippedArray = [];
  for (var i = 0; i < shorterArgumentArray; i++) {
    zippedArray.push([first[i], second[i]]);
  }
  // console.log(zippedArray);
  return zippedArray;
}
