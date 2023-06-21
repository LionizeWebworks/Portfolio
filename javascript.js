const book = document.getElementById("book");
const cover = document.getElementById("cover")
const title = document.getElementById("title");

/*--------*/

/*----Buttons----*/
const turnCoverButton = document.getElementById("turnPage1");
const firstPageButton = document.getElementById("turnPage2");


const zoom = function() {
    book.style.transform = "scale(3)";
    book.style.transition = "transform 3s";
    book.classList.add("hoverOff");
    turnCoverButton.style.display = "block";
}

book.onclick = zoom;

const openBook = function() {
    book.style.transform = "scale(3) translateX(75px)";
    cover.style.transform = "rotateX(10deg) rotateY(-180deg)";
    cover.style.transformOrigin = "center left";
    cover.style.transition = "transform 3s";
    turnCoverButton.style.display = "none";
    firstPageButton.style.display = "block";
    setTimeout(function() {
      title.style.display = "none";
    }, 900);
  };

turnCoverButton.onclick = openBook;

const firstTurn = function() {

    setTimeout(function() {
        title.style.display = "none";
      }, 900);
}
