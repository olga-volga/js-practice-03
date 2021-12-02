export default class VideoPlayer {
	constructor(playBtnsSelector, overlaySelector) {
		this.playBtns = document.querySelectorAll(playBtnsSelector);
		this.overlay = document.querySelector(overlaySelector);
		this.close = this.overlay.querySelector('.close');
		this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
	}
	bindPlayBtn() {
		this.playBtns.forEach((item, i) => {
			try {
				const blockedElem = item.closest('.module__video-item').nextElementSibling;

				if (i % 2 == 0) {
					blockedElem.setAttribute('data-disabled', 'true');
				}
			} catch(err) {}
			
			item.addEventListener('click', (e) => {
				if (!item.closest('.module__video-item') || item.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
					this.activePlayBtn = item;

					if (this.player) {
					// or if (document.querySelector('iframe#frame'))
						this.overlay.style.display = 'flex';
						if (this.path !== item.getAttribute('data-url')) {
							this.path = item.getAttribute('data-url');
							this.player.loadVideoById({videoId: this.path});
						}
					} else {
						this.path = item.getAttribute('data-url');
						this.overlay.style.display = 'flex';
						this.createPlayer(this.path);
					}
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
	onPlayerStateChange(event) {
		try {
			const blockedElem = this.activePlayBtn.closest('.module__video-item').nextElementSibling,
        		  playBtnInner = this.activePlayBtn.querySelector('svg').cloneNode(true);

	        if (event.data === 0) {
	            if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
	            	blockedElem.querySelector('.play__circle').classList.remove('closed');

	            	blockedElem.querySelector('svg').remove();
	            	blockedElem.querySelector('.play__circle').append(playBtnInner);

	            	blockedElem.querySelector('.play__text').classList.remove('attention');
	            	blockedElem.querySelector('.play__text').textContent = 'play video';

	            	blockedElem.style.opacity = '1';
	            	blockedElem.style.filter = 'none';

	            	blockedElem.setAttribute('data-disabled', 'false');
	            } 
	        }
		} catch(err) {}
	}
	createPlayer(url) {
		this.player = new YT.Player('frame', {
	        height: '100%',
	        width: '100%',
	        videoId: url,
	        events: {
	        	'onStateChange': this.onPlayerStateChange
	        }
	    });
	}
	init() {
		if (this.playBtns.length > 0) {
			const tag = document.createElement('script');

		    tag.src = "https://www.youtube.com/iframe_api";
		    const firstScriptTag = document.getElementsByTagName('script')[0];
		    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		    this.bindPlayBtn();
		    this.bindCloseBtn();
		}
	}
}