//=include /libs/slick.min.js"
//=include ../components/7_reviews/7_reviews.js
//=include ../components/footer/footer.js




// $('.increase-bottom').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 3,
// 	arrows: false,
// 	responsive: [
// 	{
// 		breakpoint: 1024,
// 		settings: {
// 			slidesToShow: 2,
// 			slidesToScroll: 2,
// 			arrows: true
// 		}
// 	},
// 	{
// 		breakpoint: 767,
// 		settings: {
// 			slidesToShow: 2,
// 			slidesToScroll: 2,
// 			arrows: true
			
// 		}
// 	},
// 	{
// 		breakpoint: 640,
// 		settings: {
// 			slidesToShow: 1,
// 			slidesToScroll: 1,
// 			arrows: true,
// 			adaptiveHeight: true
// 		}
// 	}
// ]
// });










const haburg = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.close');

haburg.onclick = function () {
    menu.classList.add("active-menu");
};

close.onclick = function () {
    menu.classList.remove("active-menu");
};
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -29
    }, 1000);
});

var element = document.querySelector('.ordeh');
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
  if (y > 800) {
    element = document.querySelector('.ordeh2');
  } else if(y < 4200){
    element = document.querySelector('.ordeh');
	}
	if(y > 4200){
		element = document.querySelector('.ordeh3');
	}
});


