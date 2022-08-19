import $ from 'jquery';
import lightbox from './lib/lightbox';

import appear from './components/appear';
import carousel from './components/carousel';
import nav from './components/nav';
import showMore from './components/show-more';
import time from './components/time';

$(document).ready(() => {
  const $elementsToAppear = $('[data-appear]');

  carousel();
  nav();
  showMore();
  time();

  if ($elementsToAppear.length > 0) {
    appear($.makeArray($elementsToAppear));
  }
});
