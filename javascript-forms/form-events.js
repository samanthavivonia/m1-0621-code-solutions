function handleFocus(event) {
  console.log('The focus event was fired.');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('The blur event was fired.');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}

var $name = document.getElementById('user-name');
var $email = document.getElementById('user-email');
var $message = document.getElementById('user-message');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
