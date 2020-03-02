/*eslint-disable no-undef */
/*eslint-disable operator-assignment */
/*eslint-disable no-implicit-globals */
/*eslint-disable no-unused-vars */
/*eslint-disable no-console */
/*eslint-disable prefer-destructuring */
"use strict";
(function () {

	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function () {
		modal.style.display = "block";
	};
	span.onclick = function () {
		modal.style.display = "none";
	};
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};

	const fadeElements = document.querySelectorAll("#wrapper > *");
	console.log({
		fadeElements
	});

	window.onscroll = function () {

		for (const elem of fadeElements) {
			if (elem.offsetTop + elem.offsetHeight < window.scrollY + 150) {
				elem.classList.add("fadeOut");
			} else {
				elem.classList.remove("fadeOut");
			}
		}
	};


	$(document).ready(function () {
		$("a").on("click", function (event) {

			if (this.hash !== "") {
				event.preventDefault();

				var {
					hash
				} = this;

				$("html, body").animate({
					"scrollTop": $(hash).offset().top
				}, 800, function () {

					window.location.hash = hash;
				});
			}
		});
	});

})();


function navDisappear() {
	var navButton = document.getElementById("nav-bar");
	var navButtonText = document.getElementById("nav-button");
	if (navButton.style.display === "none") {
		navButton.style.display = "block";
		navButtonText.innerHTML = "Hide Navigation";
	} else {
		navButton.style.display = "none";
		navButtonText.innerHTML = "Show Navigation";

	}
}

function collapseFunc() {
	var collapseButton = document.getElementById("bio");
	var collapseButtonText = document.getElementById("collapsible");
	if (collapseButton.classList.contains("open")) {
		collapseButton.classList.remove("open");
		collapseButtonText.innerHTML = "Show Bio";
	} else {
		collapseButton.classList.add("open");
		collapseButtonText.innerHTML = "Hide Bio";
	}

}


var slideIndex = [1, 1, 1, 1, 1];
var slideClass = ["vpscreenshot", "vpsscreenshot", "vpascreenshot", "springscreenshot", "wecanreaditpic"];
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);

function plusDivs(n, num) {
	showDivs(slideIndex[num] += n, num);
}

function showDivs(n, num) {
	var list = document.getElementsByClassName(slideClass[num]);
	if (n > list.length) {
		slideIndex[num] = 1;
	}
	if (n < 1) {
		slideIndex[num] = list.length;
	}
	for (var i = 0; i < list.length; i++) {
		list[i].style.display = "none";
	}
	list[slideIndex[num] - 1].style.display = "block";
}
