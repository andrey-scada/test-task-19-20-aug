import $ from 'jquery';

export default function() {
  const $itemContainer = $('[data-item-container]');

  if (!$itemContainer.length) return;

  $.each($itemContainer, function() {
    const $container = $(this);
    const $items = $container.find('[data-item]');
    const $itemsHidden = $container.find('[data-item]:hidden');
    const $showMoreBtn = $container.find('[data-btn-show]');

    $showMoreBtn.click(() => {
      $container
        .find('[data-item]:hidden')
        .slice(0, 4)
        .fadeIn()
        .css('display', 'flex');

      if ($container.find('[data-item]:hidden').length === 0) {
        $showMoreBtn.remove();
      }
    });
  });
}
