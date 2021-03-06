"use strict";
(function () {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  let modal = document.getElementById("myModal");

  document.getElementById("myBtn").addEventListener("click", function () {
    modal.classList.add("block");
  });
  document.getElementById("modalClose").addEventListener("click", function () {
    modal.classList.remove("block");
  });
  window.addEventListener("click", function () {
    if (event.target == modal) {
      modal.classList.remove("block");
    }
  });

  const fadeElements = document.querySelectorAll("#wrapper > *");

  window.addEventListener("scroll", function () {
    for (const elem of fadeElements) {
      if (elem.offsetTop + elem.offsetHeight < window.scrollY + 150) {
        elem.classList.add("fadeOut");
      } else {
        elem.classList.remove("fadeOut");
      }
    }
  });

  document.querySelectorAll(".pageNav").forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  function navDisappear() {
    let navButton = document.getElementById("nav-bar");
    let navButtonText = document.getElementById("nav-button");
    if (navButton.classList.contains("hide")) {
      navButton.classList.remove("hide");
      navButtonText.textContent = "Hide Navigation";
    } else {
      navButton.classList.add("hide");
      navButtonText.textContent = "Show Navigation";
    }
  }
  document.getElementById("nav-button").addEventListener("click", navDisappear);

  let bioIsClicakble = true;

  function collapseFunc() {
    if (bioIsClicakble) {
      bioIsClicakble = false;
      let bioContainer = document.getElementById("bioContainer");
      let collapseButtonText = document.getElementById("collapsible");
      if (bioContainer.classList.contains("open")) {
        bioContainer.classList.remove("open");
        sleep(775).then(function () {
          collapseButtonText.textContent = "Show Bio";
          bioIsClicakble = true;
        });
      } else {
        bioContainer.classList.add("open");
        collapseButtonText.textContent = "Hide Bio";
        bioIsClicakble = true;
      }
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
