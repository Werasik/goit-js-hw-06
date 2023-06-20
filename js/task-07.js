const textInput = document.querySelector("#font-size-control");
const htmlText = document.querySelector("#text");
textInput.addEventListener("input", (event) => {
  const size = textInput.value;
  htmlText.style.fontSize = `${size}px`;
});
