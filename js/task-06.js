const textInput = document.getElementById('validation-input')
const validLength = textInput.getAttribute('data-length')

textInput.addEventListener('blur', onBlurChange)

function onBlurChange(event) {
    const currentLength = event.target.value.trim().length
    if (Number(validLength) === currentLength) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.remove('valid')
        textInput.classList.add('invalid')
    }
}