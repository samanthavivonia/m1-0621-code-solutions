/* exported chunk */
function chunk(array, size) {
  var chunks = [];
  for (var i = 0; i <= ((array.length - 1) / size); i++) {
    chunks.push([]);
  }
  for (i = 0; i < array.length; i++) {
    if (i < size) {
      chunks[0].push(array[i]);
    } if (i >= size && i < (size * 2)) {
      chunks[1].push(array[i]);
    } if (i >= (size * 2) && i < (size * 3)) {
      chunks[2].push(array[i]);
    } if (i >= (size * 3) && i < (size * 4)) {
      chunks[3].push(array[i]);
    } if (i >= (size * 4) && i < (size * 5)) {
      chunks[4].push(array[i]);
    } if (i >= (size * 5) && i < (size * 6)) {
      chunks[5].push(array[i]);
    }
  }
  return chunks;
}
