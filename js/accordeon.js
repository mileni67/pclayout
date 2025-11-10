const contents = document.querySelectorAll(".program-line__content");

contents.forEach((elem) => {
  const title = elem.querySelector(".program-line__title");
  const descr = elem.querySelector(".program-line__descr");

  title.addEventListener("click", () => {
    contents.forEach((item) => {
      const otherDescr = item.querySelector(".program-line__descr");
      if (otherDescr !== descr) {
        otherDescr.classList.remove("active");
      }
    });
    descr.classList.toggle("active");
  });
});
