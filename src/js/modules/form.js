export default class Form {
	constructor(forms, inputs, emails, phone) {
		this.forms = document.querySelectorAll(forms);
		this.inputs = document.querySelectorAll(inputs);
		this.emails = document.querySelectorAll(emails);
		this.phone = document.querySelector(phone);
		this.message = {
			load: 'Sending...',
			success: 'Thanks! We will contact you as soon as possible.',
			fail: 'Error! Please, try again later.'
		};
		this.path = 'assets/question.php';
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
	blockSubmitBtn() {
		this.forms.forEach(form => {
			form.querySelector('button').disabled = true;

			this.inputs.forEach(item => {
			    item.addEventListener('blur', () => {
			      	if (item.value.trim() === '') {
			          	item.style.border = '1px solid red';
			          	form.querySelector('button').disabled = true;
			        } else {
			          	item.style.border = '';
			          	form.querySelector('button').removeAttribute('disabled');
			        }
			    });
		    });
		});
	}
	async postData(url, data) {
		let result = await fetch(url, {
			method: "POST",
			body: data
		});
		return await result.text();
	}
	render() {
		this.checkEmailInput();
		this.phoneMaskInit();
		this.blockSubmitBtn();

		this.forms.forEach(item => {
			item.addEventListener('submit', (e) => {
				e.preventDefault();

				let statusMessage = document.createElement('div');
				statusMessage.classList.add('status', 'animated', 'fadeIn');
				statusMessage.style.cssText = 'color: #000; font-size: 26px;margin-top: 32px;';
				statusMessage.textContent = this.message.load;

				item.parentNode.append(statusMessage);

				item.classList.add('animated', 'fadeOut');
				item.style.display = 'none';

				let formData = new FormData(item);

				this.postData(this.path, formData)
					.then(res => {
						console.log(res);
						statusMessage.textContent = this.message.success;
					})
					.catch(() => {
						statusMessage.textContent = this.message.fail;
					})
					.finally(() => {
						item.reset();
						this.blockSubmitBtn();
						this.inputs.forEach(input => {
							input.style.border = '';
						});
						setTimeout(() => {
							statusMessage.remove();
							item.classList.remove('animated', 'fadeOut');
							item.classList.add('animated', 'fadeIn');
							item.style.display = '';
						}, 5000);
						
					})
			});
		});
	}
}