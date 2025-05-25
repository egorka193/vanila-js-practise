const board = document.querySelector('#board')

for(let i = 0; i < 400; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = setRandomColor();
  });

  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = '';
  });
  board.append(square);
}


function setRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
  return colors[Math.floor(Math.random() * colors.length)];
}