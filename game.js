/* jshint esversion: 6 */


alert("Rules: \nOn each iteration, one of the four colours will blink \nyou have to remember what colour it was and then click on the colours in the exact same order. \neg: on the first iteration, colour 'Red' blinked so you click on colour 'Red'. \nOn the next iteration if colour 'Yellow' blinked, you will have to click on 'Red' and then 'Yellow', so on and so forth \n How far can you go? ")
var buttonColors=["red","blue","green","yellow"];

function nextSequence(){
    var a=Math.floor(Math.random()*4);
    return a;
}

var gamePattern=[]; 	                   //reset
var userPattern=[];                   //reset
var index=0;                          //reset
var level=1;                          //reset
var gameState=false;
$(document).keypress (function(){
  if(!gameState){
      $("body").css("background-color","#011F3F");
      var kk="your score:" +0;
      $("#level-title").text(kk);
    gameState=true;
    choseColor();

  }

})

$(".btnn").click(function(){
  reset();
  if(!gameState){
      $("body").css("background-color","#011F3F");
      var kk="your score:" +0;
      $("#level-title").text(kk);
    gameState=true;
    choseColor();

  }
})
$(".btn").click(function() {
  if(!gameState){
    alert("start the game by pressing any key first");
  }
  else{

    userPattern.push(this.id);



    var audio = new Audio("sounds/" + this.id + '.mp3'),
        promise = audio.play();
        var f="#"+this.id;
        $(f).fadeOut(100).fadeIn(100);

    compare(index);
  }
})
var f=0;
function compare(ind){
  
  if(userPattern[ind]===gamePattern[ind]){
    f=0;
    if(userPattern.length===gamePattern.length){

      $("#level-title").text("your score: "+level);
      level++;
      index=0;
      f=1;
      userPattern=[];

      setTimeout(function () {
          choseColor();
        }, 1000);
      // choseColor();
    }
    if(f===0){
      index++;
    }

  }
  else{
    $("body").css("background-color","red"); // reset
    var kk="your score:" +(level-1)+ " press any key to restart";
    $("#level-title").text(kk);
    // print



    var au = new Audio("./sounds/wrong.mp3"),
        promise = au.play();
    reset();

    //........
  }
}


function reset(){
  //$("#level-title").text(" press any key to restart");

  gameState=false;
  index=0;

  level=1;
  gamePattern=[];
  userPattern=[];

}
function choseColor(){
    var g=nextSequence();
    var randomChosenColour=buttonColors[g];
    gamePattern.push(randomChosenColour);
    var f="#"+randomChosenColour;
    $(f).fadeOut(100).fadeIn(100);


    var k="./sounds/" +randomChosenColour + ".mp3";


    var audio = new Audio("sounds/" + randomChosenColour + '.mp3'),
        promise = audio.play();


}
