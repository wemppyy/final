const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
const body = document.body;

burgerBtn.onclick = () => {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("overflow");
};

const catalog = document.querySelectorAll(".catalog__row-column");

const kids = document.querySelectorAll(".kid");
const childs = document.querySelectorAll(".child");
const adults = document.querySelectorAll(".adult");

function filter(data) {
  if (data === "kid") {
    kids.forEach((element) => {
      element.classList.add("active");
    });
    childs.forEach((element) => {
      element.classList.remove("active");
    });
    adults.forEach((element) => {
      element.classList.remove("active");
    });
  } else if (data === "child") {
    kids.forEach((element) => {
      element.classList.remove("active");
    });
    childs.forEach((element) => {
      element.classList.add("active");
    });
    adults.forEach((element) => {
      element.classList.remove("active");
    });
  } else {
    kids.forEach((element) => {
      element.classList.remove("active");
    });
    childs.forEach((element) => {
      element.classList.remove("active");
    });
    adults.forEach((element) => {
      element.classList.add("active");
    });
  }
}

catalog.forEach((element) => {
  filter(element.getAttribute("data-type"));
  element.onclick = function () {
    catalog.forEach((i) => {
      i.classList.remove("active");
    });
    element.classList.add("active");
    filter(element.getAttribute("data-type"));
  };
});

const filterRangeSliders = document.querySelectorAll(".filter__range-slider");
const minValText = document.querySelector(".filter__time--one");
const maxValText = document.querySelector(".filter__time--two");

maxValText.textContent = filterRangeSliders[0].value;
minValText.textContent = filterRangeSliders[1].value;

filterRangeSliders[0].onclick = () => {
  if (
    parseInt(filterRangeSliders[0].value) <=
    parseInt(filterRangeSliders[1].value)
  ) {
    filterRangeSliders[0].value = parseInt(filterRangeSliders[1].value) + 1;
    maxValText.textContent = filterRangeSliders[0].value;
  } else {
    maxValText.textContent = filterRangeSliders[0].value;
  }
};
filterRangeSliders[1].onclick = () => {
  if (
    parseInt(filterRangeSliders[1].value) >=
    parseInt(filterRangeSliders[0].value)
  ) {
    filterRangeSliders[1].value = parseInt(filterRangeSliders[0].value) - 1;
    maxValText.textContent = filterRangeSliders[1].value;
  } else {
    minValText.textContent = filterRangeSliders[1].value;
  }
};

const filterBtn = document.querySelector(".filter__burger");
const filterBox = document.querySelector(".filter");

filterBtn.onclick = () => {
  filterBox.classList.toggle("active");
};
