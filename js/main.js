$( document ).ready(function() {
	// Switch out main content when clicking on side nav
	$("#sideNav a").click(function () {
		var isActiveTab = $(this).hasClass("active");
		var idname = $(this).data('divid');

		if (!isActiveTab) {
			$("#sideNav ul a").removeClass("active");
			$(this).addClass("active");
		}

		// Scroll to photos
		$('html, body').animate({
			scrollTop: $("#mainContent").offset().top
		}, 2000);

		// Show related photos, hide others
		$("#" + idname).show().siblings().hide();
	});
});