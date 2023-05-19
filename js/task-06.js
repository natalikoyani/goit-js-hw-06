// const textInput = document.getElementById('validation-input')
// const validLength = textInput.getAttribute('data-length')

// textInput.addEventListener('blur', onBlurChange)

// function onBlurChange(event) {
//     const currentLength = event.target.value.trim().length
//     if (Number(validLength) === currentLength) {
//         textInput.classList.add('valid')
//         textInput.classList.remove('invalid')
//     } else {
//         textInput.classList.remove('valid')
//         textInput.classList.add('invalid')
//     }
// }



const inputTextEl = document.getElementById("validation-input");

inputTextEl.addEventListener("blur", inputValidation);

function inputValidation(event) {
    const dataLength = inputTextEl.getAttribute("data-length");
    const valueLength = event.target.value.trim().length;
    Number(dataLength) === valueLength
        ? inputTextEl.classList.add("valid")
        : inputTextEl.classList.add("invalid");
}