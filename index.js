/* TASK 1: */
const table = document.getElementById('table')

const paintYellow = function (target) {
    target.classList.add('yellow')
}
const paintBlue = function (target) {
    target.closest('tr').classList.add('blue')
}
const paintGreen = function (target) {
    target.closest('table').classList.add('green')
}

let target = ''

const paintTarget = function (event) {
    target = event.target
    switch (target.id) {
        case 'cell1': {
            paintBlue(target)
            break
        }
        case 'cell2': {
            paintYellow(target)
            break
        }
        case 'cell3': {
            paintYellow(target)
            break
        }
        case 'cell4': {
            paintBlue(target)
            break
        }
        case 'cell5': {
            paintYellow(target)
            break
        }
        case 'special-cell': {
            paintGreen(target)
            break
        }
        case 'cell7': {
            paintBlue(target)
            break
        }

        case 'cell8': {
            paintYellow(target)
            break
        }
        case 'cell9': {
            paintYellow(target)
            break
        }
        default:
            break
    }
}
table.addEventListener('click', paintTarget)

/* TASK 2: */
const alertMessage = document.getElementById('alert_message')
const phoneInput = document.getElementById('phone')
const submitBtn = document.getElementById('submit')

const state = {
    phone: '',
    successMessage: 'Data was successfully sent',
    errorMessage: 'Type number does not follow format +380*********',
    regex: /^(\+380)[0-9]{9}$/
}

phoneInput.addEventListener('change', event => {
    state.phone = event.target.value
})

submitBtn.addEventListener('click', () => {
    if (state.regex.test(state.phone)) {
        alertMessage.innerText = state.successMessage
        phoneInput.classList.remove('form__input_error')
        alertMessage.classList.remove('form__alert-message_error')
        alertMessage.classList.add('form__alert-message_success')
    } else {
        alertMessage.innerText = state.errorMessage
        alertMessage.classList.remove('form__alert-message_success')
        alertMessage.classList.add('form__alert-message_error')
        phoneInput.classList.add('form__input_error')
            }
})

/* TASK 3: */
const ball = document.getElementById('ball')
const court = document.getElementById('court')

court.addEventListener('click', event => {
    const targetCoords = event.target.getBoundingClientRect()
    const x = event.clientX - targetCoords.left
    const y = event.clientY - targetCoords.top
    console.log(x, y)
    ball.style.top = y - 20 + 'px'
    ball.style.left = x - 20 + 'px'
})

