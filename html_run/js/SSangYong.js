$(function(){


$('.slider').slick({
    arrows: false,
    dots: false,
});

$('.productArrows i:nth-child(1)').on('click', function () {
    $('.slider').slick('slickPrev')
});
$('.productArrows i:nth-child(2)').on('click', function () {
    $('.slider').slick('slickNext')
});



});





//#slick {width: 1200px; height: 400px;margin: 0 auto;overflow: hidden;}

    
    
   


//#slick .slider .inbox figure {
   // padding: 0 300px;
//}

//#slick .slider .inbox {
 //   margin: 0 0 100px 0;
//}

//#slick .slider .slick-dots {
   // padding: 20px;
//}

//#slick .slider .slick-dots li {
  //  display: inline-block;
    //margin: 0 2px;
//}

//#slick .slider .slick-dots li button {
 //   border: none;
//    outline: none;
 //   padding: 0 0;
   // background: #f00;
  //  color: #fff;
    //border-radius: 50%;
   // height: 20px;
   // width: 20px;
    //font-size: 13px;
//}
