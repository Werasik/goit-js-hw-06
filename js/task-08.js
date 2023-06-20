const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elementsObject = {};

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
    return;
  }

  elementsObject.email = email.value;
  elementsObject.password = password.value;
  console.log(elementsObject);
  event.currentTarget.reset();
}
