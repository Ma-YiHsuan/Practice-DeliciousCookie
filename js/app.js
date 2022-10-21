import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.js';
import { scrollPicComp } from './scrollPic.js';
import { carouselComp } from './carousel.js';
import { hamburComponent } from './hamburger.js';

const app = createApp({
	data() {
		return {
			scrollPos: 0,
			startPoint: 895,
			footerList: ['常見Q&A', '關於我們', '意見回報', '合作提案', '服務條款'],
			headerList: ['home', 'story', 'products', 'news', 'stores'],
			isSmallPage: false,
		};
	},
	computed: {
		capitalizaList() {
			const newList = this.headerList.map((value) => {
				return value.slice(0, 1).toUpperCase() + value.slice(1);
			});
			return newList;
		},
	},
	mounted() {
		window.addEventListener('scroll', this.scrollHandler);
		if (window.innerWidth <= 1024) {
			this.isSmallPage = true;
		} else {
			this.isSmallPage = false;
		}
		window.addEventListener('resize', this.resizeHandler);
	},
	methods: {
		scrollHandler() {
			this.scrollPos = document.body.getBoundingClientRect().top;
			this.startPoint = this.$refs.scrollTarget.getBoundingClientRect().top;
		},
		resizeHandler() {
			if (window.innerWidth <= 1024) {
				this.isSmallPage = true;
			} else {
				this.isSmallPage = false;
			}
		},
	},
});

app.component('scroll-pic-comp', scrollPicComp)
	.component('carousel-comp', carouselComp)
	.component('hamburger', hamburComponent);

app.mount('#app');
