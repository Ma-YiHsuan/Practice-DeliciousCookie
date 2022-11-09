const scrollPicComp = {
	data() {
		return {
			scrollTarget: undefined,
			startPoint: 0,
			translateY: 0,
		};
	},
	template: `
        <div class="picWithText-Picstyle" :style="{ transform: 'translate(' + '0px,' + translateY + 'px)' }"></div>
    `,
	mounted() {
		this.scrollTarget = document.querySelector('#scrollTarget');
		window.addEventListener('scroll', this.scrollHandler);
	},
	methods: {
		scrollHandler() {
			this.startPoint = this.scrollTarget.getBoundingClientRect().top;
			let duration = this.startPoint / 3;
			const vm = this;
			function animate() {
				if (vm.startPoint < 0) {
					vm.translateY = duration;
				} else {
					vm.translateY = 0;
				}
				if (duration < -400) {
					vm.translateY = -400;
				}
			}
			requestAnimationFrame(animate);
		},
	},
};

export { scrollPicComp };
