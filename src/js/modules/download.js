export default class Download {
	constructor(triggers) {
		this.triggers = document.querySelectorAll(triggers);
		this.path = 'assets/img/evolve.jpg';
	}
	downloadItem(path) {
		const link = document.createElement('a');

		link.setAttribute('href', path);
		link.setAttribute('download', 'picture');
		link.style.display = 'none';

		document.body.append(link);
		link.click();

		link.remove();
	}
	render() {
		this.triggers.forEach(item => {
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				this.downloadItem(this.path);
			});
		});
	}
}