"use strict";
(function () {
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

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

        let { hash } = this;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
})();

(function () {
  function navDisappear() {
    let navButton = document.getElementById("nav-bar");
    let navButtonText = document.getElementById("nav-button");
    if (navButton.style.display === "none") {
      navButton.style.display = "block";
      navButtonText.textContent = "Hide Navigation";
    } else {
      navButton.style.display = "none";
      navButtonText.textContent = "Show Navigation";
    }
  }
  document.getElementById("nav-button").addEventListener("click", navDisappear);

  function collapseFunc() {
    let collapseButton = document.getElementById("bio");
    let collapseButtonText = document.getElementById("collapsible");
    if (collapseButton.classList.contains("open")) {
      collapseButton.classList.remove("open");
      collapseButtonText.textContent = "Show Bio";
    } else {
      collapseButton.classList.add("open");
      collapseButtonText.textContent = "Hide Bio";
    }
  }
  document
    .getElementById("collapsible")
    .addEventListener("click", collapseFunc);

  let slideIndex = [1, 1, 1, 1, 1];
  let slideClass = [
    "vpscreenshot",
    "vpsscreenshot",
    "vpascreenshot",
    "springscreenshot",
    "wecanreaditpic",
  ];
  showDivs(1, 0);
  showDivs(1, 1);
  showDivs(1, 2);
  showDivs(1, 3);
  showDivs(1, 4);

  function plusDivs(n, num) {
    showDivs((slideIndex[num] += n), num);
  }

  function showDivs(n, num) {
    let list = document.getElementsByClassName(slideClass[num]);
    if (n > list.length) {
      slideIndex[num] = 1;
    }
    if (n < 1) {
      slideIndex[num] = list.length;
    }
    for (let i = 0; i < list.length; i++) {
      list[i].style.display = "none";
    }
    list[slideIndex[num] - 1].style.display = "block";
  }
  document.getElementById("readLeft").addEventListener("click", function () {
    plusDivs(-1, 4);
  });
  document.getElementById("readRight").addEventListener("click", function () {
    plusDivs(1, 4);
  });
  document.getElementById("vpLeft").addEventListener("click", function () {
    plusDivs(-1, 0);
  });
  document.getElementById("vpRight").addEventListener("click", function () {
    plusDivs(1, 0);
  });

  document.getElementById("shelterLeft").addEventListener("click", function () {
    plusDivs(-1, 1);
  });
  document
    .getElementById("shelterRight")
    .addEventListener("click", function () {
      plusDivs(1, 1);
    });

  document.getElementById("amokLeft").addEventListener("click", function () {
    plusDivs(-1, 2);
  });
  document.getElementById("amokRight").addEventListener("click", function () {
    plusDivs(1, 2);
  });

  document.getElementById("springLeft").addEventListener("click", function () {
    plusDivs(-1, 3);
  });
  document.getElementById("springRight").addEventListener("click", function () {
    plusDivs(1, 3);
  });
})();
