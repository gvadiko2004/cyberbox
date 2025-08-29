gsap.registerPlugin(ScrollTrigger);

  // Анимация логотипа и пунктов меню с fromTo
  gsap.fromTo(
    ".header__logo, .header__list-item, .btn-open span",  // элементы
    { y: -50, opacity: 0 },                               // начальное состояние
    { 
      y: 0, 
      opacity: 1, 
      stagger: 0.1,                                       // последовательное появление
      duration: 1, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".header",                               // триггер
        start: "top top",                                 // когда верх хедера достигает верха viewport
        toggleActions: "play none none none"
      }
    }
  );