const textInput = document.getElementById('name-input')
const textOutput = document.getElementById('name-output')

const onInputChange = () => {
    if (textInput.value.trim() === '') {
        textOutput.textContent = 'Anonymous'
    } else {
        textOutput.textContent = textInput.value;
    }
}

textInput.addEventListener('input', onInputChange)
