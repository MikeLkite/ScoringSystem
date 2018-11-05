var roundscore = 0;
var round_oneCurrentCell = 1;
var round_twoCurrentCell = 1;
var round_threeCurrentCell = 1;
var round_fourCurrentCell = 1;
var counthit = 0
var countmiss = 0
var counthit2 = 0
var countmiss2 = 0
var counthit3 = 0
var countmiss3 = 0
var counthit4 = 0
var countmiss4 = 0
var roundover = 0
var menutoggle = 0
var skeet = 0
var sporting = 0

$(document).ready(function() {

  $(".ScoreCard, .ButtonBox1, .ScoreCard2").hide();
  menutoggle++;
  console.log(menutoggle)
});

$(".Skeet").click(function() {
      $(".ScoreCard, .ButtonBox1").show();
      $(".MidMenu").hide();
      alert("SKEET (ENGLISH) - ROUND 1");
      skeet++;
});

$(".Sporting").click(function() {
      $(".ScoreCard2, .ButtonBox1").show();
      $(".MidMenu").hide();
      alert("SPORTING - Stand 1");
      sporting++;
});

//Toggles Scorecards show/hide
$(".MenuBurger").click(function() {
    $(".ScoreCard, .ScoreCard2, .ButtonBox1").hide();
      $(".MidMenu").show();
});

// Scores a Miss (X) & Repeats first miss & blank 25th cell per row
$('.MissButton').click(function() {

if ((skeet) === 1) {
  if ((roundover) > 4 && (roundover) < 6) {
    roundover++
  }
  if ((roundover) > 2 && (roundover) < 4) {
    roundover++
  }
  if ((roundover) > 0 && (roundover) < 2) {
    roundover++
  }


  if ((roundover) === 0) {
    $('.R1_' + round_oneCurrentCell).text('X')
      .css("color", "#bf1313");
    countmiss++
    round_oneCurrentCell++;
    if ((counthit + countmiss) === 25) {
      roundover++
      alert("Round 1 Over");
      if ((counthit) < 1) {
        $('.R1_26').text("0")
        roundover++
        alert("Round 1 Over!")
        console.log(roundover)
      }
    }
    if ((counthit + countmiss) <= 24) {
      if ((countmiss) <= 1) {
        round_oneCurrentCell--;
        if (countmiss === '2') countmiss++
        alert('Miss Bird - Repeat')
        $('.R1_25').css('background-color', 'red')
      }
    }

  }

  if ((roundover) === 2) {
    $('.R2_' + round_twoCurrentCell).text('X')
      .css("color", "#bf1313");
    countmiss2++;
    round_twoCurrentCell++;
    if ((counthit2 + countmiss2) === 25) {
      roundover++
      alert("Round 2 Over!")
      if ((counthit) < 1) {
        $('.R2_26').text("0")
        roundover++
        alert("Round 2 Over!")
        console.log(roundover)
      }
    }
    if ((counthit2 + countmiss2) <= 24) {
      if ((countmiss2) <= 1) {
        round_twoCurrentCell--;
        if (countmiss2 === '2') countmiss2++
        alert('Miss Bird - Repeat')
        $('.R2_25').css('background-color', 'red')
      }
    }

  }

  if ((roundover) === 4) {
    $('.R3_' + round_threeCurrentCell).text('X')
      .css("color", "#bf1313");
    countmiss3++;
    round_threeCurrentCell++;
    if ((counthit3 + countmiss3) === 25) {
      roundover++
      alert("Round 3 Over!")
      if ((counthit) < 1) {
        $('.R3_26').text("0")
        roundover++
        alert("Round 3 Over!")
        console.log(roundover)
      }
    }
    if ((counthit3 + countmiss3) <= 24) {
      if ((countmiss3) <= 1) {
        round_threeCurrentCell--;
        if (countmiss3 === '2') countmiss3++
        alert('Miss Bird - Repeat')
        $('.R3_25').css('background-color', 'red')
      }
    }

  }

  if ((roundover) === 6) {
    $('.R4_' + round_fourCurrentCell).text('X')
      .css("color", "#bf1313");
    countmiss4++;
    round_fourCurrentCell++;
    if ((counthit4 + countmiss4) === 25) {
      roundover++
      alert("Round 4 Over!")
      if ((counthit) < 1) {
        $('.R3_26').text("0")
        roundover++
        alert("Round 3 Over!")
        console.log(roundover)
      }
    }
    if ((counthit4 + countmiss4) <= 24) {
      if ((countmiss4) <= 1) {
        round_fourCurrentCell--;
        if (countmiss4 === '2') countmiss4++
        alert('Miss Bird - Repeat')
        $('.R4_25').css('background-color', 'red')
      }

    }
  }
}})

// Scores a Hit (O) & tallys up score per row
$('.HitButton').click(function() {

if ((skeet) === 1) {
  if ((roundover) > 4 && (roundover) < 6) {
    roundover++
  }
  if ((roundover) > 2 && (roundover) < 4) {
    roundover++
  }
  if ((roundover) > 0 && (roundover) < 2) {
    roundover++
  }


  if ((roundover) === 0) {
    $('.R1_' + round_oneCurrentCell).text('O')
      .css("color", "#1b8c17");
    counthit++;
    round_oneCurrentCell++;
    $('.R1_26').text(counthit)
    $('.TotalScore').text(counthit).css('color', '#50f442');
    if ((counthit + countmiss) === 25) {
      roundover++
      alert("Round 1 Over!")
      console.log(roundover)

    }
  }

  if ((roundover) === 2) {
    $('.R2_' + round_twoCurrentCell).text('O')
      .css("color", "#1b8c17");
    counthit2++;
    round_twoCurrentCell++;
    $('.R2_26').text(counthit2);
    $('.TotalScore').text(counthit + counthit2).css('color', '#50f442');
    if ((counthit2 + countmiss2) === 25) {
      alert("Round 2 Over!")
      roundover++;
      console.log(roundover)

    }
  }

  if ((roundover) === 4) {
    $('.R3_' + round_threeCurrentCell).text('O')
      .css("color", "#1b8c17");
    counthit3++;
    round_threeCurrentCell++;
    $('.R3_26').text(counthit3);
    $('.TotalScore').text(counthit + counthit2 + counthit3).css('color', '#50f442');
    if ((counthit3 + countmiss3) === 25) {
      alert("Round 3 Over!")
      roundover++;
      console.log(roundover)

    }
  }
  if ((roundover) === 6) {
    $('.R4_' + round_fourCurrentCell).text('O')
      .css("color", "#1b8c17");
    counthit4++;
    round_fourCurrentCell++;
    $('.R4_26').text(counthit4);
    $('.TotalScore').text(counthit + counthit2 + counthit3 + counthit4).css('color', '#50f442');
    if ((counthit4 + countmiss4) === 25) {
      alert("Round 4 Over!")
      roundover++;
      console.log(roundover)

    }
  }
}})


if ((sporting) === 1) {
  
}
