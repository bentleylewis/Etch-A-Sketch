const container = document.getElementById("container");



function generateGrid() {
    for (let i = 0; i < 256; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      container.appendChild(gridSquare);
    }
}

generateGrid();