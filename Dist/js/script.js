
// const kalboNav = document.querySelectorAll(".kalbo__nav__link");
// const kalboContent = document.querySelectorAll(".kalbo__item__content");
// kalboNav.forEach((kalbo) => {
//   kalbo.addEventListener("click", () => {
//     removeActiveKalbo();
//     kalbo.style = "transition:.5s ease";
//     kalbo.classList.add("active");
//     kalbo.style = "transition:.5s ease";
//     const activeContent = document.querySelector(`#${kalbo.id}-content`);
//     removeActiveContent();
//     activeContent.classList.add("active");
//   });
// });

// function removeActiveKalbo() {
//   kalboNav.forEach((kalbo) => {
//     kalbo.classList.remove("active");
//   });
// }

// function removeActiveContent() {
//   kalboContent.forEach((kalbo) => {
//     kalbo.classList.remove("active");
//   });
// }

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const hair = document.querySelector(".buhok");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  hair.classList.toggle("open");
});

const drop = document.querySelectorAll(".drop__wrapper .drop__text h2");
drop.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});

const coffeeNav = document.querySelectorAll(".coffee__nav__link");
const coffeeItem = document.querySelectorAll(".coffee__sample__content");
coffeeforEach((coffee) => {
  coffee.addEventListener("click", () => {
    removeActivecoffee();
    coffee.style = "transition:.5s ease";
    coffee.classList.add("active");
    coffee.style = "transition:.5s ease";
    const activeContent = document.querySelector(`#${coffee.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});
function removeActivecoffee() {
  coffeeNav.forEach((coffee) => {
    coffee.classList.remove("active");
  });
}

function removeActiveContent() {
  coffeeContent.forEach((coffee) => {
    coffee.classList.remove("active");
  });
}

// const coffee__nav = document.querySelectorAll(".coffee__nav .coffee__sample__item");
// drop.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.nextElementSibling.classList.toggle("open");
//     link.querySelector("i").classList.toggle("open");
//   });
// });

