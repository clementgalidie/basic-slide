(function () {
	"use strict"; // IEF + strict mode.

	// Get the number of all the slides.
	var allSlides = document.querySelectorAll(".slider-items").length; 

	// Get the previous button.
	var prevButton = document.getElementById("previous");

	// Get the next button.
	var nextButton = document.getElementById("next");
	
	// Index of the currently displayed slide.
	var currentSlideIndex = 1;

	// Hide previous button if we've reached the first slide.
	if (currentSlideIndex === 1) {
		prevButton.classList.add("slider-wrapper-arrow--hidden");
	}

	// Show the previous slide.
	var showPreviousSlide = function () {
		currentSlideIndex--;
		var visibleSlide = document.querySelector(".slider-items--visible");
		var previousVisibleSlide = visibleSlide.previousSibling.previousSibling;
		if (previousVisibleSlide.nodeName.toLowerCase() === "li") {
			previousVisibleSlide.classList.add("slider-items--visible");
		}
		visibleSlide.classList.remove("slider-items--visible");

		// Show next button while currentSlideIndex !== 5.
		if (currentSlideIndex < allSlides) {
			nextButton.classList.remove("slider-wrapper-arrow--hidden");
		}

		// Hide previous button if we're on the first slide.
		if (currentSlideIndex === 1) {
			prevButton.classList.add("slider-wrapper-arrow--hidden");
		}
	}

	// Show the next slide.
	var showNextSlide = function () {
		currentSlideIndex++;
		var visibleSlide = document.querySelector(".slider-items--visible");
		var nextVisibleSlide = visibleSlide.nextSibling.nextSibling;
		if (nextVisibleSlide.nodeName.toLowerCase() === "li") {
			nextVisibleSlide.classList.add("slider-items--visible");
		}
		visibleSlide.classList.remove("slider-items--visible");

		// Hide next button if we've reached the last slide.
		if (currentSlideIndex === allSlides) {
			nextButton.classList.add("slider-wrapper-arrow--hidden");
		}

		// Show previous button while currentSlideIndex !== 1.
		if (currentSlideIndex > 1) {
			prevButton.classList.remove("slider-wrapper-arrow--hidden");
		}
	}

	// When clicking on previous button, call showPreviousSlide().
	prevButton.addEventListener("click", showPreviousSlide);

	// When clicking on next button, call showNextSlide().
	nextButton.addEventListener("click", showNextSlide);

}());