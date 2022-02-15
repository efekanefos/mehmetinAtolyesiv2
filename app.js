/* Category Header */

const categoryHeader__list = document.querySelector(".categoryHeader--list");

categoryHeader__list.addEventListener("click", activeFunction);

function activeFunction(event) {
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");
}
/* Category Header */

/* DoubleContent*/

const leftContent = document.querySelector(".doubleContent__left--img");
const rightContent = document.querySelector(".doubleContent__right--img");

function displayDoubleContent(e) {
  //* Left Side
  const slideInAtLeft = window.scrollY + window.innerHeight - leftContent.height * 1.5;
  const imageBottomLeft = leftContent.offsetTop + leftContent.height * 2.1;
  const isHalfShownLeft = slideInAtLeft > leftContent.offsetTop;
  const isNotScrolledPastLeft = window.scrollY < imageBottomLeft;
  //* Right Side
  const slideInAtRight = window.scrollY + window.innerHeight - rightContent.height * 1.5;
  const imageBottomRight = rightContent.offsetTop + rightContent.height * 2.1;
  const isHalfShownRight = slideInAtRight > rightContent.offsetTop;
  const isNotScrolledPastRight = window.scrollY < imageBottomRight;
  if (isHalfShownLeft && isNotScrolledPastLeft) {
    leftContent.classList.add("active");
  } else {
    leftContent.classList.remove("active");
  }
  if (isHalfShownRight && isNotScrolledPastRight) {
    rightContent.classList.add("active");
  } else {
    rightContent.classList.remove("active");
  }
}

window.addEventListener("scroll", displayDoubleContent);
/* DoubleContent*/
