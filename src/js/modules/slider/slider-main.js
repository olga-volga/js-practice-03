import Slider from './slider';

export default class SliderMain extends Slider {
	constructor(btns, slidesParent) {
		super(btns, slidesParent);
	}
	hideSlide() {
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].style.display = 'none';
		}
	}
	showSlide(i) {
		if (i > this.slides.length) {
			this.slideIndex = 1;
		}
		if (i < 1) {
			this.slideIndex = this.slides.length;
		}
		try {
			this.hanson.style.opacity = '0';
			if (i === 3) {
				setTimeout(() => {
					this.hanson.classList.add('animated', 'slideInUp');
					this.hanson.style.opacity = '1';
				}, 3000);
			} else {
				this.hanson.classList.remove('animated', 'slideInUp');
			}
		} catch(err) {}

		this.hideSlide();

		this.slides[this.slideIndex - 1].classList.add('animated', 'fadeInDown');
		this.slides[this.slideIndex - 1].style.display = 'block';
	}
	changeIndex(n) {
		this.showSlide(this.slideIndex += n);
	}
	render() {
		try {
			this.hanson = document.querySelector('.hanson');
		} catch(err) {}

		this.showSlide(this.slideIndex);

		this.btns.forEach(item => {
			item.addEventListener('click', () => {
				this.changeIndex(1);
			});
			item.parentNode.previousElementSibling.addEventListener('click', (e) => {
				e.preventDefault();
				this.slideIndex = 1;
				this.showSlide(this.slideIndex);
			});
		});
	}
}