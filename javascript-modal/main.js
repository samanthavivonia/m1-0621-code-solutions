var $openModal = document.querySelector('.trigger');
var $closeModal = document.querySelector('.close');
var $overlay = document.querySelector('.overlay');

$openModal.addEventListener('click', function () {
  $overlay.className = 'overlay showing';
});

$closeModal.addEventListener('click', function () {
  $overlay.className = 'overlay hidden';
});
