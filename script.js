(function() {

    // Select all elements directly within the body
    const fadeElements = document.querySelectorAll('#wrapper > *');
    console.log({ fadeElements });
  
    window.onscroll = function() {
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
  
  })();