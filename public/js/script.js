const rows = 10;
const cols = 10;
const minesCount = 20;
let cells = [];
let gameOver = false;
let gameStarted = false;
let timerInterval;
let timeElapsed = 0;

function createBoard() {
  const game = document.getElementById('game');
  game.innerHTML = '';
  cells = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.addEventListener('click', onCellClick);
      cell.addEventListener('contextmenu', onRightClick);
      game.appendChild(cell);
      row.push(cell);
    }
    cells.push(row);
  }
}

function startTimer() {
  const timerElement = document.getElementById('timer');
  timerInterval = setInterval(() => {
    timeElapsed++;
    timerElement.textContent = `Time: ${timeElapsed} seconds`;
  }, 1000);
}

function placeMines(firstClickRow, firstClickCol) {
  let minesPlaced = 0;

  while (minesPlaced < minesCount) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);

    const isInSafeZone = Math.abs(r - firstClickRow) <= 1 && Math.abs(c - firstClickCol) <= 1;

    if (!cells[r][c].dataset.mine && !isInSafeZone) {
      cells[r][c].dataset.mine = 'true';
      minesPlaced++;
    }
  }
}

function onCellClick(event) {
  if (gameOver) return;

  const cell = event.target;
  const r = parseInt(cell.dataset.row);
  const c = parseInt(cell.dataset.col);

  if (!gameStarted) {
    placeMines(r, c);
    startTimer();
    gameStarted = true;
  }

  if (cell.dataset.mine === 'true') {
    cell.classList.add('mine');
    alert('Game Over!');
    clearInterval(timerInterval);
    gameOver = true;
  } else {
    revealCell(cell);
  }
}

function revealCell(cell) {
  if (cell.classList.contains('revealed')) return;

  cell.classList.add('revealed');
  const surroundingMines = countSurroundingMines(cell);

  if (surroundingMines > 0) {
    cell.setAttribute('data-content', surroundingMines);
  } else {
    cell.setAttribute('data-content', '');
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);
    revealSurroundingCells(r, c);
  }
}

function countSurroundingMines(cell) {
  const r = parseInt(cell.dataset.row);
  const c = parseInt(cell.dataset.col);
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const row = r + i;
      const col = c + j;

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        if (cells[row][col].dataset.mine === 'true') {
          count++;
        }
      }
    }
  }
  return count;
}

function revealSurroundingCells(r, c) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const row = r + i;
      const col = c + j;

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        const cell = cells[row][col];
        if (!cell.classList.contains('revealed')) {
          revealCell(cell);
        }
      }
    }
  }
}

function onRightClick(event) {
  event.preventDefault();
  if (gameOver || !gameStarted) return;

  const cell = event.target;
  if (!cell.classList.contains('revealed')) {
    if (cell.classList.contains('flagged')) {
      cell.classList.remove('flagged');
    } else {
      cell.classList.add('flagged');
    }
  }
}

window.onload = function() {
  createBoard();
};
