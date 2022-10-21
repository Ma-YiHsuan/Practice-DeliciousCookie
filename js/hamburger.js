const hamburComponent = {
	props: {
		list: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			isOpen: false,
		};
	},
	template: `
        <div class="hamburger" @click="isOpen = !isOpen">
            <span class="dli-close" v-show="isOpen"></span>
            <span class="dli-menu" v-show="!isOpen">
                <span></span><span></span><span></span>
            </span>
        </div>
        <transition
        enter-active-class="animate__animated animate__slideInLeft" 
        leave-active-class="animate__animated animate__slideOutLeft">
            <ul class="menu-list" v-show="isOpen">
                <a href="#" class="menu-list-item" v-for="item of list" v-cloak>
                    <li>
                        <span class="slot-content" :hidden-slot-text="item">{{ item }}</span>
                    </li>
                </a>
            </ul>
        </transition>
    `,
};

export { hamburComponent };
