$(document).ready(function(){

	$('.banner-bottom__slider').slick({
	  infinite: false,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000
	});

	$('.info-slider').slick({
	  infinite: false,
	  arrows: true,
	  dots: true,
	  fade: true,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000
	});
	var slickSlider = $('.info-slider'),
			slideQuantity = $('.info-slider__quantity'); /*.html( slickk.slick("getSlick").slideCount);*/

	$(slickSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(slideQuantity).html('0' + i + '<b>' + '/' + '</b>' + '<span>' + slick.slideCount + '</span>');
    });
	/*
	$(window).on('scroll', function(){
		if($(this).scrollTop() > 10)
			$('.header').addClass('header-fixed');
		else
			$('.header').removeClass('header-fixed');
	});*/

	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('header-open');
		$('.header-right ul').slideToggle();
	});


});