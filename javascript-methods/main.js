// Max Value

var one = 1;
var two = 2;
var three = 3;
var maxValue = Math.max(one, two, three);
console.log('Max of one, two, three is: ', maxValue);

// Heroes

var heroes = ['Wonder Woman', 'Black Widow', 'Mermaid Man', 'Barnacle Boy'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random Index: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Random Hero: ', randomHero);

// Array Methods

var library = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman'
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama'
  },
  {
    title: 'Everybody Lies',
    author: 'Seth Stephens-Davidowitz'
  }
];

var lastBook = library.pop();
console.log('Last Book: ', lastBook);

var firstBook = library.shift();
console.log('First Book: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library: ', library);

// String Methods

var fullName = 'Sam Vivonia';
var firstAndLastName = fullName.split(' ');
console.log('First and Last', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say My Name: ', sayMyName);
