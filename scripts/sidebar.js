var openMenu = function () {
	display("#tsa");
}

var display = function (what) {
	$(".menu-button").off("click").click(function (){
		closeMenu();
	});
	if (!$("#sidebar_2").hasClass("_nav_open")) {
		/*$("#sidebar_2").animate({
		width: 200
	}, 500);*/
	$(".sidebar").removeClass("_hidden").addClass("_not_hidden");
	$(".moves-with-nav").addClass("_nav_open");
	$("li._root_active").removeClass("_root_active");
	setTimeout(function () {
		$(what).fadeIn();
		$(what).addClass("_nav_active");
		$(what+"_nav").addClass("_root_active");
	}, 400);
} else {
	$("._nav_active").fadeOut();
	$("._nav_active").removeClass("_nav_active");
	$("li._root_active").removeClass("_root_active");
	setTimeout(function () {
		$(what).fadeIn();
		$(what).addClass("_nav_active");
		$(what+"_nav").addClass("_root_active");
	}, 300);
}
}

closeMenu = function () {
	$("._nav_active").fadeOut();
	$("._nav_active").removeClass("_nav_active");
	$(".menu-button").off("click").click(function (){
		openMenu();
	});
	setTimeout(function () {
		$(".moves-with-nav").removeClass("_nav_open");
		$("li._root_active").removeClass("_root_active");
		$("._not_hidden").removeClass("_not_hidden");
		if ($(window).scrollTop()>0) {
			$(".sidebar").addClass("_hidden");
		}
	}, 400);
}

var showHideNav = function showHideNav () {
	if ($(window).scrollTop() > 0) {
		$(".sidebar:not(._not_hidden)").addClass("_hidden");
	} else {
		$(".sidebar").removeClass("_hidden");
	}
}

$(function () {



	$(window).resize(function (){
		if ($(window).width()>567 && $(window).width()<1024) {
			$(window).on("scroll", showHideNav);
		} else {
			window.off("scroll", showHideNav);
		}
	});
	$(window).resize();

	$(".menu-button").click(function (){
		openMenu();
	});

});
