

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	// slidesPerView: 3,
	slidesPerView: 2,
	loop: true,
	spaceBetween: 16,
	breakpoints: {
		780: {
			slidesPerView: 3,
			spaceBetween: 24,
		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

import mobileNav from './modules/mobile-nav.js';
mobileNav();

import accordion from './modules/accordion.js';
accordion();
