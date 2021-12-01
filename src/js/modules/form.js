export default class Form {
	constructor(forms, emails) {
		this.forms = document.querySelectorAll(forms);
		this.emails = document.querySelectorAll(emails);
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
				item.value = item.value.replace(/[^a-z 0-9 @ _ . -]/gi, '');
			});
		});
	}
	render() {
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
		this.checkEmailInput();
	}
}