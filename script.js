var randomNum1=Math.floor((Math.random()*6))+1;

var diceimage1="dice"+randomNum1+".png";

var diceImageSource1 ="./images/"+ diceimage1;

var randomImga1=document.querySelectorAll("img")[0];

randomImga1.setAttribute("src",diceImageSource1);

var randomNum2=Math.floor((Math.random()*6))+1;

var diceimage2="dice"+randomNum2+".png";

var diceImageSource2 ="./images/"+ diceimage2;

var randomImga2=document.querySelectorAll("img")[1];

randomImga2.setAttribute("src",diceImageSource2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="player 1 Wins"
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="player 2 Wins"
}
else if(randomNum1 ===randomNum2){ document.querySelector("h1").innerHTML="Draw!"}
   
