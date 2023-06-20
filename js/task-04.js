const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
let counterValue = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  counterValue.innerHTML--;
});

buttonIncrement.addEventListener("click", () => {
  counterValue.innerHTML++;
});
