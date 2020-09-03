
//sets up our functions
function scrollNav(){
  var navbar = document.getElementsByClassName("navbar");
  var mainDOM = document.getElementsByTagName("MAIN")[0];
  navbar = navbar[0];
  console.log(navbar);

  var y = navbar.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset >= y) {
      navbar.classList.add("sticky-this");
      mainDOM.classList.add("push-up"); //smooth's the sticky when Y is met
    } else {
      navbar.classList.remove("sticky-this");
      mainDOM.classList.remove("push-up");
    }
  };
}

const alertButton = () => {
  window.alert("Hi, this page was made with the intention of just the 'display' and as such, back-end functions will not be implemented (like this form submission).");
}