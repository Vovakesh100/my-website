const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	menuLink = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});
console.log(counters);
