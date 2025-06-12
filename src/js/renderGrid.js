function renderGrid(state) {
  const container = document.getElementById('gameGrid');
  container.innerHTML = '';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${state.cols}, 30px)`;
  container.style.gap = '2px';

  for (let i = 0; i < state.grid.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');

    if (state.revealed[i]) {
      cell.classList.add('revealed');

      if (state.grid[i] === -1) {
        cell.textContent = '💣';
      } else if (state.grid[i] > 0) {
        cell.textContent = state.grid[i];
      } else {
        cell.textContent = '';
      }
    } else {
      cell.textContent = '';
    }

    cell.addEventListener('click', () => {
      state.revealed[i] = true;
      localStorage.setItem('minesweeperState', JSON.stringify(state));
      renderGrid(state);
    });

    container.appendChild(cell);
  }
}