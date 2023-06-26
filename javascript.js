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
const pageThree = document.getElementById("three");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const pageFour = document.getElementById("four");
const p7 = document.getElementById("p7");
const p8 = document.getElementById("p8");
const sleeve = document.getElementById("sleeve");
const card = document.getElementById("card");

/*----Buttons----*/
const turnCoverButton = document.getElementById("turnCover");
const pageButton1 = document.getElementById("turnPage1");
const pageButton2 = document.getElementById("turnPage2");
const pageButton3 = document.getElementById("turnPage3");
const pageButton4 = document.getElementById("turnPage4");


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

const turn1 = function() {
    setTimeout(function() {
        p1.style.display = "none";
        p2.style.display = "flex";
      }, 900);
    pageOne.style.transform = "rotateX(10deg) rotateY(-180deg)";
    pageOne.style.transformOrigin = "-3px 100px";
    pageOne.style.transition = "transform 3s";
    pageOne.style.zIndex = "11";
    pageButton2.style.display = "block";
    pageButton1.style.display = "none";

}

pageButton1.onclick = turn1;

const turn2 = function() {
  setTimeout(function() {
      p3.style.display = "none";
      p4.style.display = "flex";
    }, 900);
  pageTwo.style.transform = "rotateX(10deg) rotateY(-180deg)";
  pageTwo.style.transformOrigin = "-3px 100px";
  pageTwo.style.transition = "transform 3s";
  pageTwo.style.zIndex = "12";
  pageButton3.style.display = "block";
  pageButton2.style.display = "none";

}

pageButton2.onclick = turn2;

const turn3 = function() {
  setTimeout(function() {
      p5.style.display = "none";
      p6.style.display = "flex";
    }, 900);
  pageThree.style.transform = "rotateX(10deg) rotateY(-180deg)";
  pageThree.style.transformOrigin = "-3px 100px";
  pageThree.style.transition = "transform 3s";
  pageThree.style.zIndex = "13";
  pageButton4.style.display = "block";
  pageButton3.style.display = "none";

}

pageButton3.onclick = turn3;

const turn4 = function() {
  setTimeout(function() {
      p7.style.display = "none";
      p8.style.display = "flex";
    }, 900);
  pageFour.style.transform = "rotateX(10deg) rotateY(-180deg)";
  pageFour.style.transformOrigin = "-3px 100px";
  pageFour.style.transition = "transform 3s";
  pageFour.style.zIndex = "14";
  pageButton4.style.display = "none";

}

pageButton4.onclick = turn4;


// const viewCard = function() {
//   card.style.transform = "scale(3) translateY(200px)"
//   card.style.transition = "transform 3s";
// }

// card.onclick = viewCard;
