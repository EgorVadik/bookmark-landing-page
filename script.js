const menu = document.getElementById('menu')
const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')

openMenu.addEventListener('click', () => {
    menu.classList.remove('hidden')
})

closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden')
})

const simple = document.getElementById('simple')
const speedy = document.getElementById('speedy')
const easy = document.getElementById('easy')

const simpleData = document.getElementById('simpleData')
const speedyData = document.getElementById('speedyData')
const easyData = document.getElementById('easyData')

simple.addEventListener('click', () => {
    simpleData.classList.add('grid')
    simpleData.classList.remove('hidden')

    speedyData.classList.add('hidden')
    easyData.classList.add('hidden')

    simple.classList.add('border-b-4')
    speedy.classList.remove('border-b-4')
    easy.classList.remove('border-b-4')
})

speedy.addEventListener('click', () => {
    speedyData.classList.add('grid')
    speedyData.classList.remove('hidden')

    simpleData.classList.add('hidden')
    easyData.classList.add('hidden')

    speedy.classList.add('border-b-4')
    simple.classList.remove('border-b-4')
    easy.classList.remove('border-b-4')
})

easy.addEventListener('click', () => {
    easyData.classList.add('grid')
    easyData.classList.remove('hidden')

    simpleData.classList.add('hidden')
    speedyData.classList.add('hidden')

    easy.classList.add('border-b-4')
    simple.classList.remove('border-b-4')
    speedy.classList.remove('border-b-4')
})

const questionBtns = document.querySelectorAll('.question-btn')

questionBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        document.getElementById(`a${i + 1}`).classList.toggle('hidden')
        document.getElementById(`arrowOpen${i + 1}`).classList.toggle('hidden')
        document.getElementById(`arrowClose${i + 1}`).classList.toggle('hidden')
    })
})

function validateEmail() {
    const mail = document.getElementById('email')

    if (
        !mail.value ||
        !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(mail.value)
    ) {
        document
            .getElementById('errContainer')
            .classList.add(...['bg-SoftRed', 'mb-4'])
        document.getElementById('errIcon').classList.remove('hidden')
        document.getElementById('errText').classList.remove('hidden')
    } else {
        document.getElementById('errContainer').classList.remove('bg-SoftRed')
        document.getElementById('errIcon').classList.add('hidden')
        document.getElementById('errText').classList.add('hidden')
    }
}
