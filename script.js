function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const text = document.querySelector(".section__text__p2");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Coder";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Designer";
  }, 5000);
  setTimeout(() => {
    text.textContent = "Blogger";
  }, 7500);
  setTimeout(() => {
    text.textContent = "Creator";
  }, 10000); //1s = 1000 milliseconds

};
textLoad();
setInterval(textLoad, 14000);
