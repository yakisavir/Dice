
var first = Math.floor(Math.random()*6+1);
var second = Math.floor(Math.random()*6+1);

var dice1 = "images/dice"+(first)+".png";
var dice2 = "images/dice"+(second)+".png";

var firstPlayer = document.querySelectorAll("img") [0];
firstPlayer.setAttribute("src", dice1);

var secondPlayer = document.querySelectorAll("img") [1].setAttribute("src", dice2);



if (first>second){
    
    document.querySelector("h2").innerHTML= "🔅שחקן 1 ניצח❗";
}
else if (second>first) { 

document.querySelector("h2").innerHTML="🔅שחקן 2 ניצח❗";

}

else {
    document.querySelector("h2").innerHTML="🧡תיקו❤";
    
}