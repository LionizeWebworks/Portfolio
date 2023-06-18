const book = document.getElementById("book");
const cover = document.getElementById("cover")
const button = document.querySelector("button");


const zoom = function() {
    book.style.transform = "scale(3)";
    book.style.transition = "transform 3s";
    book.classList.add("hoverOff");
    button.hidden = false;
}

book.onclick = zoom;

// button.onmousedown = function() {
//     button.style.color = "red";
//     243, 62, 62
// }

const pageTurn = function() {
    cover.style.transform =  "rotateX(10deg) rotateY(-180deg)";
    cover.style.transformOrigin = "center left";
    cover.style.transition = "transform 3s";
}

button.onclick = pageTurn;
