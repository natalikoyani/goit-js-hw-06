const inputRange = document.getElementById('font-size-control')
const outputText = document.getElementById('text')

inputRange.addEventListener('input', onRangeChange)

outputText.style.fontSize = `${inputRange.value}px`

function onRangeChange(event) {
    outputText.style.fontSize = `${event.currentTarget.value}px`
}



