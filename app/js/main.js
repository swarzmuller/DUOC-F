
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

var element = document.querySelector('.increase-top');
var element2 = document.querySelector('.increase-top');

var Visible = function (target) {
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom && 
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 
		$('.orderLine').addClass('show-line');
  } else {
		$('.orderLine').removeClass('show-line');
		
  };
};
window.addEventListener('scroll', function() {
  Visible (element);
});
Visible (element);

