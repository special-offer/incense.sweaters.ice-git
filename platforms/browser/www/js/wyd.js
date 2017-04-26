$(document).ready(function() {

	// "Loading"

	setTimeout(function() {
		$('body').addClass('loaded');
    }, 1000);

	setTimeout(function() {
		$('h1').addClass('loaded');
    }, 2000);

	setTimeout(function() {
		$('h1').removeClass('loaded');
    }, 4000);


});