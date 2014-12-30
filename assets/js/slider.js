(function () {
	"use strict"; // IEF + strict mode.

	// Get all the slides.
	var slides = document.querySelectorAll(".slider-items");
	
	// Get the previous button.
	var prevButton = document.getElementById("previous");
	// Get the next button.
	var nextButton = document.getElementById("next");

	// Get previous slide.
	var previousSlide = function () {

	}

	// Get next slide.
	var nextSlide = function () {
		var visibleSlide = document.querySelector(".slider-items--visible");
		var nextVisibleSlide = visibleSlide.nextSibling.nextSibling;
		nextVisibleSlide.classList.add("slider-items--visible");
		visibleSlide.classList.remove("slider-items--visible");
	}

	nextButton.addEventListener("click", nextSlide);

}());