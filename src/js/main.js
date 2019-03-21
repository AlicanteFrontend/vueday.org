const doc = document;

doc.documentElement.classList.remove('no-js');

/** Mobile nav */
const nav = doc.querySelector('.js-nav');
const navBtn = doc.querySelector('.js-toggle-nav');
const navToggleLabelClosed = 'Open menu';
const navToggleLabelOpened = 'Close menu';

function openNav() {
  nav.classList.add('is-open');
  nav.querySelector('a').focus();
  navBtn.setAttribute('aria-expanded', 'true');
  navBtn.setAttribute('aria-label', navToggleLabelOpened);
}

function closeNav() {
  nav.classList.remove('is-open');
  navBtn.setAttribute('aria-expanded', 'false');
  navBtn.setAttribute('aria-label', navToggleLabelClosed);
}

navBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (nav.classList.contains('is-open')) {
    closeNav();
  } else {
    openNav();
  }
});

nav.addEventListener('click', function(e) {
  console.log(e);
  if (e.target && e.target.classList.contains('js-nav-item')) {
    closeNav();
  }
});
