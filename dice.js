
function score(){
var run=(Math.random()*6);
 return Math.floor(run)+1;
}

var player1,player2;

//for player one

player1=score();
var player1imgname ="dice"+player1+".png";
var player1imgscr="images/"+player1imgname;
var final1=document.querySelectorAll("img")[0];
final1.setAttribute("src",player1imgscr);


//for player 2

player2=score();
var imagee ="dice"+player2+".png";
var imageesrc="images/"+imagee;
var imagee2=document.querySelectorAll("img")[1];
imagee2.setAttribute("src",imageesrc);

if(player1>player2){
document.querySelector("h1").textContent="player1 won";
}
else if(player2>player1){ 
document.querySelector("h1").textContent="player2 won";
}
else{

    document.querySelector("h1").textContent="Draw!";


}

