import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.js';
import { scrollPicComp } from './scrollPic.js';
import { carouselComp } from './carousel.js';

const app = createApp({
	data() {
		return {
			scrollPos: 0,
			startPoint: 895,
		};
	},
	mounted() {
		window.addEventListener('scroll', this.scrollHandler);
	},
	methods: {
		scrollHandler() {
			this.scrollPos = document.body.getBoundingClientRect().top;
			this.startPoint = this.$refs.scrollTarget.getBoundingClientRect().top;
		},
	},
});

app.component('scroll-pic-comp', scrollPicComp).component('carousel-comp', carouselComp);

app.mount('#app');
