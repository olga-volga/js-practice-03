export default class Slider {
	constructor({btns = '', slidesParent = '', nextBtn = '', prevBtn = ''} = {}) {
		this.btns = document.querySelectorAll(btns);
		this.slidesParent = document.querySelector(slidesParent);
		this.slides = this.slidesParent.children;
		this.slideIndex = 1;
	}
}