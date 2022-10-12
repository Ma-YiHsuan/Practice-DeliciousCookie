const carouselComp = {
	data() {
		return {
			transMove: 'moveLeft',
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
		<span class="carousel-heading--num">1/4</span>
		</h3>
		<span class="dli-chevron-left carousel-butLeft" @click="transMove = 'moveRight'"></span>
		<transition-group class="carousel-container" tag="div" :name="transMove">
			<div class="carousel-content" v-for="card of cards" :key="card.id">
				<div class="carousel-content--pic"></div>
				<div class="carousel-content--text">{{ card.text }}</div>
			</div>
		</transition-group>
		<span class="dli-chevron-right carousel-butRight" @click="transMove = 'moveLeft'"></span>
	`,
};

export { carouselComp };
