import moment from 'moment';

export default () => {
  const yearEl = document.querySelector('[data-year]');

  if (yearEl) {
    yearEl.innerHTML = moment().format('YYYY');
  }
}
