names = ['Вхід', 'Реєстрація']

const swiper = new Swiper('.swiper', {
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + names[index] + '</span>';
    },
  },
  allowTouchMove: false,
});``