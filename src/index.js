import galleryCards from '../templates/gallery.hbs';
import menuCards from '../src/menu.json';
import './theme';

const galleryref = document.querySelector(`.js-menu`);

function buildMenu(array) {
  const markup = array.map(post => galleryCards(post)).join('');
  galleryref.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuCards);
