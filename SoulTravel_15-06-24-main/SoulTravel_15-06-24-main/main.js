const Menu = document.getElementById("menu");
const Links = document.getElementById("links");
const MenuIcon = Menu.querySelector("i");

Menu.addEventListener("click", () => {
  Links.classList.toggle("open");

  const isOpen = Links.classList.contains("open");

  MenuIcon.setAttribute("class", isOpen ? "fa-solid fa-x" : "fa-solid fa-bars");
});

Links.addEventListener("click", (e) => {
  Links.classList.remove("open");
  MenuIcon.setAttribute("class", "fa-solid fa-bars");
});

const ScrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".img-box img", {
  ...ScrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".content-box h1", {
  ...ScrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".content-box p", {
  ...ScrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".content-box form", {
  ...ScrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".content-box .bar", {
  ...ScrollRevealOption,
  delay: 2000,
});
