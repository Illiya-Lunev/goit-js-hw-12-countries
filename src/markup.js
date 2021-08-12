import countryCard from '../templates/countrys.hbs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/desktop/dist/PNotifyDesktop';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

const ref = { containerCountry: document.querySelector('.js-countries') };

function markup(data) {
  const markupCard = countryCard(data);
  if (!data.length) {
    error({
      text: `Please enter a more specific query!`,
      styling: 'brighttheme',
      delay: 500,
    });
    return;
  }
  if (data && data.length >= 3) {
    error({
      title: `Too many matches found.`,
      text: `We found ${data.length} countries. Please enter a more specific query!`,
      styling: 'brighttheme',
      delay: 500,
    });
    return data.forEach(
      country => (ref.containerCountry.innerHTML += `<li>${country.name}</li>`),
    );
  }
  if (data.length === 1) {
    ref.containerCountry.insertAdjacentHTML('afterbegin', markupCard);
  }
}

export default markup;
