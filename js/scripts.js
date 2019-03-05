var playerOne;
var playerTwo;
var total = [];
var score = 0;
var total2 = 0;
var total3 = [];
var total4 = 0;
//user interface logic:
$(document).ready(function(){
  $("#start").click(function(event) {
    event.preventDefault();
 playerOne = $("input#playerOne").val();
playerTwo = $("input#playerTwo").val();
 $("#head").append(playerOne);
  $("#head2").append(playerTwo);
   $(".playerone").show();
     $(".playertwo").show();
     $("#form").hide();
     $(".buttons").show();



//playerone
  });
  $("#roll").click(function() {
    var dice;
    dice = Math.floor(Math.random() * 6 + 1 );
    document.getElementById('roller').innerHTML = dice;
    score+=dice;
    document.getElementById('score').innerHTML = score;



    if (dice == 1) {
      total = [];
      score = 0;
      $("#roll").hide();
      $("#roll2").show();
      $("#hold").hide();
      $("#hold2").show();
    } else {
      total.push(dice);
    }
  });
  $("#hold").click(function() {
    total.forEach(function(total) {
      return total2 += total;

    });
    document.getElementById('scorer').innerHTML = total2;
    $("#roll").hide();
    $("#roll2").show();
    $("#hold").hide();
    $("#hold2").show();
    total = [];
    score = 0;
    document.getElementById('score').innerHTML = score;
  });

//playertwo

  $("#roll2").click(function() {
    var dice;
    dice = Math.floor(Math.random() * 6 + 1 );
    document.getElementById('roller2').innerHTML = dice;
    score+=dice;
    document.getElementById('score2').innerHTML = score;
    $("#roll2").show();
    $("#roll").hide();
    $("#hold2").show();
    $("#hold").hide();



    if (dice == 1) {
      total3 = [];
      score2 = 0;
      $("#roll").show();
      $("#roll2").hide();
      $("#hold").show();
      $("#hold2").hide();
    } else {
      total3.push(dice);
    }
  });
  $("#hold2").click(function() {
    total3.forEach(function(total) {
      return total4 += total;

    });
    document.getElementById('scorer2').innerHTML = total4;
    $("#roll").show();
    $("#roll2").hide();
    $("#hold").show();
    $("#hold2").hide();
    total3 = [];
    score2 = 0;
    document.getElementById('score2').innerHTML = score2;
  });

});
