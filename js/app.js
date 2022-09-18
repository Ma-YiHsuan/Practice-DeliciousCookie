const picRoll = document.querySelector('#picRoll');
const picTop = picRoll.getBoundingClientRect().top - 250;
let scrollPos = 0;

function scrollPic() {
	if (window.scrollY > picTop) {
		if (document.body.getBoundingClientRect().top < scrollPos) {
			picRoll.classList.add('upSytle');
			picRoll.classList.remove('downStyle');
		} else {
			picRoll.classList.add('downStyle');
			picRoll.classList.remove('upSytle');
		}

		scrollPos = document.body.getBoundingClientRect().top;
	}
}

window.addEventListener('scroll', scrollPic);
