const navbarMenu = document.getElementById("navbar-menu");
const navbarDownload = document.getElementById("navbar-download")
const navbarToggleButton = document.getElementById("menubar");
const navbarCloseButton = document.getElementById("menubarhidden")

navbarToggleButton.addEventListener('click', function toggle() {
    navbarMenu.style.display = "block";
    navbarDownload.style.display = "block";
    navbarToggleButton.classList.add("menubarhidden")
    navbarToggleButton.classList.remove("menubar")
    navbarCloseButton.classList.add("menubar")
    navbarCloseButton.classList.remove("menubarhidden")
  });

navbarCloseButton.addEventListener('click', function toggleBack() {
  navbarMenu.style.display = "none";
  navbarDownload.style.display = "none";
  navbarToggleButton.classList.remove("menubarhidden")
  navbarToggleButton.classList.add("menubar")
  navbarCloseButton.classList.remove("menubar")
  navbarCloseButton.classList.add("menubarhidden")
});
