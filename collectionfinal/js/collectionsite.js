$( document ).ready(function() {

	$(".hamburger").on("click", () => {
        $(".menudisplay").fadeToggle(900);
    	$(".imagefeed1, .imagefeed2, .imagefeed3, .imagefeed4, .imagefeed5, .infosection, .imgdisps, .lftarro, .rgtarro").toggleClass("menublur");
    	$(".lftarro, .rgtarro").toggleClass("goawaybuttons")
    	console.log()
	});

	$(".logopt1").on("mouseenter", () => {
		$(".slide").css("display", "block");
	});

	$(".logopt1").on("mouseleave", () => {
		$(".slide").css("display", "none");
	});

	$(".imagefeed1").on("mouseenter", () => {
		$(".imagefeed2, .imagefeed3, .imagefeed4, .imagefeed5").addClass("focusblur");
	});

	$(".imagefeed1").on("mouseleave", () => {
		$(".imagefeed2, .imagefeed3, .imagefeed4, .imagefeed5").removeClass("focusblur");
	});

	$(".imagefeed2").on("mouseenter", () => {
		$(".imagefeed1, .imagefeed3, .imagefeed4, .imagefeed5").addClass("focusblur");
	});

	$(".imagefeed2").on("mouseleave", () => {
		$(".imagefeed1, .imagefeed3, .imagefeed4, .imagefeed5").removeClass("focusblur");
	});

	$(".imagefeed3").on("mouseenter", () => {
		$(".imagefeed2, .imagefeed1, .imagefeed4, .imagefeed5").addClass("focusblur");
	});

	$(".imagefeed3").on("mouseleave", () => {
		$(".imagefeed2, .imagefeed1, .imagefeed4, .imagefeed5").removeClass("focusblur");
	});

	$(".imagefeed4").on("mouseenter", () => {
		$(".imagefeed2, .imagefeed3, .imagefeed1, .imagefeed5").addClass("focusblur");
	});

	$(".imagefeed4").on("mouseleave", () => {
		$(".imagefeed2, .imagefeed3, .imagefeed1, .imagefeed5").removeClass("focusblur");
	});

	$(".imagefeed5").on("mouseenter", () => {
		$(".imagefeed2, .imagefeed3, .imagefeed4, .imagefeed1").addClass("focusblur");
	});

	$(".imagefeed5").on("mouseleave", () => {
		$(".imagefeed2, .imagefeed3, .imagefeed4, .imagefeed1").removeClass("focusblur");
	});

});