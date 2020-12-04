// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let size = document.getElementById("sizePicker");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
// select canvas
let canvas = document.getElementById("pixelCanvas");

// to prevent the default behaviour of refreshing the page
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});


// When size is submitted by the user, call makeGrid()
function makeGrid() {
    canvas.innerHTML = "";
    for (i = 0; i < height.value; i++) {
        const row = canvas.insertRow(i);
        for (j = 0; j < width.value; j++) {
            const cell = row.insertCell(j);
            cell.addEventListener('click', function(changeColor) {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
