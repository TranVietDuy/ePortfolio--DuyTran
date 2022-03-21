// Swiper
var swiper = new Swiper(".projects-content", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Header Background Change
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
// Dark Theme
const themeButton = document.getElementById("theme-btn");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
// Menu Open
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};


// Send Form

function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_p95efw5",
      "template_pxrghzc",
      event.target,
      "s6x7VS0BL0YPA-tUk"
    )
    .then(function() {
      Swal.fire({
            icon: "success",
            title: "Email Sent Successfully",
            text: "Thanks for the message! Looking forward to speaking to you soon.",
          });
    }, function(error) {
      Swal.fire({
            title: "Oops...",
            text: "The email service is temporarily unavailable. Please contact me directly on sendtoduy@gmail.com"
          });
    });
};  

  






