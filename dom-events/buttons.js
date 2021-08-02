// CLICK-BUTTON

function handleClick(event) {
  console.log('button click');
  console.log(event);
  console.log(event.target);
}
var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

// MOUSE-OVER

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover, false);

// DOUBLE-CLICK

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick, false);
