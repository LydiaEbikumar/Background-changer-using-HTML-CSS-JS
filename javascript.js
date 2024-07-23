const colors = ["red", "black", "orange", "yellow", "blue"];
const message = document.getElementById("text");
const message1 = document.getElementById("click");
let index = 0;
function changeColor() {
    message.style.backgroundColor = colors[index];
    index++;
}
message1.addEventListener("click", changeColor);
