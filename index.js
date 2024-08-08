var randomno1 = Math.floor(Math.random() * 6) + 1;

var randomdiceimg = "dice" + randomno1 + ".png";

var randomimgsrc = "images/" + randomdiceimg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimgsrc);

var randomno2 = Math.floor(Math.random() * 6) + 1;

var randomimgsrc2 = "images/dice" + randomno2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimgsrc2);

if (randomno1 > randomno2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !"
} else if (randomno2 < randomno1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !"
} else if (randomno2 === randomno1) {
    document.querySelector("h1").innerHTML = "Its a Draw !"
}