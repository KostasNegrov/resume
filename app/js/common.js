jQuery(document).ready(function ($) {
	// 	/* wow.js */
	// new WOW().init();
	

	/* scroll header */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header__scrolled');
		} else {
			$('#header').removeClass('header__scrolled');
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header__scrolled');
	}

	/* Slide-Pro */

	$('#my-slider').sliderPro({
		width: '100%',
		height: '100vh',
		fade: true,
		fadeDuration: 3000,
		/* Скорость появления слайда */
		autoplayDelay: 8000,
		/* Скорость смены слайда */
		autoplayOnHover: 'none',
		/* при наведении на слайдер он продолжает меняться */
		arrows: true,
		/* стрелки по бокам */
		fadeArrows: false,
		/* стрелки отображаются всегда */
		buttons: false,
		/* Точки снизу */
		autoplay: true,
		breakpoints: {    /*Для разрешения на разных экранах*/		
			768: {				
				arrows: false,
			},			
		}
	});

	/* Скрипт для секции скилов  */
	function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
		const progressElement = $(node);
		progressElement.each(function (value, item) {
			$(item).find(nodeLine).animate({
				width: item.dataset.progressPercent + '%'
			}, animationLength);
			$(item).find(tooltip).show(animationLength);
		});
	}
	let animate = true;
	$(window).scroll(function () {
		if ($('.skills').offset().top <= $(window).scrollTop() + 150) {
			if (animate) {
				moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
			}
			animate = false;
		}

	});

	/* button upstairs */
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 800);
	});

	/* modal windows */
	$('.button__click').click(function(){
		$('.overlay').fadeIn(400);
	});
	$('.popup__close').click(function(){
		$('.overlay').fadeOut(400);
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.overlay').length || $(event.target).
			closest('.button__click').length ) return;
		$('.overlay').fadeOut(400);
		event.stopPropagation();
	}); 

});


/* Tabs */
function openTab(evt, tabeName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" skills--active", "");
	}
	document.getElementById(tabeName).style.display = "block";
	evt.currentTarget.className += " skills--active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


/* Yandex map */
ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: [53.929456, 27.557071],
			zoom: 5,
			controls: []
		}, {
			searchControlProvider: 'yandex#search'
		}),		
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),
		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Я здесь живу)'
		}, {			
			iconLayout: 'default#image',			
			iconImageHref: 'images/icon/map-icon.png',
			iconImageSize: [28, 51],			
			iconImageOffset: [-14, -51]
		})
	myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemarkWithContent);
});

//remove preloader

$(window).on('load', function () {
	$('.preloader').delay(2000).fadeOut('slow');
});