
function init() {
	const tl = gsap.timeline({ ease: "power1.out" });
	tl.fromTo(
		".preloader__preview span",
		{ y: "100%" },
		{ duration: 1.2, stagger: 0.25, y: "0", opacity: '1' }
	).fromTo(
		".preloader__preview",
		{ y: "0%" },
		{ duration: 0.5, y: "-100%" },
		"+=1",
	);
	tl.fromTo(
		".preloader",
		{ y: "0" },
		{ duration: 0.2, stagger: 0.25, y: "0%" }
	).fromTo(
		".preloader",
		{ y: "0%" },
		{ duration: 0.4, y: "-100%" },
		"+=0",
	);
}
// window.addEventListener("load", () => init());
$(function () {
	init()
	// Custom JS
	const swiper = new Swiper('.hero__slider .swiper', {
		centeredSlides: false,
		loop: false,
		allowTouchMove: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span> ' +
					'|' +
					' <span class="' + totalClass + '"></span>';
			},
			formatFractionCurrent: function (number) {
				return '0' + number;
			},
			formatFractionTotal: function (number) {
				return '0' + number;
			},
		},
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		scrollbarHide: true,
		slidesPerView: 'auto',
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	const regex = /\//g;
	const sliderPagination = document.querySelector('.swiper-pagination').textContent
	const replaceText = sliderPagination.replace(regex, '|')
	sliderPagination.textContent = replaceText;

	//cursor
	const cursor = document.querySelector('.cursor');
	const cursorinner = document.querySelector('.cursor-follower');
	const buttons = document.querySelectorAll('button')
	const a = document.querySelectorAll('a');

	document.addEventListener('mousemove', function (e) {
		cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
	});

	document.addEventListener('mousemove', function (e) {
		let x = e.clientX;
		let y = e.clientY;
		cursorinner.style.left = x + 'px';
		cursorinner.style.top = y + 'px';
	});

	document.addEventListener('mousedown', function () {
		cursor.classList.add('click');
		cursorinner.classList.add('cursorinnerhover')
	});

	document.addEventListener('mouseup', function () {
		cursor.classList.remove('click')
		cursorinner.classList.remove('cursorinnerhover')
	});
	buttons.forEach(button => {
		button.addEventListener('mouseover', () => {
			cursor.classList.add('hover');
		});
		button.addEventListener('mouseleave', () => {
			cursor.classList.remove('hover');
		});
	})
	a.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('hover');
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('hover');
		});
	})

});
