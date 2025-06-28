const startButton = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timelist = document.querySelector('.time-list');
const remainingTime = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

startButton.addEventListener( 'click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up')
})

timelist.addEventListener( 'click', event => {
  if(event.target.classList.contains('time-btn')){
    time = parseInt(event.target.getAttribute('data-time'))
    startGame()
  }
})

board.addEventListener( 'click', event => {
  if (event.target.classList.contains('circle')){
    score++
    event.target.remove()
    createCircle()
  }
})

function startGame() {
  screens[1].classList.add('up');
  createCircle()
  remainingTime.innerHTML = `00:${time < 10 ? '0' + time : time}`;
  interval = setInterval(timer, 1000); 
}

function timer() {
  time--;

  if (time >= 10) {
    remainingTime.innerHTML = `00:${time}`;
  } else if (time > 0) {
    remainingTime.innerHTML = `00:0${time}`;
  } else {
    remainingTime.innerHTML = '00:00';
    clearInterval(interval); 
    finishGame()
  }
}

function createCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(5, 45)
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`

  board.append(circle)

}

function getRandomNumber(min, max) {
  return Math.round( Math.random() * (max - min) + min)
}

function finishGame() {
  remainingTime.parentNode.remove()
  board.innerHTML = `<h3>Ваш счет: ${score}</h3>`
}