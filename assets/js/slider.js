(function () {
	"use strict"; // IEF + strict mode.

	// Get the number of all the slides.
	var allSlides = document.querySelectorAll(".slider-items").length; 

	// Get the previous button.
	var prevButton = document.getElementById("previous");

	// Get the next button.
	var nextButton = document.getElementById("next");
	
	// Enable to set a number for each slides.
	var currentSlideIndex = 1;

	// Hide previous button if we've reached the first slide.
	if (currentSlideIndex === 1) {
		prevButton.classList.add("slider-wrapper-arrow--hidden");
	}

	// Get previous slide.
	var previousSlide = function () {
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

	// Get next slide.
	var nextSlide = function () {
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

	// When clicking on previous button, call previousSlide().
	prevButton.addEventListener("click", previousSlide);

	// When clicking on next button, call nextSlide().
	nextButton.addEventListener("click", nextSlide);

}());