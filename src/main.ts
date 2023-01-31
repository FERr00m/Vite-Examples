// Libs css
import './libs/css/normalize.css';

import 'materialize-css/dist/css/materialize.min.css';

import './styles/style.scss';

// Libs js
import M from 'materialize-css/dist/js/materialize.min.js';
//import { gsap } from 'gsap';

import './libs/js/imask.min.js';
import './libs/js/lazyload.min.js';

let parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

let sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

//Blocks
import './blocks/input/input.ts';
import './blocks/input/input.scss';
