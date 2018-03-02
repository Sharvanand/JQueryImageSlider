$(document).ready(function () {

  var width = 1000;
  var animationSpeed = 1000;
  var pause = 2000;
  var currentSlider = 1;

  var $sliderContainer = $('#slider-outer');
  var $sliderInnerContainer = $sliderContainer.find('.slider-inner');
  var $slides  = $sliderInnerContainer.find('.slider');

  var interval;
  function startSlider() {

    interval = setInterval(function () {
        $sliderInnerContainer.animate({'margin-left':'-='+width},animationSpeed,function () {
          currentSlider++;
          if(currentSlider === $slides.length){
            currentSlider = 1;
            $sliderInnerContainer.css('margin-left',0);

          }
        });
    },pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }
      $sliderContainer.on('mouseenter',stopSlider).on('mouseleave',startSlider);
      startSlider();

});
