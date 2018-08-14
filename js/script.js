$(function() {
	new WOW().init();
	

	var a = $(window).scrollTop();

	$(window).on("scroll", function(){
		var pos = $(window).scrollTop();
		if( pos > 600){
			$("#up").fadeIn(600);
		}else{
			$("#up").fadeOut(600);
		}
	});

	$("#up").on("click", function(){
		$("html,body").animate({scrollTop:0},300);
	});
			
			
	$('#toggle').click(function() {
		$(this).toggleClass('activeMenu');
		$('#overlayNav').toggleClass('open');
	});
	
	

	$('.scroll').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 400);
		return false;
	});
	/* END Smooth Scroll */
	
	
	$('.get').validate({
		rules: {
			email: {
				email: true,
			}
		},
		focusCleanup: true
	});
	
	
	// Отправка заявки 
	$('.get').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('.get').trigger('reset');
		});
		return false;
	});


	// Закрыть попап «спасибо»
	$('.js-close-thank-you').click(function() { // по клику на крестик
		$('.js-overlay-thank-you').fadeOut();
	});

	$(document).mouseup(function (e) { // по клику вне попапа
		var popup = $('.popup');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-thank-you').fadeOut();
		}
	});

	
	$('.tab_content').hide();
	$('.tab_content:first').show();
	$('.tabs div:first').addClass('active');
	$('.tabs div').click(function(event) {
		event.preventDefault();
		$('.tabs div').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').hide();

		var selectTab = $(this).find('a').attr("href");

		$(selectTab).fadeIn();
	});
	
	
	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
	
	
	/* Video Popup*/
	jQuery(document).ready(function ($) {
	  // Define App Namespace
	  var popup = {
		// Initializer
		init: function() {
		  popup.popupVideo();
		},
		popupVideo : function() {

		$('.video_model').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		gallery: {
			  enabled:true
			}
	  });

	/* Image Popup*/ 
	 $('.gallery_container').magnificPopup({
		  delegate: 'a',
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		gallery: {
			  enabled:true
			}
	  });

		}
	  };
	  popup.init($);
	});
	
	
	$('.testimonials').slick({
		dots: true,
		arrows: false
	});
	$('.your-class').slick();
});
	