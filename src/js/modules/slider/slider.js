export default class Slider {
	constructor({btns = null, slidesParent = null, nextBtn = null, prevBtn = null, activeClass = null, effects, autoplay} = {}) {
		this.btns = document.querySelectorAll(btns);
		this.slidesParent = document.querySelector(slidesParent);
		this.nextBtn = document.querySelectorAll(nextBtn);
		this.prevBtn = document.querySelectorAll(prevBtn);
		this.activeClass = activeClass;
		this.effects = effects;
		this.autoplay = autoplay;
		try {this.slides = this.slidesParent.children;} catch(err) {}
		this.slideIndex = 1;
	}
}