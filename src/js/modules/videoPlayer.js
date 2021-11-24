export default class VideoPlayer {
	constructor(playBtnsSelector, overlaySelector) {
		this.playBtns = document.querySelectorAll(playBtnsSelector);
		this.overlay = document.querySelector(overlaySelector);
		this.close = this.overlay.querySelector('.close');
	}
	bindPlayBtn() {
		this.playBtns.forEach(item => {
			item.addEventListener('click', (e) => {
				if (this.player) {
				// or if (document.querySelector('iframe#frame'))
					this.overlay.style.display = 'flex';
				} else {
					const itemUrl = item.getAttribute('data-url');
					this.overlay.style.display = 'flex';
					this.createPlayer(itemUrl);
				}
			});
		});
	}
	bindCloseBtn() {
		this.overlay.addEventListener('click', (e) => {
			if (e.target == this.overlay || e.target == this.close) {
				this.overlay.style.display = '';
				this.player.stopVideo();
			}
		});
	}
	createPlayer(url) {
		this.player = new YT.Player('frame', {
	        height: '100%',
	        width: '100%',
	        videoId: url
	    });
	}
	init() {
		const tag = document.createElement('script');

	    tag.src = "https://www.youtube.com/iframe_api";
	    const firstScriptTag = document.getElementsByTagName('script')[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	    this.bindPlayBtn();
	    this.bindCloseBtn();
	}
}