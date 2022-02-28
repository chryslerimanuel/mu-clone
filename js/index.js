// ------------------------------------------ STICKY NAVBAR --------------------------------------------//

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("TopNav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// ----------------------------------------------------------------------------------------------------//

// ------------------------------------------ SEARCH NAVBAR -------------------------------------------//

var searchText = document.getElementById("SearchText");
var topNavSearch = document.getElementById("TopNavSearch");

searchText.onmouseover = function () {
  mouseOver();
};
topNavSearch.onmouseover = function () {
  mouseOver();
};
topNavSearch.onmouseout = function () {
  mouseOut();
};

const searchTimeout = setTimeout(mouseOut, 1000);

function mouseOut() {
  topNavSearch.style.display = "none";
}

function mouseOver() {
  topNavSearch.style.display = "flex";
  clearTimeout(searchTimeout);
}

// ----------------------------------------------------------------------------------------------------//
