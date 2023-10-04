const navbar = document.getElementById("navbar");
const navbarLogo = document.getElementsByClassName("logo-navbar")[0]
const downloadButton = document.getElementById("download-later");

// Detects if user has scrolled past 50 px
function hasScrolled() {
  if (window.scrollY > 50) {
    return true;
  } else {
  return false;
  }
};

// If user has scrolled down, navbar gets shrunk, and the changes are reverted when the user scrolls to the top of the page
function shrinkNavbar() {
  if (hasScrolled()) {
      navbar.classList.add('navbar-shrunk');
      navbarLogo.classList.add('logo-shrunk');
      downloadButton.classList.add('button-visible');
  } else {
      navbar.classList.remove('navbar-shrunk');
      navbarLogo.classList.remove('logo-shrunk');
      downloadButton.classList.remove('button-visible');
      navbar.classList.add('navbar-unshrunk');
      navbarLogo.classList.add('logo-unshrunk');
  }
};


document.addEventListener('scroll', shrinkNavbar);
