import $ from 'jquery';
import debounce from '../lib/debounce';
import { lockBodyToggle } from '../lib/scrollLock';

export default function() {
  const $body = $(document.body);
  const $window = $(window);
  const $navBurgerBtn = $('[data-nav-burger]');
  const menuOpenClass = 'menu-open';

  $navBurgerBtn.on('click', () => {
    if ($body.hasClass(menuOpenClass)) {
      handleMenuClose();
    } else {
      handleMenuOpen()
    }
  });

  $window.on('resize', debounce(handleWindowResize, 200));

  function handleMenuOpen() {
    $body.addClass(menuOpenClass);
    lockBodyToggle();
  }

  function handleMenuClose() {
    $body.removeClass(menuOpenClass);
    lockBodyToggle();
  }

  function handleWindowResize() {
    const windowIsWide = $window.width() > 1024;

    if (windowIsWide && $body.hasClass(menuOpenClass)) {
      handleMenuClose();
    }
  }
}
