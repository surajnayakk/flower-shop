const menuHamburger = document.querySelector(".menu_hamburger");
menuHamburger?.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav?.classList.toggle("open");
  menuHamburger.classList.toggle("open");
});

const icons = document.querySelectorAll(".fa-plus");
icons.forEach((icon) => {
  icon?.addEventListener("click", () => {
    const answer = icon.parentElement.nextElementSibling;
    const isAnswerOpen = answer.classList.contains("open");
    const answers = document.querySelectorAll(".answer");
    answers?.forEach((answer) => {
      answer.classList.remove("open");
    })
    if (!isAnswerOpen) {
      answer?.classList.add("open");

    }
  });
});
