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
    focusOnSelect: true,
    arrows: false,
  });


  $('.productArrows i:nth-child(1)').on('click', function () {
    $('.slider-nav').slick('slickPrev')
  });
  $('.productArrows i:nth-child(2)').on('click', function () {
    $('.slider-nav').slick('slickNext')
  });

  $('.toTop').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 200);
  });

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    if (sct > 500) {
      $('.toTop').fadeIn(300)
    }
    else {
      $('.toTop').fadeOut(700)
    }
  })



});
