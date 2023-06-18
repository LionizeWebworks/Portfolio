const book = document.getElementById("book");


const zoom = function() {
    book.style.transform = "scale(3)";
    book.style.transition = "transform 3s";
    book.classList.add("hoverOff");

}

book.onclick = zoom;

const pageTurn = function(event) {
    event.target.style.transform =  "rotateX(10deg) rotateY(-180deg)";
    event.target.style.transformOrigin = "center left";
}

target.onclick = pageTurn;
