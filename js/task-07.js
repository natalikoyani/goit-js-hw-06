const inputRange = document.getElementById('font-size-control')
const outputText = document.getElementById('text')

inputRange.addEventListener('input', onRangeChange)

function onRangeChange(event) {
    outputText.style.fontSize = `${event.currentTarget.value}px`
}





