$(function () {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    }).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true

    });


    $('.productArrows i:nth-child(1)').on('click', function () {
        $('.slider-nav').slick('slickPrev')
    });
    $('.productArrows i:nth-child(2)').on('click', function () {
        $('.slider-nav').slick('slickNext')
    });



});



