const container = document.getElementById("container");
let pendown = false;

function generateGrid() {
    for (let i = 0; i < 256; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      container.appendChild(gridSquare);
      
      gridSquare.addEventListener("click", () => {
        pendown = !pendown;
        gridSquare.classList.add("active");
      });



      gridSquare.addEventListener("mouseover", () => {
        if (pendown) {
            gridSquare.classList.add("active");
        }
    });
    }
}

container.addEventListener("mouseleave", () => {
  pendown = false;
});

generateGrid();