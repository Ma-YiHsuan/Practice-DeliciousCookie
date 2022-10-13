const carouselComp = {
	data() {
		return {
			isShow: false,
			transMove: 'fade',
			curIndex: 0,
			direction: 1,
			cards: [
				{
					id: 1,
					text: '產品說明文字',
				},
				{
					id: 2,
					text: '產品說明文字',
				},
				{
					id: 3,
					text: '產品說明文字',
				},
				{
					id: 4,
					text: '產品說明文字',
				},
			],
		};
	},
	template: `
		<h3 class="carousel-heading">
		餅乾產品
			<span class="carousel-heading--num">{{ curIndex + 1 }}/{{ cards.length }}</span>
		</h3>
		<span class="dli-chevron-left carousel-butLeft" @click="slide(-1)"></span>
		<transition-group :name="transMove" tag="div" class="carousel-box" v-cloak>
			<div class="carousel-content-prev" v-if="isShow" :key="prevIndex">
				<p>{{ cards[prevIndex].id }}</p>
				<p>{{ cards[prevIndex].text }}</p>
			</div>
			<div class="carousel-content-main" v-if="isShow" :key="curIndex">
				<p>{{ cards[curIndex].id }}</p>
				<p>{{ cards[curIndex].text }}</p>
			</div>
			<div class="carousel-content-next" v-if="isShow" :key="nextIndex">
				<p>{{ cards[nextIndex].id }}</p>
				<p>{{ cards[nextIndex].text }}</p>
			</div>
		</transition-group>
		<span class="dli-chevron-right carousel-butRight" @click="slide(1)"></span>
	`,
	computed: {
		prevIndex() {
			let len = this.cards.length;
			return (this.curIndex - (1 % len) + len) % len;
		},
		nextIndex() {
			let len = this.cards.length;
			return (this.curIndex + (1 % len) + len) % len;
		},
	},
	mounted() {
		this.isShow = true;
	},
	methods: {
		slide(dir) {
			this.direction = dir;
			if (dir === 1) {
				this.transMove = 'move-next';
			} else if (dir === -1) {
				this.transMove = 'move-prev';
			}
			let len = this.cards.length;
			// http://stackoverflow.com/q/4467539
			this.curIndex = (this.curIndex + (dir % len) + len) % len;
		},
	},
};

export { carouselComp };
