
//sets up our functions
function scrollNav(){
  var navbar = document.getElementsByClassName("navbar");
  navbar = navbar[0];
  console.log(navbar);

  var y = navbar.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset >= y) {
      navbar.classList.add("sticky-this");
    } else {
      navbar.classList.remove("sticky-this");
    }
  };
}

