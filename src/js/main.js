import SliderMain from './modules/slider/slider-main';
import SliderMini from './modules/slider/slider-mini';
import VideoPlayer from './modules/videoPlayer';
import Difference from './modules/difference';
import Form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const mainSlider = new SliderMain({btns: '.next', slidesParent: '.page'});
	mainSlider.render();

	const showUpSlider = new SliderMini({
		slidesParent: '.showup__content-slider',
		nextBtn: '.showup__next',
		prevBtn: '.showup__prev',
		activeClass: 'card-active',
		effects: true
	});
	showUpSlider.render();

	const modulesSlider = new SliderMini({
		slidesParent: '.modules__content-slider',
		nextBtn: '.modules__info-btns .slick-next',
		prevBtn: '.modules__info-btns .slick-prev',
		activeClass: 'card-active',
		effects: true,
		autoplay: true
	});
	modulesSlider.render();

	const feedSlider = new SliderMini({
		slidesParent: '.feed__slider',
		nextBtn: '.feed__slider .slick-next',
		prevBtn: '.feed__slider .slick-prev',
		activeClass: 'feed__item-active'
	});
	feedSlider.render();

	const videoplayer = new VideoPlayer('.showup .play', '.overlay');
	videoplayer.init();

	const differenceOld = new Difference('.officerold', '.officer__card-item', '.plus');
	differenceOld.render();

	const differenceNew = new Difference('.officernew', '.officer__card-item', '.plus');
	differenceNew.render();

	const form = new Form('form', '[name="email"]');
	form.render();
});