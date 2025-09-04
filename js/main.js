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

// Селекторы кнопок открытия
const buttons = [
  document.querySelector(".open-popap-1"),
  document.querySelector(".open-popap-2"),
  document.querySelector(".open-popap-3"),
  document.querySelector(".open-popap-4"),
];

// Селекторы попапов
const popups = [
  document.querySelector(".popap-1"),
  document.querySelector(".popap-2"),
  document.querySelector(".popap-3"),
  document.querySelector(".popap-4"),
];

// Добавляем обработчик открытия
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    popups[index].classList.add("active");
  });
});

// Добавляем обработчик закрытия для всех кнопок внутри попапов
popups.forEach((popup) => {
  const closeBtn = popup.querySelector(".btn-close-popup");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }
});
