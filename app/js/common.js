jQuery(document).ready(function ($) {

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
		fadeDuration: 3000,     /* Скорость появления слайда */
		autoplayDelay: 8000,   /* Скорость смены слайда */
		autoplayOnHover: 'none',  /* при наведении на слайдер он продолжает меняться */
		arrows: true,            /* стрелки по бокам */
		fadeArrows: false,         /* стрелки отображаются всегда */
		buttons: false,          /* Точки снизу */
		autoplay: true,
		
		
	});

});