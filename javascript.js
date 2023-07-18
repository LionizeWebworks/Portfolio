const book = document.getElementById("book");
const cover = document.getElementById("cover")
const backCover = document.getElementById("back-cover");
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

/*----Forward Buttons----*/
const turnCoverButton = document.getElementById("turnCover");
const goForward1 = document.getElementById("turnPage1");
const goForward2 = document.getElementById("turnPage2");
const goForward3 = document.getElementById("turnPage3");
const goForward4 = document.getElementById("turnPage4");

/*----Back Buttons----*/
const closeCoverButton = document.getElementById("closeCover");
const goBack1 = document.getElementById("goBack1");
const goBack2 = document.getElementById("goBack2");
const goBack3 = document.getElementById("goBack3");
const goBack4 = document.getElementById("goBack4");
const goBack5 = document.getElementById("goBack5");



      /*----FUNCTIONALITIES!!----*/

  //----Book Zoom----//

      const zoom = function() {
        book.style.transform = "scale(3)";
        book.style.transition = "transform 3s";
        book.classList.remove("hoverOn");
        turnCoverButton.style.display = "block";
      }

book.addEventListener('click', zoom, { once: true });

  //----Open Book----//
      const openBook = function() {
          book.style.transform = "scale(3) translateX(75px)";
          //Moves book for better visibility
          cover.style.transform = "rotateX(10deg) rotateY(-180deg)";
          // FLIPS the page
          cover.style.transformOrigin = "center left";
          //moves book for proper turning
          cover.style.transition = "transform 3s";


          setTimeout(function() {
            title.style.display = "none";
          }, 900);

          setTimeout(function() {
            turnCoverButton.style.display = "none";
            goForward1.style.display = "inline";
            closeCoverButton.style.display = "inline";
            goForward1.disabled = false;
            closeCoverButton.disabled = false;
          }, 2500)
        };

turnCoverButton.onclick = openBook;


  //----Close Book----//
      const closeCover = function() {
        book.style.transform = "scale(3) translateX(0px)";
        book.style.stransition = "transform 3s";

        cover.style.transform = "rotateX(-10deg)";
        cover.style.transition = "transform 3s";
        goForward1.disabled = true;
        closeCoverButton.disabled = true;

        setTimeout(function() {
          title.style.display = "inline";
        }, 900);

        setTimeout(function() {
          goForward1.style.display = "none";
          closeCoverButton.style.display = "none";
          turnCoverButton.style.display = "inline";
        }, 2650);
      }

closeCoverButton.onclick = closeCover;


  //----TOC forward---//
      const turn1 = function() {
          setTimeout(function() {
              p1.style.display = "none";
              p2.style.display = "flex";
            }, 900);
            pageOne.style.transform = "rotateX(10deg) rotateY(-180deg)";
            pageOne.style.transformOrigin = "-3px 100px";
            pageOne.style.transition = "transform 3s";
            pageOne.style.zIndex = "11";

            goForward1.disabled = true;
            closeCoverButton.disabled = true;

            setTimeout(function() {
              goForward2.style.display = "inline";
              goBack1.style.display = "inline";
              goForward2.disabled = false;
              goBack1.disabled = false;
              goForward1.style.display = "none";
              closeCoverButton.style.display = "none";
          }, 2500);
        }

goForward1.onclick = turn1;

  //----Bio Back----//

const back1 = function() {
  setTimeout(function() {
    p1.style.display = "block";
    p2.style.display = "none";
  }, 900);
    pageOne.style.transform = "rotateX(-10deg)";
    pageOne.style.transition = "transform 3s";

    goForward2.disabled = true;
    goBack1.disabled = true;

  setTimeout(function() {
    goForward1.style.display = "inline";
    closeCoverButton.style.display = "inline";
    goForward1.disabled = false;
    closeCoverButton.disabled = false;
    goForward2.style.display = "none";
    goBack1.style.display = "none";
  }, 3000);
}

goBack1.onclick = back1;


  //---- Bio forward ----//
      const turn2 = function() {
        setTimeout(function() {
            p3.style.display = "none";
            p4.style.display = "flex";
          }, 900);
        pageTwo.style.transform = "rotateX(10deg) rotateY(-180deg)";
        pageTwo.style.transformOrigin = "-3px 100px";
        pageTwo.style.transition = "transform 3s";
        pageTwo.style.zIndex = "12";

        goForward2.disabled = true;
        goBack1.disabled = true;

        setTimeout(function() {
          goForward2.style.display = "inline";
          goBack1.style.display = "inline";
          goForward2.disabled = false;
          goBack1.disabled = false;
          goForward1.style.display = "none";
          closeCoverButton.style.display = "none";
      }, 2500);
      }

goForward2.onclick = turn2;


  //---- Back 2----//

const back2 = function() {
  setTimeout(function() {
    p3.style.display = "flex";
    p4.style.display = "none";
  }, 900);
    pageTwo.style.transform = "rotateX(-10deg)";
    pageTwo.style.transition = "transform 3s";

  setTimeout(function() {
    goForward3.style.display = "none";
    goBack2.style.display = "none";
    goForward2.style.display = "inline";
    goBack1.style.display = "inline";
  }, 3000);
}

goBack2.onclick = back2;


    //----Turn 3----//
      const turn3 = function() {
        setTimeout(function() {
            p5.style.display = "none";
            p6.style.display = "flex";
          }, 900);

        pageThree.style.transform = "rotateX(10deg) rotateY(-180deg)";
        pageThree.style.transformOrigin = "-3px 100px";
        pageThree.style.transition = "transform 3s";
        pageThree.style.zIndex = "13";

        setTimeout(function() {
          goForward4.style.display = "inline";
          goBack3.style.display = "inline";
          goForward3.style.display = "none";
          goBack2.style.display = "none";
        }, 2500);

      }

goForward3.onclick = turn3;


  //---- Back 3----//

  const back3 = function() {
    setTimeout(function() {
      p5.style.display = "flex";
      p6.style.display = "none";
    }, 900);

      pageThree.style.transform = "rotateX(-10deg)";
      pageThree.style.transition = "transform 3s";

    setTimeout(function() {
          goForward4.style.display = "none";
          goBack3.style.display = "none";
          goForward3.style.display = "inline";
          goBack2.style.display = "inline";
    }, 3000);
  }

  goBack3.onclick = back3;


    //----Pages 6/7----//
      const turn4 = function() {
        setTimeout(function() {
            p7.style.display = "none";
            p8.style.display = "flex";
          }, 900);
        pageFour.style.transform = "rotateX(10deg) rotateY(-180deg)";
        pageFour.style.transformOrigin = "-3px 100px";
        pageFour.style.transition = "transform 3s";
        pageFour.style.zIndex = "14";
        goForward4.style.display = "none";
        card.classList.add("hoverOn");
      }

goForward4.onclick = turn4;


    //----Contact Card----//

      const viewCard = function() {
        card.style.transform = "scale(3) translateY(-15px) translateX(-25px)"
        card.style.transition = "transform 3s";
        card.classList.remove("hoverOn");
        backCover.style.zIndex = "14";
        card.style.zIndex = "15"
      }

card.onclick = viewCard;
