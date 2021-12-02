import Slider from './slider';

export default class SliderMini extends Slider {
	constructor(slidesParent, nextBtn, prevBtn, activeClass, effects, autoplay, timerId) {
		super(slidesParent, nextBtn, prevBtn, activeClass, effects, autoplay);
		this.timerId;
	}
	makeSlideActive() {
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].classList.remove(this.activeClass);
			if (this.effects) {
				this.slides[i].querySelector('.card__title').style.opacity = '';
				this.slides[i].querySelector('.card__controls-arrow').style.opacity = '';
			}
		}
		if (!this.slides[0].closest('button')) {
	       this.slides[0].classList.add(this.activeClass);
	    }
		if (this.effects) {
			this.slides[0].querySelector('.card__title').style.opacity = '1';
			this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
		}
	}
	nextSlide() {
		for (let i = 0; i < this.slides.length; i++) {
			if (this.slides[i].tagName === 'BUTTON') {
				this.slidesParent.append(this.slides[i]);
			}
		}
		this.slidesParent.append(this.slides[0]);
		this.makeSlideActive();
	}
	previousSlide() {
		for (let i = this.slides.length - 1; i > 0; i--) {
			if (this.slides[i].tagName !== 'BUTTON') {
				let active = this.slides[i];
				this.slidesParent.insertBefore(active, this.slides[0]);
				this.makeSlideActive();
				break;
			}
		}
	}
	bindTriggers() {
		this.nextBtn[0].addEventListener('click', () => this.nextSlide());
		this.prevBtn[0].addEventListener('click', () => this.previousSlide());
	}
	autoplaySlider() {
		this.timerId = setInterval(() => {
			this.nextSlide();
		}, 5000);
	}
	render() {
		try {
			this.slidesParent.style.cssText = `
				display: flex;
				flex-wrap: wrap;
				align-items: flex-start;
				overflow: hidden;
			`;

			this.makeSlideActive();
			this.bindTriggers();

			if (this.autoplay) {
				this.autoplaySlider();

				this.nextBtn[0].addEventListener('mouseenter', () => clearTimeout(this.timerId));
				this.nextBtn[0].addEventListener('mouseleave', () => this.autoplaySlider());

				this.prevBtn[0].addEventListener('mouseenter', () => clearTimeout(this.timerId));
				this.prevBtn[0].addEventListener('mouseleave', () => this.autoplaySlider());

				this.slidesParent.addEventListener('mouseenter', () => clearTimeout(this.timerId));
				this.slidesParent.addEventListener('mouseleave', () => this.autoplaySlider());
			}
		} catch(err) {}
	}
}