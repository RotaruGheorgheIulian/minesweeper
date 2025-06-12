function generateGrid(rows, cols) {
  const total = rows * cols;
  const grid = Array(total).fill(0);

  const bombCount = Math.floor(total * 0.15);
  let placed = 0;

  while (placed < bombCount) {
    const index = Math.floor(Math.random() * total);
    if (grid[index] !== -1) {
      grid[index] = -1;
      placed++;
    }
  }

  for (let i = 0; i < total; i++) {
    if (grid[i] === -1) continue;
    const neighbors = getNeighbors(i, rows, cols);
    const count = neighbors.filter(n => grid[n] === -1).length;
    grid[i] = count;
  }

  return grid;
}