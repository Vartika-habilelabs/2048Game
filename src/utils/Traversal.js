function checkforzeroes(grid) {
  for (let i of grid) {
    for (let j of i) {
      if (j === 0) return true;
    }
  }
  return false;
}
function transpose(grid) {
  return grid[0].map((col, ci) => grid.map((row, ri) => grid[ri][ci]));
}

function appendZeroes(filteredGrid, clickedButton, grid) {
  const appendZeroes = [];
  for (let i of filteredGrid) {
    const temp = [];
    for (let j = 0; j < grid.length - i.length; j++) {
      temp.push(0);
    }
    if (clickedButton === "left" || clickedButton === "top") {
      temp.unshift(...i);
    } else temp.push(...i);
    appendZeroes.push(temp);
  }
  return appendZeroes;
}
function filter(grid, dir) {
  const filteredGrid = grid.map((row) =>
    row.filter((rowelement) => rowelement !== 0)
  );
  const club = [];
  if (dir === 0)
    for (let i of filteredGrid) {
      const temp = [];
      for (let j = 0; j < i.length; j++) {
        if (j === i.length - 1) temp.push(i[j]);
        else {
          if (i[j] === i[j + 1]) {
            temp.push(2 * i[j]);
            j++;
          } else temp.push(i[j]);
        }
      }
      club.push(temp);
    }
  else
    for (let i of filteredGrid) {
      const temp = [];
      for (let j = i.length - 1; j >= 0; j--) {
        if (j === 0) temp.push(i[j]);
        else {
          if (i[j] === i[j - 1]) {
            temp.push(2 * i[j]);
            j--;
          } else temp.push(i[j]);
        }
      }
      temp.reverse();
      club.push(temp);
    }
  // console.log(club);
  return club;
}
function traversal(grid, clickedButton) {
  console.log("inside traversal");
  if (clickedButton === "top" || clickedButton === "bottom") {
    grid = transpose(grid);
  }

  const filteredGrid =
    clickedButton === "bottom" || clickedButton === "right"
      ? filter(grid, grid.length - 1)
      : filter(grid, 0);
  let updatedGrid = appendZeroes(filteredGrid, clickedButton, grid);
  if (clickedButton === "top" || clickedButton === "bottom")
    updatedGrid = transpose(updatedGrid);
  if (!checkforzeroes(updatedGrid)) return updatedGrid;
  let row = Math.floor(Math.random() * grid.length);
  let col = Math.floor(Math.random() * grid.length);

  while (updatedGrid[row][col] !== 0) {
    console.log("inside while");
    row = Math.floor(Math.random() * grid.length);
    col = Math.floor(Math.random() * grid.length);
  }
  updatedGrid[row][col] = 2;
  return updatedGrid;
}
export default traversal;
