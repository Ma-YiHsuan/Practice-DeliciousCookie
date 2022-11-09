import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.js';
import { scrollPicComp } from './scrollPic.js';
import { carouselComp } from './carousel.js';
import { hamburComponent } from './hamburger.js';

const app = createApp({
	data() {
		return {
			footerList: ['常見Q&A', '關於我們', '意見回報', '合作提案', '服務條款'],
			headerList: ['home', 'story', 'products', 'news', 'stores'],
			isSmallPage: false,
			isPhone: false,
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
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler);
	},
	methods: {
		resizeHandler() {
			if (window.innerWidth <= 1024) {
				this.isSmallPage = true;
				this.isPhone = false;
				if (window.innerWidth <= 768) {
					this.isPhone = true;
				}
			} else {
				this.isSmallPage = false;
				this.isPhone = false;
			}
		},
	},
});

app.component('scroll-pic-comp', scrollPicComp)
	.component('carousel-comp', carouselComp)
	.component('hamburger', hamburComponent);

app.mount('#app');
