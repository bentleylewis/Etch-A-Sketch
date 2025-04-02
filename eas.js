const container = document.getElementById("container");
let pendown = false;

function generateGrid() {
    for (let i = 0; i < 256; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      container.appendChild(gridSquare);
      
      gridSquare.addEventListener("pointerdown", () => {
        pendown = true;
        gridSquare.classList.add("active");
      });


      gridSquare.addEventListener("mouseover", () =>{
        if (pendown) {
          gridSquare.classList.add("active");
        }
      });

      gridSquare.addEventListener("dragstart", (e) => {
        e.preventDefault();
    });
    
    }
}

document.addEventListener("pointerup", () => {
        pendown = false;
      })

generateGrid();