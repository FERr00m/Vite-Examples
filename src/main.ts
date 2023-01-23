// Libs css
import './libs/css/normalize.css';
import '@fancyapps/ui/dist/fancybox.css';
import 'materialize-css/dist/css/materialize.min.css';
import '@splidejs/splide/css';
import './styles/style.scss';

// Libs js
import { Fancybox } from '@fancyapps/ui';
import 'materialize-css/dist/js/materialize.min.js';
//import { gsap } from 'gsap';
import Splide from '@splidejs/splide';
import './libs/js/imask.min.js';
import './libs/js/lazyload.min.js';

Fancybox.bind('[data-fancybox]', {
  // Your options go here
});

let elems = document.querySelectorAll('.parallax');
let instances = M.Parallax.init(elems);

let splide: HTMLElement = document.querySelector('.splide')!;
if (splide) {
  new Splide(splide).mount();
}
