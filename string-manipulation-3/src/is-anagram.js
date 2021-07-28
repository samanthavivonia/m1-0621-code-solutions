/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var result = true;
  var firstStringArray = ((firstString.replaceAll(' ', '')).split('')).sort();
  // console.log(firstStringArray);
  var secondStringArray = ((secondString.replaceAll(' ', '')).split('')).sort();
  // console.log(secondStringArray);
  for (var i = 0; i < firstStringArray.length; i++) {
    if (firstStringArray[i] !== secondStringArray[i]) {
      result = false;
      break;
    }
  }
  return result;
}
