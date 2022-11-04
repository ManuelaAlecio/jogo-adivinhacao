const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')
const screen1 = document.querySelector('.screen_1')
const screen2 = document.querySelector('.screen_2')

let randomNumber = Math.round(Math.random() * 10)
let xAttemtps = 1

const handleTryClick = (event) => {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  const transformNumber = Number(inputNumber)
  
  if(transformNumber.value == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerHTML = `Acertou em ${xAttemtps} tentativas`
  } else if(inputNumber.value < 0 || inputNumber.value > 10){
    alert('Por favor insira um número entre 0 e 10')
  }

  inputNumber.value = ''
  xAttemtps++
}

const handleAgainClick = () => {
  toggleScreen()
  xAttemtps = 1
  randomNumber = Math.round(Math.random() * 10)
}

const toggleScreen = () => {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

const clickEnter = (e) => {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', clickEnter)