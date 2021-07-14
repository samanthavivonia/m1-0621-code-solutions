// STUDENT OBJECT

var student = {
  firstName: 'Sam',
  lastName: 'Vivonia',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Full Name: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'UX/UI Assistant Instructor';

console.log('Lives in Irvine: ', student.livesInIrvine);
console.log('Previous Occupation: ', student.previousOccupation);

// VEHICLE OBJECT

var vehicle = {
  make: 'tesla',
  model: 'c',
  year: 2020
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('Color: ', vehicle['color']);
console.log('Is Convertible: ', vehicle['isConvertible']);

// PET OBJECT

var pet = {
  name: 'fishy',
  type: 'fish'
};

delete pet.name;
delete pet.type;

console.log('Value of Pet: ', pet);
