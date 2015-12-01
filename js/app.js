$(document).ready(function () {
	$("button").on("click", function () {
		console.log("click");
		var section = $(this).closest("section");
		section.prop("hidden", true);
		section.next().prop("hidden", false);
	});
});