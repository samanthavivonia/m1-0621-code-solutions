var bookArray = [
  {
    isbn: 1,
    author: 'Author 1',
    title: 'Title 1'
  },
  {
    isbn: 2,
    author: 'Author 2',
    title: 'Title 2'
  },
  {
    isbn: 3,
    author: 'Author 3',
    title: 'Title 3'
  }
];

console.log('bookArray: ', bookArray);
console.log('typeof bookArray: ', typeof bookArray);

var bookArrayJSON = JSON.stringify(bookArray);

console.log('bookArrayJSON: ', bookArrayJSON);
console.log('typeof bookArrayJSON: ', typeof bookArrayJSON);

var bookArrayString = '[{"isbn":1,"author":"Author 1","title":"Title 1"},{"isbn":2,"author":"Author 2","title":"Title 2"},{"isbn":3,"author":"Author 3","title":"Title 3"}]';

console.log('bookArrayString: ', bookArrayString);
console.log('typeof bookArrayString: ', typeof bookArrayString);

var bookArrayParsed = JSON.parse(bookArrayString);

console.log('bookArrayParsed: ', bookArrayParsed);
console.log('typeof bookArrayParsed: ', typeof bookArrayParsed);
