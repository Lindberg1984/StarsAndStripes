jQuery(document).ready(function ($) {

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function fallToGround($element) {
    var delay = getRandomArbitrary(0, 4);
    var timeout;

    timeout = setTimeout(function () {
      var duration = getRandomArbitrary(100, 125);
      var distance = getRandomArbitrary(2000, 4000);

      $element.animate({
        bottom: '-' + distance + 'px'
      }, duration);

      clearTimeout(timeout);
    }, delay);
  }

  var $stars = $('.flag__union-star-wrapper');
  var $stripes = $('.flag__stripes-stripe');

  $stars.each(function () {
    $(this).on('mouseenter', function () {
      // fallToGround($(this));
    });
  });

  $stripes.each(function () {
    $(this).on('click', function () {
      // fallToGround($(this));
    });
  });
});