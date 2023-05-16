let counterValue = 0
const buttonDecrement = document.querySelector("[data-action = 'decrement']")
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1
    const value = document.querySelector("#value")
    value.textContent = counterValue
}
)
const buttonIncrement = document.querySelector("[data-action = 'increment']")
buttonIncrement.addEventListener("click", () => {
    counterValue += 1
    const value = document.querySelector("#value")
    value.textContent = counterValue
})