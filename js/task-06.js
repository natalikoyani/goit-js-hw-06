const textInput = document.getElementById('validation-input')
const validLength = textInput.getAttribute('data-length')

textInput.addEventListener('blur', onBlurChange)

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

// -------------------------------------------------------

// const validValue = function () {
//     textInput.classList.add('valid')
//     textInput.classList.remove('invalid')
// }

// const invalidValue = function () {
//     textInput.classList.add('valid')
//     textInput.classList.remove('invalid')
// }

// function onBlurChange(event) {
//     const currentLength = event.target.value.trim().length
//     Number(validLength) === currentLength ? validValue : invalidValue
// }

// --------------------------------------------------------

// function onBlurChange(event) {
//     const currentLength = event.target.value.trim().length;
//     const isValid = Number(validLength) === currentLength;
//     setValidityClass(isValid);
// }
// function setValidityClass(isValid) {
//     textInput.classList.toggle('valid', isValid);
//     textInput.classList.toggle('invalid', !isValid);
// }

// --------------------------------------------------------

function onBlurChange(event) {
    const currentLength = event.target.value.trim().length;
    const isValid = Number(validLength) === currentLength;
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
    textInput.classList.add(isValid ? 'valid' : 'invalid');
}