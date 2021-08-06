var $spans = document.querySelectorAll('span');
var i = 0;

function typingTutor(event) {
  if (event.key === $spans[i].textContent) {
    // console.log('correct key pressed for ', $spans[i]);
    $spans[i].className = 'correct';
    i += 1;
    $spans[i].className = 'active';
  } else {
    // console.log('incorrect key pressed for ', $spans[i]);
    $spans[i].className = 'incorrect';
  }
}

document.addEventListener('keydown', typingTutor);
