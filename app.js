/* Category Header */

const categoryHeader__list = document.querySelector(".categoryHeader--list");

categoryHeader__list.addEventListener("click", activeFunction);

function activeFunction(event) {
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");
}
/* Category Header */

/* Slider */

/* Slider */
