import $ from 'jquery';

import carousel from './components/carousel';
import nav from './components/nav';
import time from './components/time';

$(document).ready(() => {
  carousel();
  nav();
  time();
});
