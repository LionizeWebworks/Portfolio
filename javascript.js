const book = document.getElementById("book");
const cover = document.getElementById("cover")
const title = document.getElementById("title");

/*----Pages and Content----*/
const pageOne = document.getElementById("one");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const pageTwo = document.getElementById("two");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");

/*----Buttons----*/
const turnCoverButton = document.getElementById("turnCover");
const pageButton1 = document.getElementById("turnPage1");
const pageButton2 = document.getElementById("turnPage2");


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
    pageButton1.style.display = "block";
    setTimeout(function() {
      title.style.display = "none";
    }, 900);
  };

turnCoverButton.onclick = openBook;

const firstTurn = function() {
    setTimeout(function() {
        p1.style.display = "none";
        p2.style.display = "flex";;
      }, 900);
    pageOne.style.transform = "rotateX(10deg) rotateY(-180deg)";
    pageOne.style.transformOrigin = "center left";
    pageOne.style.transition = "transform 3s";
    pageOne.style.zIndex = "4";
    pageButton2.style.display = "block";
    pageButton1.style.display = "none";

}

pageButton1.onclick = firstTurn;

const secondTurn = function() {
  setTimeout(function() {
      p3.style.display = "none";
      p4.style.display = "flex";
    }, 900);
  pageTwo.style.transform = "rotateX(10deg) rotateY(-180deg)";
  pageTwo.style.transformOrigin = "center left";
  pageTwo.style.transition = "transform 3s";
  pageTwo.style.zIndex = "4";
  pageButton3.style.display = "block";
  pageButton2.style.display = "none";

}

pageButton2.onclick = secondTurn;
