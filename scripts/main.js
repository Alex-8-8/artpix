$(function() {
  const filter = $('[data-filter]');

  filter.on('click', function() {
    const stat = $(this).data('filter');

    filter.removeClass('orders__button-active');
    $(this).addClass('orders__button-active');

    if (stat === 'all') {
      $('[data-stat]').show();
    } else {
      $('[data-stat]').each(function() {
        const orderStat = $(this).data('stat');

        if (orderStat !== stat) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    }
  });
});

$(function() {
  const navLinks = $('[data-link]');
  const navItems = $('[data-item]');

  navItems.on('click', function() {
    navItems.removeClass('navigation__item-active');
    $(this).addClass('navigation__item-active');
  });

  navLinks.on('click', function(e) {
    e.preventDefault();
    navLinks.removeClass('navigation__link-active');
    $(this).addClass('navigation__link-active');
  });
});
