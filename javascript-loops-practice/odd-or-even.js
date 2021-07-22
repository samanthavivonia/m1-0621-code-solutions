/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEvenArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddEvenArray.push('odd');
    } else {
      oddEvenArray.push('even');
    }
  }
  return oddEvenArray;
}
