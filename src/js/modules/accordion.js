export default class Accordion {
	constructor(triggers) {
		this.triggers = document.querySelectorAll(triggers);
	}
	toggleBlock() {
		this.triggers.forEach(item => {
			item.addEventListener('click', () => {
				const siblingElem = item.closest('.module__info-show').nextElementSibling;

				siblingElem.classList.toggle('msg');
				siblingElem.style.marginTop = '20px';
				siblingElem.classList.add('animated', 'fadeIn');
			});
		});
	}
	render() {
		this.toggleBlock();
	}
}