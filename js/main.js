$( document ).ready(function() {
	$("#sideNav a").click(function () {
		var isActiveTab = $(this).hasClass("active")
		console.log("isActiveTab " + isActiveTab);
		if (!isActiveTab) {
			$("#sideNav ul a").removeClass("active");
			$(this).addClass("active");
		}

		var idname = $(this).data('divid');
		$("#" + idname).show().siblings().hide();
	});
});