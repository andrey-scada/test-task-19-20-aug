import $ from 'jquery';
import debounce from '../lib/debounce';
import Flickity from 'flickity';

export default function() {
  const headerEl = document.querySelector('[data-carousel="header"]');
  const testimonialsEl = document.querySelector('[data-carousel="testimonials"]');

  const headerOptions = {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: true,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    draggable: false,
    selectedAttraction: 0.01,
    friction: 0.15,
    setGallerySize: false
  }

  const testimonialsOptions = {
    cellAlign: 'center',
    contain: true,
    wrapAround: false,
    adaptiveHeight: true
  }

  const headerCarousel = new Flickity(headerEl, headerOptions);
  const testimonialsCarousel = new Flickity(testimonialsEl, testimonialsOptions);
}
