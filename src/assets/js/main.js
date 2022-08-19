import $ from 'jquery';
import lightbox from './lib/lightbox';

import carousel from './components/carousel';
import nav from './components/nav';
import showMore from './components/show-more';
import time from './components/time';

$(document).ready(() => {
  carousel();
  nav();
  showMore();
  time();
});
