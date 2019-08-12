//=include /libs/slick.min.js"
//=include ../components/7_reviews/7_reviews.js
//=include ../components/footer/footer.js


$('.increase-bottom').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true
			
		}
	},
	{
		breakpoint: 640,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			adaptiveHeight: true
		}
	}
]
});

const haburg = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.close');

haburg.onclick = function () {
    menu.classList.add("active-menu");
};

close.onclick = function () {
    menu.classList.remove("active-menu");
};