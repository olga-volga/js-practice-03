import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const mainSlider = new Slider('.next', '.page');
	mainSlider.render();

	const videoplayer = new VideoPlayer('.showup .play', '.overlay');
	videoplayer.init();
});