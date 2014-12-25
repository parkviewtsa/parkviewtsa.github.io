$(function () {
	$(window).scroll(function(e) {
		s = $(document).scrollTop();
		if (s > 200) {
			$("#intro").removeClass("_visible");
		}
		if (s < 200) {
			$("#intro").addClass("_visible");
		}
		if (s > 900) {
			$("#main").addClass("_visible");
		}
		if (s < 900) {
			$("#main").removeClass("_visible");
		}
		if (s > 1500) {
			$("#main").css({
				position:"absolute",
				top:"1600px"
			});
		}
		if (s < 1500) {
			$("#main").css({
				position:"fixed",
				top:"100px"
			});
		}
	});
});