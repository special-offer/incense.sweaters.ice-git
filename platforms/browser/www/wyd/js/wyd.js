$(document).ready(function() {

	// Variables

	var body = $('body');

	var info = $('#info');
	var infotrig = $('#info-trig');

	var help = $('#loadingMessage');
	var helptrig = $('#help-trig');

	var trigs = $('#help-trig, #info-trig');

	

	// Info Modal

	infotrig.click(function (evt) {

		body.removeClass('help-active').addClass('info-active');
		trigs.removeClass('loaded');
		$(this).addClass('active');

		setTimeout(function() {
			info.fadeIn();
			$('h1,h2,h3').addClass('loaded');
			setTimeout(function() {
				info.fadeOut();
				infotrig.removeClass('active');
				$('h1,h2,h3').removeClass('loaded');
				body.removeClass('info-active');

						setTimeout(function() {
							trigs.addClass('loaded');
						}, 1000);
				
			}, 5000);

		}, 450);
		

		evt.preventDefault();
		return false;
	});




	// Help Modal

	helptrig.click(function (evt) {
		body.removeClass('info-active').addClass('help-active');
		trigs.removeClass('loaded');
		$(this).addClass('active');

		setTimeout(function() {
			help.fadeIn();

			setTimeout(function() {
				help.fadeOut();
				body.removeClass('help-active');
				helptrig.removeClass('active');
				
				setTimeout(function() {
					trigs.addClass('loaded');
				}, 1000);

			}, 2500);

		}, 450);

		evt.preventDefault();
		return false;
	});




});