const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    const elementsArray = []
    const {elements: {email, password}} = event.currentTarget
    elementsArray.push(email.value, password.value)
    
    if(email.value === "" || password.value === ""){
        alert("Заповніть всі поля")
    }
    
    else{
        event.currentTarget.reset();
        console.log(elementsArray)
    }
}