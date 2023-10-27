lucide.createIcons()

let select = document.querySelector('.select'),
selectedValue = document.getElementById('selected-value'),
optionsViewButton = document.getElementById('options-view-button'),
inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach(input => {
    input.addEventListener('click', event => {
        selectedValue.textContent = input.dataset.label

        const inMouseOrTouch = 
        event.pointerType == "mouse" ||
        event.pointerType == "touch"

        inMouseOrTouch && optionsViewButton.click()
    })
})

