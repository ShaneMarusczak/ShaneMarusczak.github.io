(function () {

  var modal = document.getElementById('myModal');
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const fadeElements = document.querySelectorAll('#wrapper > *');
  console.log({ fadeElements });

  window.onscroll = function () {
    console.log('scrolling...');

    for (let elem of fadeElements) {
      if (elem.offsetTop + elem.offsetHeight < window.scrollY + 150) {
        console.log('hide', elem);
        elem.classList.add('fadeOut');
      }
      else {
        console.log('show', elem);
        elem.classList.remove('fadeOut');
      }
    }
  };


  $(document).ready(function () {
    $("a").on('click', function (event) {

      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          window.location.hash = hash;
        });
      }
    });
  });

})();


function navDisappear() {
  var navButton = document.getElementById("nav-bar");
  var navButtonText = document.getElementById('nav-button');
  if (navButton.style.display === "none") {
    navButton.style.display = "block";
    navButtonText.innerHTML = 'Hide Navigation';
  } else {
    navButton.style.display = "none";
    navButtonText.innerHTML = 'Show Navigation';

  }
}

function collapseFunc() {
  var collapseButton = document.getElementById("bio");
  var collapseButtonText = document.getElementById('collapsible');
  if (collapseButton.style.maxHeight === "17rem") {
    collapseButton.style.maxHeight = "0px";
    collapseButtonText.innerHTML = 'Show Bio';
  } else {
    collapseButton.style.height = "auto";
    collapseButton.style.maxHeight = "17rem";
    collapseButtonText.innerHTML = 'Hide Bio';

  }

}


var slideIndex = [1,1,1,1];
var slideClass = ["vpscreenshot", "vpsscreenshot", "vpascreenshot", "springscreenshot"]
showDivs(1,0);
showDivs(1,1);
showDivs(1,2);
showDivs(1,3);

function plusDivs(n, num) {
    showDivs(slideIndex[num] += n, num);
}

function showDivs(n, num) {
    var list = document.getElementsByClassName(slideClass[num]);
    if (n > list.length) {
      slideIndex[num] = 1
    } 
    if (n < 1) {
      slideIndex[num] = list.length
    };
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "none"; 
    }
    list[slideIndex[num]-1].style.display = "block"; 
}






