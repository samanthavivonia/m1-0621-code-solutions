var $form = document.getElementById('contact-form');

var $submittedForm = {};

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  $submittedForm.name = $form.elements.name.value;
  $submittedForm.email = $form.elements.email.value;
  $submittedForm.message = $form.elements.message.value;

  console.log('Submitted Form Object: ', $submittedForm);

  $form.reset();
});
