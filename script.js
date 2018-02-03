jQuery(document).ready(function ($) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function fallToGround($element) {
    var delay = getRandomInt(0, 4);
    var timeout;

    timeout = setTimeout(function () {
      var duration = getRandomInt(100, 125);
      var distance = getRandomInt(2000, 4000);

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