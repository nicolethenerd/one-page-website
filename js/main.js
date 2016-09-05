// Set up the nav scrolling effect
$("nav").onePageNav();

var menu = $("nav ul");

// Toggle the menu when clicked
$("#menu-icon").click(function() {
	menu.slideToggle();
});

// Fix bug where menu disappears if you open and close it on a small screen
// When I resize the window
$(window).resize(function() {
	var width = $(window).width();

	// if window width is > 768 and the menu is hidden
	if(width > 768 && menu.is(":hidden")) {
		menu.removeAttr("style");
	}

});

// Add parallax (stellar.js)
$.stellar();

// Add wow.js animations
new WOW().init();