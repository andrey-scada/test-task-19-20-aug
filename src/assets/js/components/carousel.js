import $ from 'jquery';
import debounce from '../lib/debounce';
import Flickity from 'flickity';

export default function() {
  const headerEl = document.querySelector('[data-carousel]');

  const headerOptions = {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: true,
    autoPlay: 7000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    draggable: false,
    selectedAttraction: 0.01,
    friction: 0.15,
    setGallerySize: false
  }

  const headerCarousel = new Flickity(headerEl, headerOptions);
}
