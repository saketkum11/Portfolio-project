var navBtn = document.querySelector("#nav_button");
var sideNav = document.querySelector(".side_nav");
var closeBtn = document.querySelector(".cross_icon_btn");
var crossIcon = document.querySelector(".cross_icon");

navBtn.addEventListener("click", openSideNavigation);
closeBtn.addEventListener("click", closeNavigation);

function openSideNavigation() {
  sideNav.classList.remove("side_nav");
}
function closeNavigation() {
  crossIcon.classList.add("side_nav");
}
