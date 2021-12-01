export default class Form {
	constructor(forms, emails, phone) {
		this.forms = document.querySelectorAll(forms);
		this.emails = document.querySelectorAll(emails);
		this.phone = document.querySelector(phone);
	}
	async postData(url, data) {
		let result = await fetch(url, {
			method: "POST",
			body: data
		});
		return await result.text();
	}
	checkEmailInput() {
		this.emails.forEach(item => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/[^a-z 0-9 @ _ \. -]/gi, '');
			});
		});
	}
	phoneMaskInit() {
		function setCursorPosition(position, elem) {
			elem.focus();

			elem.addEventListener('click', () => {
				elem.selectionStart = elem.selectionEnd = elem.value.length;
			});

			if (elem.setSelectionRange) {
				elem.setSelectionRange(position, position);
			} else if (elem.createTextRange) {
				let range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd('char', position);
				range.moveStart('char', position);
				range.select();
			}
		}
		function createMask(event) {
			let matrix = '+1 (___) ___-____',
				i = 0,
				def = matrix.replace(/\D/ig, ''),
				val = this.value.replace(/\D/ig, '');

			if (def.length >= val.length) {
				val = def;
			}

			this.value = matrix.replace(/./g, function(a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
			});

			if (event.type === 'blur') {
				if (this.value.length == 2) {
					this.value = '';
				}
			} else {
				setCursorPosition(this.value.length, this);
			}
		}

		this.phone.addEventListener('input', createMask);
		this.phone.addEventListener('focus', createMask);
		this.phone.addEventListener('blur', createMask);
	}
	render() {
		this.checkEmailInput();
		this.phoneMaskInit();

		this.forms.forEach(item => {
			item.addEventListener('submit', (e) => {
				e.preventDefault();

				let formData = new FormData(item);

				let statusMessage = document.createElement('div');
				statusMessage.classList.add('status', 'animated', 'fadeIn');
				statusMessage.style.cssText = 'color: #000; font-size: 26px;margin-top: 32px;';
				item.parentNode.append(statusMessage);

				item.classList.add('animated', 'fadeOut');
				item.style.display = 'none';

				this.postData('assets/question.php', formData)
					.then(res => {
						console.log(res);
						statusMessage.textContent = 'Thanks! We will contact you as soon as possible.';
					})
					.catch(() => {
						statusMessage.textContent = 'Error! Please, try again later.';
					})
					.finally(() => {
						setTimeout(() => {
							statusMessage.remove();
							item.classList.remove('animated', 'fadeOut');
							item.classList.add('animated', 'fadeIn');
							item.style.display = '';
							item.reset();
						}, 5000);
						
					})
			});
		});
	}
}