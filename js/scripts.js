var playerOne;
var total = [];
var score = 0;
var total2 = 0;
//user interface logic:
$(document).ready(function(){
  $("#start").click(function() {
 playerOne = $("input#playerOne").val();
 $("#mchezo").append(playerOne);
   $(".playerone").show();

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
    } else {
      total.push(dice);
    }
  });
  $("#hold").click(function() {
    total.forEach(function(total) {
      return total2 += total;

    });

    document.getElementById('scorer').innerHTML = total2;
    total = [];
    score = 0;
    document.getElementById('score').innerHTML = score;
  });
});
