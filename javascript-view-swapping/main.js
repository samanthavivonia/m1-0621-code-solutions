var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  // console.log('Function works!');

  if (event.target.matches('.tab')) {

    // CHANGE THE TAB

    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        // console.log('Tab activated!');
        $tabs[i].className = 'tab active';
      } else {
        // console.log('Tab deactivated!');
        $tabs[i].className = 'tab';
      }
    }

    // CHANGE THE VIEW

    var $dataView = event.target.getAttribute('data-view');
    // console.log('event.target.getAttribute: ', $dataView);

    for (i = 0; i < $views.length; i++) {
      if ($views[i].getAttribute('data-view') === $dataView) {
        // console.log('View activated!');
        $views[i].className = 'view';
      } else {
        // console.log('View deactivated!');
        $views[i].className = 'view hidden';
      }
    }
  }
});
