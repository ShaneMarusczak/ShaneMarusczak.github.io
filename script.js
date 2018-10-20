(function () {

  // Select all elements directly within the body
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
    navButtonText.innerHTML ='Hide Navigation';
  } else {
    navButton.style.display = "none";
    navButtonText.innerHTML = 'Show Navigation';

  }
}