import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.js';

const app = createApp({
	data() {
		return {
			scrollPos: 0,
			startPoint: 895,
			translateY: -150,
		};
	},
	watch: {
		scrollPos(newValue, oldValue) {
			const newP = newValue / 10;
			const oldP = oldValue / 10;
			this.tween(oldP.toFixed(2), newP.toFixed(2));
		},
	},
	mounted() {
		window.addEventListener('scroll', this.scrollHandler);
	},
	methods: {
		scrollHandler() {
			this.scrollPos = document.body.getBoundingClientRect().top;
			this.startPoint = this.$refs.scrollTarget.getBoundingClientRect().top;
		},
		tween(start, end) {
			const vm = this;
			function animate() {
				requestAnimationFrame(animate);
				TWEEN.update();
			}
			requestAnimationFrame(animate);

			new TWEEN.Tween({ y: start })
				.to({ y: end }, 1)
				.onUpdate(function (obj) {
					if (vm.startPoint < 0) {
						if (obj.y < -500) {
							vm.translateY = '-500';
						} else {
							vm.translateY = obj.y.toFixed(2);
						}
					}
				})
				.start();
		},
	},
});

app.mount('#app');
