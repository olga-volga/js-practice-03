export default class Difference {
	constructor(itemsParent, items, plusBtn) {
		this.itemsParent = document.querySelector(itemsParent);
		this.items = this.itemsParent.querySelectorAll(items);
		this.plusBtn = plusBtn;
		this.counter = 0;
	}
	hideItem() {
		this.items.forEach((item, i, arr) => {
			if (i !== arr.length - 1) {
				item.style.display = 'none';
			}
		});
	}
	bindTrigger() {
		this.itemsParent.querySelector(this.plusBtn).addEventListener('click', () => {
			this.items[this.counter].classList.add('animated', 'fadeIn');
			this.items[this.counter].style.display = 'flex';
			this.counter++;
			if (this.counter == this.items.length - 1) {
				this.items[this.items.length - 1].remove();
			}
		});
	}
	render() {
		this.hideItem();
		this.bindTrigger();
	}
}