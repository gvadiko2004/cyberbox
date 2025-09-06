// ===== Меню =====
const menu = document.querySelector(".header-nav");
const btnOpenMenu = document.querySelector(".btn-open");
const btnCloseMenu = document.querySelector(".btn-close-menu");

const itemClose = document.querySelectorAll(".header__list-item");

if (btnOpenMenu && menu) {
  btnOpenMenu.addEventListener("click", () => {
    menu.classList.add("active");
  });
}

if (btnCloseMenu && menu) {
  btnCloseMenu.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

// ===== Формы =====
const btnForms = document.querySelectorAll(".btn-form"); // кнопки/ссылки открытия
const form = document.querySelector(".form"); // сама форма
const btnCloseForm = document.querySelector(".btn-close-form"); // кнопка закрытия

if (form) {
  // открыть форму
  btnForms.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // чтобы ссылка не переходила
      form.classList.add("active");
    });
  });

  // закрыть форму
  if (btnCloseForm) {
    btnCloseForm.addEventListener("click", () => {
      form.classList.remove("active");
    });
  }
}

itemClose.forEach((item) => {
  item.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

// open-popap-1

