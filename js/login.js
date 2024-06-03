const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
const body = document.body;

burgerBtn.onclick = () => {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("overflow");
};

names = ['Вхід', 'Реєстрація']

const swiper = new Swiper(".swiper", {
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + names[index] + "</span>";
    },
  },
  allowTouchMove: false,
});``