var X = 1;
var O = 1;
var roundscore = 0;
var round_oneCurrentCell = 1;
var round_twoCurrentCell = 1;
var round_threeCurrentCell = 1;
var round_fourCurrentCell = 1;
var counthit = 0
var countmiss = 0
var countmiss2 = 0
var countmiss3 = 0
var countmiss4 = 0
var counthit2 = 0
var counthit3 = 0
var counthit4 = 0
var totalshots = counthit + countmiss

// Scores a Miss (X) & Repeats first miss & blank 25th cell per row
$('.MissButton').click(function() {

  if ((counthit + countmiss) === 24) {
    alert("Round 1 Over");
  }

  if ((counthit + countmiss) >= 0 && (counthit + countmiss) <= 24) {
    $('.R1_' + round_oneCurrentCell).text('X');
    if ($(this).text() === 'X') countmiss++;
    round_oneCurrentCell++;
    console.log(countmiss + counthit)
    if ((countmiss) <= 1) {
      round_oneCurrentCell--;
      if (countmiss === '2') countmiss++
      alert('Miss Bird - Repeat')
      $('.R1_25').css('background-color', 'red')

    }


  }
})



// Scores a Hit (O) & tallys up score per row
$('.HitButton').click(function() {

  //Round 1 Scoring (Hit)
  if ((counthit + countmiss) >= 0 && (counthit + countmiss) <= 25) {
    $('.R1_' + round_oneCurrentCell).text('O');
    if ($(this).text() === 'O') counthit++;
    round_oneCurrentCell++;
    console.log(counthit + countmiss)
    $('.R1_26').text(counthit);
    if ((counthit + countmiss) === 25) {
      alert("Round 1 Over")
    }
  }
  if ((counthit + countmiss) >= 26) {
    $('.R2_' + round_twoCurrentCell).text('O');
    if ($(this).text() === 'O')('counthit2++', 'counthit++');
    round_twoCurrentCell++;
    console.log(counthit2 + countmiss2)
    $('.R2_26').text(counthit2);
    if ((counthit2 + countmiss2) === 25) {
      alert("Round 2 Over")


    }
  }
})




if ((counthit + countmiss) >= 0 && (counthit + countmiss) <= 25){
  $('.R1_' + round_oneCurrentCell).text('O');
  if ($(this).text() === 'O') counthit++;
  round_oneCurrentCell++;
  console.log(counthit + countmiss)
  $('.R1_26').text(counthit);
  if ((counthit + countmiss) === 25) {
    alert("Round 1 Over")
}
///if ((counthit + countmiss) >= 26 && (counthit + countmiss) <= 50) {}
///if ((counthit + countmiss) >= 51 && (counthit + countmiss) <= 75) {}
///if ((counthit + countmiss) >= 76 && (counthit + countmiss) <= 100) {}
