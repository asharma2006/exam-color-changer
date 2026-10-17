

function changeColor() {
    let colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink'];

    let random = Math.floor(Math.random() * colors.length);

    document.getElementById("heading").style.color = colors[random];
}
