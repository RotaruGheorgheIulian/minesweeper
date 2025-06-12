startGame = function() {
  const rows = parseInt(document.getElementById('rows').value, 10);
  const cols = parseInt(document.getElementById('cols').value, 10);

  const grid = generateGrid(rows, cols);
  const revealed = Array(rows * cols).fill(false);

  const state = {
    rows,
    cols,
    grid,
    revealed
  };

  localStorage.setItem('minesweeperState', JSON.stringify(state));

  renderGrid(state);
}

document.getElementById('startBtn').addEventListener('click', () => {
  startGame();
});
