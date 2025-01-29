document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    // Here you can add code to handle form submission, like sending data to a server or displaying a confirmation message
    alert("Form submitted!");
  });
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
  