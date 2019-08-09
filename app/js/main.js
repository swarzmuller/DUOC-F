
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
