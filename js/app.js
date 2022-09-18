const picRoll = document.querySelector('#picRoll');
let scrollPos = 0;

window.addEventListener('scroll', function () {
	if (document.body.getBoundingClientRect().top < scrollPos) {
		picRoll.classList.add('upSytle');
		picRoll.classList.remove('downStyle');
	} else {
		picRoll.classList.add('downStyle');
		picRoll.classList.remove('upSytle');
	}

	scrollPos = document.body.getBoundingClientRect().top;
});
