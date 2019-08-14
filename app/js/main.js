//=include /libs/slick.min.js"
//=include ../components/2_action/2_action.js
//=include ../components/7_reviews/7_reviews.js
//=include ../components/footer/footer.js


var haburg = document.querySelector('.hamburger');
var menu = document.querySelector('.header__menu');
var close = document.querySelector('.close');

haburg.onclick = function () {
  menu.classList.add("active-menu");
};
close.onclick = function () {
  menu.classList.remove("active-menu");
};


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
  Visible(element);
  var y = $(this).scrollTop();
  if (y > 800) {
    element = document.querySelector('.ordeh2');
  } else if (y < 4200) {
    element = document.querySelector('.ordeh');
  }
  if (y > 4200) {
    element = document.querySelector('.ordeh3');
  }
});


$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top

  }, 1000);
  menu.classList.remove("active-menu");
});