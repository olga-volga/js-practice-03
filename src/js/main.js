import Slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const mainSlider = new Slider('.next', '.page');
	mainSlider.render();
});