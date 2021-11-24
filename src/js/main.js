import SliderMain from './modules/slider/slider-main';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const mainSlider = new SliderMain({btns: '.next', slidesParent: '.page'});
	mainSlider.render();

	const videoplayer = new VideoPlayer('.showup .play', '.overlay');
	videoplayer.init();
});