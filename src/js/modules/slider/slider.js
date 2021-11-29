export default class Slider {
	constructor({btns = null, slidesParent = null, nextBtn = null, prevBtn = null, activeClass = null, effects, autoplay} = {}) {
		this.btns = document.querySelectorAll(btns);
		this.slidesParent = document.querySelector(slidesParent);
		this.nextBtn = document.querySelector(nextBtn);
		this.prevBtn = document.querySelector(prevBtn);
		this.activeClass = activeClass;
		this.effects = effects;
		this.autoplay = autoplay;
		this.slides = this.slidesParent.children;
		this.slideIndex = 1;
	}
}