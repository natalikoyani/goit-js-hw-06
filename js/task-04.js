let counterValue = 0
const spanValue = document.querySelector("#value")
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

const decreaseValue = () => {
    counterValue -= 1
    spanValue.textContent = counterValue
}

const increaseValue = () => {
    counterValue += 1
    spanValue.textContent = counterValue
}

decrementBtn.addEventListener("click", decreaseValue)
incrementBtn.addEventListener("click", increaseValue)