/**
 * @file
 * header functionality.
 */
(function (Drupal) {
  "use strict";

    const menu_toggle = document.querySelector('.main-header .uk-navbar-toggle');
    const menu = document.querySelector('.main-header .uk-navbar-nav');

    menu_toggle.addEventListener('click', function() {
        menu.classList.toggle('uk-visible@l');
        menu.classList.toggle('mobile-menu');
    });

})(Drupal);
