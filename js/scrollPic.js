const scrollPicComp = {
	props: ['scrollpos', 'startpoint'],
	data() {
		return {
			translateY: '-50',
		};
	},
	template: `
        <div class="picWithText-Picstyle" :style="{ transform: 'translate3d('+ '0px,' + translateY + 'px, 0px)' }"></div>
    `,
	watch: {
		scrollpos(newValue, oldValue) {
			const newP = newValue / 10;
			const oldP = oldValue / 10;
			this.tween(oldP.toFixed(3), newP.toFixed(3));
		},
	},
	methods: {
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
					if (vm.startpoint < 0) {
						if (obj.y < -500) {
							vm.translateY = '-500';
						} else {
							vm.translateY = obj.y.toFixed(3);
						}
					}
				})
				.start();
		},
	},
};

export { scrollPicComp };
