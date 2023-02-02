import '@fancyapps/ui/dist/fancybox.css';
import '@splidejs/splide/css';

import { Fancybox } from '@fancyapps/ui';
import Splide from '@splidejs/splide';

import img from '../src/img/3.jpg';

Fancybox.bind('[data-fancybox]', {
  // Your options go here
});

let splide = document.querySelector<HTMLElement>('.splide');
if (splide) {
  new Splide(splide).mount();
}
export { img };
