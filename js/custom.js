$(function(){

  $('.kaffee-feedback').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
    arrows:false,
    asNavFor: '.kaffee-item'
    
  });
  $('.kaffee-item').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.kaffee-feedback',
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding:false,
    arrows:false,
  });

});