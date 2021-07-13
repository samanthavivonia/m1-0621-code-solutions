var width = 500;
var height = 400;
var area = width * height;
console.log('Area: ', area);
console.log('Area Type: ', typeof area);

var bill = 98.25;
var payment = 100;
var change = payment - bill;
console.log('Change: ', change);
console.log('Change Type: ', typeof change);

var quizzes = 85;
var midterm = 76;
var final = 90;
var grade = (quizzes + midterm + final) / 3;
console.log('Grade: ', grade);
console.log('Grade Type: ', typeof grade);

var firstName = 'Sam';
var lastName = 'Vivonia';
var fullName = firstName + ' ' + lastName;
console.log('Full Name: ', fullName);
console.log('Full Name Type: ', typeof fullName);

var ph = 3;
var isAcidic = ph < 7;
console.log('Is Acidic: ', isAcidic);
console.log('Is Acidic Type: ', typeof isAcidic);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log('Motto: ', motto);
console.log('Motto Type: ', typeof motto);
