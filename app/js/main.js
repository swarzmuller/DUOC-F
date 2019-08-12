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

<<<<<<< HEAD
var element = document.querySelector('.ordeh');
var element2 = document.querySelector('.ordeh2');
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
	
		$('.orderLine').removeClass('show-line');
		
  } else {
		$('.orderLine').addClass('show-line');
  };
};

$(window).scroll(function () { 
	Visible (element); 
	var y = $(this).scrollTop();
	console.log(y);
  if (y > 800) {
    element = document.querySelector('.ordeh2');
  } else if(y < 4200){
    element = document.querySelector('.ordeh');
	}
	if(y > 4200){
		element = document.querySelector('.ordeh3');
	}
	console.log(element);
});

Visible (element); 
=======
>>>>>>> 89ec07702477cd274ce406826c8950639cd332e9
