$(function () {

		/* scroll header */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('#header').addClass('header__scrolled');
		} else {
			$('#header').removeClass('header__scrolled');
		}
	});

	if ($(window).scrollTop() > 300) {
		$('#header').addClass('header__scrolled');
	}



});