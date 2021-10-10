const burgerOpen = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-menu__close');

burgerClose.addEventListener('click', () => {
	burgerMenu.classList.remove('active');
	document.body.style.overflow = 'visible';
});

burgerOpen.addEventListener('click', () => {
	burgerMenu.classList.add('active');
	document.body.style.overflow = 'hidden';
});

let activeMinusAnime = 0;

const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (window.scrollY >= 1) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}

	let windowScroll = window.scrollY;
	let scrollEl = document.querySelector('.minus__list').offsetTop - document.documentElement.clientHeight;

	if (windowScroll >= scrollEl && activeMinusAnime == 0) {
		console.log('yes');
		activeMinusAnime += 1;

		for (const elem of document.querySelectorAll('li[data-emoji-animate="1"]')) {
			elem.classList.add('active');
		}

		setTimeout(() => {
			for (const elem of document.querySelectorAll('li[data-emoji-animate="2"]')) {
				elem.classList.add('active');
			}
		}, 1000);
		setTimeout(() => {
			for (const elem of document.querySelectorAll('li[data-emoji-animate="3"]')) {
				elem.classList.add('active');
			}
		}, 2000);
		setTimeout(() => {
			for (const elem of document.querySelectorAll('li[data-emoji-animate="4"]')) {
				elem.classList.add('active');
			}
		}, 3000);
		setTimeout(() => {
			for (const elem of document.querySelectorAll('li[data-emoji-animate="5"]')) {
				elem.classList.add('active');
			}
		}, 4000);
		setTimeout(() => {
			for (const elem of document.querySelectorAll('li[data-emoji-animate="6"]')) {
				elem.classList.add('active');
			}
		}, 5000);
		setTimeout(() => {
			for (const elem of document.querySelectorAll('li[data-emoji-animate="7"]')) {
				elem.classList.add('active');
			}
		}, 6000);
		setTimeout(() => {
			for (const elem of document.querySelectorAll('li[data-emoji-animate="8"]')) {
				elem.classList.add('active');
			}
		}, 7000);
	}
});

const teamSlider = new Swiper('.teamSlider', {
	loop: false,
	slidesPerView: 3,

	navigation: {
		nextEl: '.teamSlider-next',
		prevEl: '.teamSlider-prev',
	},

	breakpoints: {
		992: {
			spaceBetween: 60,
			slidesPerView: 3,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

		320: {
			slidesPerView: 1,
			spaceBetween: 60,
		},
	}
});
const homeSlider = new Swiper('.homeSlider', {
	loop: true,
	effect: "fade",
	allowTouchMove: false,
	autoplay: {
		delay: 4000,
	},
});

const smallSlider = new Swiper('.smallSlider', {
	loop: true,
	slidesPerView: 3,
	direction: 'vertical',
	allowTouchMove: false,
	autoplay: {
		delay: 4000,
	},
});


// homeSlider.on('beforeLoopFix', function () {
// 	console.log('3');
// })
// homeSlider.on('slideChange', function () {
// 	console.log('1');
// });
// for (const sm of smallSlider) {
// 	sm.on('slideChange', function () {
// 		console.log('2');
// 	});
// }
// homeSlider.on('slideChange', function () {
// 	console.log('1');
// });
homeSlider.on('slideChange', function () {
	// console.log('1');
	// setTimeout(() => {
	// const currentSlide = document.querySelector('.swiper-slide-active');
	// 	currentSlide.querySelector('.offer__text').classList.add('active');
	// }, 200);
	const allSmallSlides = document.querySelectorAll('.smallSlider__slide');
	for (const slide of allSmallSlides) {
		slide.classList.remove('active');
	}
	setTimeout(() => {
		const currentSlide = document.querySelectorAll('.smallSlider__slide.swiper-slide-active');
		for (const slide of currentSlide) {
			slide.classList.add('active');
		}
		const duplCurSlide = document.querySelectorAll('.smallSlider__slide.swiper-slide-duplicate-active');
		for (const slide of duplCurSlide) {
			slide.classList.add('active');
		}
	}, 200);
});

const popupClose = document.querySelectorAll('.popup-close');
for (const close of popupClose) {
	close.addEventListener('click', (e) => {
		const parent = e.target.closest('.popup');
		parent.classList.remove('active');
		document.body.style.overflow = 'visible';
	});
}

const popupBg = document.querySelectorAll('.popup-bg');
for (const bg of popupBg) {
	bg.addEventListener('click', (e) => {
		const parent = e.target.closest('.popup');
		parent.classList.remove('active');
		document.body.style.overflow = 'visible';
	});
}

const popupCatalog = document.querySelector('.popup-catalog');
const popupCatalogOpen = document.querySelectorAll('.popup-catalog-open');
for (const btn of popupCatalogOpen) {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		burgerMenu.classList.remove('active');
		popupCatalog.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
}

const popupLogin = document.querySelector('.popup-login');
const popupLoginOpen = document.querySelectorAll('.popup-login-open');
for (const btn of popupLoginOpen) {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		burgerMenu.classList.remove('active');
		popupLogin.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
}

const soonTriangle = document.querySelector('.soon__triangle');
const ClientSizeWidth = document.documentElement.clientWidth;
if (+ClientSizeWidth <= 575) {
	soonTriangle.setAttribute('style', `border-left-width: ${ClientSizeWidth / 2}px; border-right-width: ${ClientSizeWidth / 2}px`);
}

window.addEventListener('resize', () => {
	const ClientSizeWidth = document.documentElement.clientWidth;
	if (+ClientSizeWidth <= 575) {
		soonTriangle.setAttribute('style', `border-left-width: ${ClientSizeWidth / 2}px; border-right-width: ${ClientSizeWidth / 2}px`);
	}
});

// const currentSlideSmall = document.querySelector('.smallSlider');
// currentSlideSmall.on('slideChange', function () {
// 	const currentSlide = document.querySelector('.swiper-slide-active');
// 	for (const iterator of object) {

// 	}
// 	currentSlide.querySelector('.offer__subtitle').classList.add('active');
// });