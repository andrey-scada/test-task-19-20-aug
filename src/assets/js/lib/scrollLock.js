let isLocked = false;

function lockBodyToggle() {
  const body = document.body,
        fixPadding = document.getElementsByClassName("fix-padding"),
        scrollbarWidth = getScrollBarWidth();

  body.classList.toggle('_is-locked', !isLocked);

  if (!isLocked) {
    body.style.top = `-${window.scrollY}px`
    body.style.position = 'fixed'
    body.style.paddingRight = `${scrollbarWidth}px`

    Array.prototype.forEach.call(fixPadding, (el) => el.style.paddingRight = `${scrollbarWidth}px`);

   isLocked = true;

  } else {
    const top = window.getComputedStyle(body).top,
      scrollToY = parseInt(top || '0') * -1;

    body.removeAttribute('style');

    window.scrollTo(0, scrollToY);

    Array.prototype.forEach.call(fixPadding, (el) => el.style.paddingRight = '');

    isLocked = false;
  }
}

function getScrollBarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

export { lockBodyToggle, getScrollBarWidth };
