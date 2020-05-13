const board = document.querySelector('#board');
const player1 = 'X';
const player2 = 'O';
let player = player1;
const resetButton = document.getElementById('reset');

function addPiece(e) {
  console.log(e.target);
  e.target.innerHTML = player;
  if (player === player1)
    player = player2;
  else
    player = player1;

  checkWin();
}

function checkWin() {
  let zero = document.getElementById('zero').innerText;
  let one = document.getElementById('one').innerText;
  let two = document.getElementById('two').innerText;
  let three = document.getElementById('three').innerText;
  let four = document.getElementById('four').innerText;
  let five = document.getElementById('five').innerText;
  let six = document.getElementById('six').innerText;
  let seven = document.getElementById('seven').innerText;
  let eight = document.getElementById('eight').innerText;

  //Check win or tie
  if (
    (zero == 'X' && one == 'X' && two == 'X')
  ||
    (three == 'X' && four == 'X' && five == 'X')
  ||
    (six == 'X' && seven == 'X' && eight == 'X')
  ||
    (zero == 'X' && three == 'X' && six == 'X')
  ||
    (one == 'X' && four == 'X' && seven == 'X')
  ||
    (two == 'X' && five == 'X' && eight == 'X')
  ||
    (zero == 'X' && four == 'X' && eight == 'X')
  ||
    (six == 'X' && four == 'X' && two == 'X')) {
      document.getElementById('win').innerHTML = "Player 1 wins!";
  } else if (
    (zero == 'O' && one == 'O' && two == 'O')
  ||
    (three == 'O' && four == 'O' && five == 'O')
  ||
    (six == 'O' && seven == 'O' && eight == 'O')
  ||
    (zero == 'O' && three == 'O' && six == 'O')
  ||
    (one == 'O' && four == 'O' && seven == 'O')
  ||
    (two == 'O' && five == 'O' && eight == 'O')
  ||
    (zero == 'O' && four == 'O' && eight == 'O')
  ||
    (six == 'O' && four == 'O' && two == 'O')) {
      document.getElementById('win').innerHTML = "Player 2 wins!";
    }
}

function resetBoard() {
  player = player1;
  document.getElementById('win').innerHTML = " ";
  for (let i = 0; i < board.rows.length; i++) {
    let row = board.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      row.cells[j].innerHTML = '';
    }
  }
}

board.addEventListener('touchend', addPiece);
reset.addEventListener('touchend', resetBoard);