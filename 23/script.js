let currentStep = 0

const formSteps = document.querySelectorAll('.form-step')
const form = document.querySelector('form')

// steps

form.addEventListener('click', (e) => {
    if(!e.target.matches('[data-action]')) {
        return
    }

    const actions = {
        next() {
            // if(currentStep > formSteps.length) {
            //     return
            // }
            if (!isValidInputs()) {
                return 
            }
            currentStep++
        },
        prev() {
            // if(currentStep == 0) {
            //     return
            // }
            currentStep--
        }
    }

    const action = e.target.dataset.action
    actions[action]()   
    
    updateActiveStep()
    updateProgressStep()
})

// Envio do formulario
form.addEventListener('submit', () => {
    e.preventDefault()

    const data = new FormData(form)
    alert(`Obrigado ${data.get('name')}!`)
})

// update steps
function updateActiveStep() {
    formSteps.forEach(step => step.classList.remove('active'))
    formSteps[currentStep].classList.add('active')
}

const progressStep = document.querySelectorAll('.step-progress [data-step]')
function updateProgressStep() {
    progressStep.forEach((step,idx) => {
        step.classList.remove('active')
        step.classList.remove('done')

        if(idx < currentStep + 1 ) {
            step.classList.add('active')
        }

        if(idx < currentStep) {
            step.classList.add('done')
        }
        
    })
}

//cvalidação

function isValidInputs() {
    const currentFormStep = formSteps[currentStep]
    const formsFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]

    return formsFields.every((input) => input.reportValidity())
}


// animation
formSteps.forEach(formStep => {
    function addHide() {
        formStep.classList.add('hide')
    }

    formStep.addEventListener('animationend', () => {
        addHide()
        formSteps[currentStep].classList.remove('hide')
    })
})

