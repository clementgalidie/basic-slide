(function () {
	"use strict"; // IEF + strict mode.

	// Get the number of all the slides.
	var slides = document.querySelectorAll(".slider-items").length; 
	
	// Enable to set a number for each slides.
	var slidesNumber = 1;

	// Get the previous button.
	var prevButton = document.getElementById("previous");

	// Get the next button.
	var nextButton = document.getElementById("next");

	if (slidesNumber === 1) {
		prevButton.classList.add("slider-arrow--hidden");
	}

	if (slidesNumber < 5) {
			nextButton.classList.remove("slider-arrow--hidden");
	}

	// Get previous slide.
	var previousSlide = function () {
		slidesNumber--;
		var visibleSlide = document.querySelector(".slider-items--visible");
		var previousVisibleSlide = visibleSlide.previousSibling.previousSibling;
		if (previousVisibleSlide.nodeName.toLowerCase() === "li") {
			previousVisibleSlide.classList.add("slider-items--visible");
		}
		visibleSlide.classList.remove("slider-items--visible");
	}

	// Get next slide.
	var nextSlide = function () {
		slidesNumber++;

		// Show previous button.
		prevButton.classList.remove("slider-arrow--hidden");

		var visibleSlide = document.querySelector(".slider-items--visible");
		var nextVisibleSlide = visibleSlide.nextSibling.nextSibling;
		if (nextVisibleSlide.nodeName.toLowerCase() === "li") {
			nextVisibleSlide.classList.add("slider-items--visible");
		}
		visibleSlide.classList.remove("slider-items--visible");

		// Hide next button when we reached the last slide.
		if (slidesNumber === slides) {
			nextButton.classList.add("slider-arrow--hidden");
		}
	}

	// When clicking on previous button, call previousSlide().
	prevButton.addEventListener("click", previousSlide);

	// When clicking on next button, call nextSlide().
	nextButton.addEventListener("click", nextSlide);

}());