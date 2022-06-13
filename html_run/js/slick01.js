$(function () {
    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
    });



    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        //javascript는 1초가 1000
        autoplaySpeed: 4000,
    });

    $('.slider02').slick({
        slidesToShow: 3,
    });
})