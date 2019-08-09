$('.reviews-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                dots: false
            }
        },
        {
            breakpoint: 639,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true
            }
        }
    ]
});