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

const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
const body = document.body;
const aboutBtn = document.getElementById("about");
const cardsBtn = document.getElementById("cardsLink");

burgerBtn.onclick = function () {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("overflow-hide");
};

cardsBtn.onclick = function () {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("overflow-hide");
};

aboutBtn.onclick = function () {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("overflow-hide");
};


