var $background = document.querySelector('body');
var $lightBulb = document.querySelector('.circle');

function lightSwitch(event) {
  if ($lightBulb.className === 'circle off') {
    $lightBulb.className = 'circle on';
    $background.className = 'light';
  } else if ($lightBulb.className === 'circle on') {
    $lightBulb.className = 'circle off';
    $background.className = 'dark';
  }
}

$lightBulb.addEventListener('click', lightSwitch);
