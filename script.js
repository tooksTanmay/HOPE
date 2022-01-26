let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
let navContainer = document.getElementById('nav-container');

let menuOpened = false;

burger.addEventListener("click", () => {
   if (!menuOpened) {
      nav.style.width = '100vw';
      nav.style.transition = '0.3s ease-in-out';
      navContainer.style.display = "block";
      menuOpened = true;
   } else {
      nav.style.width = "50px";
      navContainer.style.display = "none";
      menuOpened = false;
   }
});