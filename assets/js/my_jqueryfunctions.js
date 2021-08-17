$(document).ready(function () {
	console.log("venobox calling");
	$(".venobox").venobox();
});

$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});

$(".testimonials-carousel").owlCarousel({
	autoplay: true,
	dots: true,
	loop: true,
	autoplayTimeout: 3000,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		900: {
			items: 3,
		},
	},
});

// Porfolio isotope and filter
$(window).on("load", function () {
	var portfolioIsotope = $(".portfolio-container").isotope({
		itemSelector: ".portfolio-item",
		layoutMode: "fitRows",
	});

	$("#portfolio-flters li").on("click", function () {
		$("#portfolio-flters li").removeClass("filter-active");
		$(this).addClass("filter-active");

		portfolioIsotope.isotope({
			filter: $(this).data("filter"),
		});
		aos_init();
	});
});

window.onload = function () {
	Particles.init({
		selector: ".background",
		color: "white",
		speed: 1,
		connectParticles: false,
		maxParticles: 250,
	});
};
