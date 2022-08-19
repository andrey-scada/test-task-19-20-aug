import $ from 'jquery';
import throttle from '../lib/throttle';

export default function(elements) {
  $.each(elements, (i, el) => {
    const $el = $(el);
    const $document = $(document);
    const $window = $(window);

    let allElementsVisible = false;

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $window.scrollTop();
      var viewportBottom = viewportTop + $window.height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function showElement() {
      $el.addClass('visible');
    }

    if ($el.isInViewport()) {

      showElement();
      allElementsVisible = elements.every(el => $(el).hasClass('visible'));

    } else {

      $document.on('resize scroll', throttle(
        () => {
          if (!allElementsVisible) {
            if ($el.isInViewport()) {
              showElement();
              allElementsVisible = elements.every(el => $(el).hasClass('visible'));

              return;
            }
          }
        }, 300
      ));
      
    }
  });
}
