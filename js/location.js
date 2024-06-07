const locationBtn = document.querySelector(".location__box");
const locationMenu = document.querySelector(".location-menu");
const burgerLocationBtn = document.querySelector(".burger-location__box");

locationBtn.onclick = () => {
  var rect = locationBtn.getBoundingClientRect();
  locationMenu.classList.toggle("active");
  console.log(rect.top + "px");
  locationMenu.style.top = parseInt(rect.top) + 150 + "px";
  locationMenu.style.left = parseInt(rect.left) - 150 + "px";
};

burgerLocationBtn.onclick = () => {
  var rect = burgerLocationBtn.getBoundingClientRect();
  locationMenu.classList.toggle("active");
  console.log(rect.top + "px");
  locationMenu.style.top = parseInt(rect.top) + 140 + "px";
  locationMenu.style.left = parseInt(rect.left) - 150 + "px";
  locationMenu.style.zIndex = 9999;
};

const locationItems = document.querySelectorAll(".location-item");

locationItems.forEach((element) => {
  let city = element.querySelector(".location-text").textContent;
  element.onclick = () => {
    locationBtn.querySelector('.location__title').textContent = city;
    burgerLocationBtn.querySelector(".location__title").textContent = city;
  };
});
