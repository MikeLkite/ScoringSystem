var roundscore = 0;
var round_oneCurrentCell = 1;
var round_twoCurrentCell = 1;
var round_threeCurrentCell = 1;
var round_fourCurrentCell = 1;
var round_one2CurrentCell = 1;
var round_two2CurrentCell = 1;
var round_three2CurrentCell = 1;
var round_four2CurrentCell = 1;
var round_five2CurrentCell = 1;
var round_six2CurrentCell = 1;
var round_seven2CurrentCell = 1;
var round_eight2CurrentCell = 1;
var round_nine2CurrentCell = 1;
var round_ten2CurrentCell = 1;
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
var spcounthit = 0
var spcountmiss = 0
var spcounthit2 = 0
var spcountmiss2 = 0
var spcounthit3 = 0
var spcountmiss3 = 0
var spcounthit4 = 0
var spcountmiss4 = 0
var spcounthit5 = 0
var spcountmiss5 = 0
var spcounthit6 = 0
var spcountmiss6 = 0
var spcounthit7 = 0
var spcountmiss7 = 0
var spcounthit8 = 0
var spcountmiss8 = 0
var spcounthit9 = 0
var spcountmiss9 = 0
var spcounthit10 = 0
var spcountmiss10 = 0
var sproundover = 0
var standcount = 1

$(document).ready(function() {
  document.documentElement.webkitRequestFullScreen()
  $(".ScoreCard, .ButtonBox1, .ButtonBox1b, .ScoreCard2, .TotalScore, .StandSelect, .StandNumber, .MinusButton, .AddButton").hide();
  menutoggle++;
  console.log(menutoggle)
  console.log(sporting)
});

//If user selects Skeet

var skeet = 0

$(".Skeet").click(function() {
  $(".ScoreCard, .ButtonBox1,.ButtonBox1b, .TotalScore").show();
  $(".MidMenu, .MenuSelection").hide();
  alert("SKEET (ENGLISH) - ROUND 1");
  skeet++;
});


//If user selects sporting

var sporting = 0

$(".Sporting").click(function() {
    $(".MidMenu, .MenuSelection, .ButtonBox2").show();
  sporting++;
  console.log(sporting)


  if ((sporting) === 1) {
    $(".Skeet, .Sporting, .ScoresMenu").hide();
    $(".StandSelect, .StandNumber, .AddButton, .MinusButton").show();
  }

})

//Toggles Scorecards show/hide

$(".MenuBurger").click(function() {
  $(".ScoreCard, .ScoreCard2, .ButtonBox1,.ButtonBox1b, .TotalScore").hide();
  $(".MidMenu, .MenuSelection").show();
  if ((sporting) > 1) {
    sporting--;
    sporting--;
    console.log(sporting)
    if ((sporting) === 0) {
      $(".Skeet, .Sporting, .ScoresMenu").show();
    }
  }
});

// Scores a Miss (X) & Repeats first miss & blank 25th cell per row

$('.MissButton').click(function() {

  if ((sporting) === 2) {

    if ((sproundover) > 16 && (sproundover) < 18) {
      sproundover++
    }
    if ((sproundover) > 14 && (sproundover) < 16) {
      sproundover++
    }
    if ((sproundover) > 12 && (sproundover) < 14) {
      sproundover++
    }
    if ((sproundover) > 10 && (sproundover) < 12) {
      sproundover++
    }
    if ((sproundover) > 8 && (sproundover) < 10) {
      sproundover++
    }
    if ((sproundover) > 6 && (sproundover) < 8) {
      sproundover++
    }
    if ((sproundover) > 4 && (sproundover) < 6) {
      sproundover++
    }
    if ((sproundover) > 2 && (sproundover) < 4) {
      sproundover++
    }
    if ((sproundover) === 1) {
      sproundover++
    }

    if ((sproundover) === 0) {
      $('.S1_' + round_one2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss++;
      round_one2CurrentCell++;
      $('.S1_11').text(spcounthit);
      if ((spcounthit + spcountmiss) === 10) {
        alert("Stand 1 Over!")
        sproundover++;
      }
    }


    if ((sproundover) === 2) {
      $('.S2_' + round_two2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss2++;
      round_two2CurrentCell++;
      $('.S2_11').text(spcounthit2);
      if ((spcounthit2 + spcountmiss2) === 10) {
        alert("Stand 2 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }


    if ((sproundover) === 4) {
      $('.S3_' + round_three2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss3++;
      round_three2CurrentCell++;
      $('.S3_11').text(spcounthit3);
      if ((spcounthit3 + spcountmiss3) === 10) {
        alert("Stand 3 Over!")
        sproundover++;
      }
    }


    if ((sproundover) === 6) {
      $('.S4_' + round_four2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss4++;
      round_four2CurrentCell++;
      $('.S4_11').text(spcounthit4);
      if ((spcounthit4 + spcountmiss4) === 10) {
        alert("Stand 4 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }

    if ((sproundover) === 8) {
      $('.S5_' + round_five2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss5++;
      round_five2CurrentCell++;
      $('.S5_11').text(spcounthit5);
      if ((spcounthit5 + spcountmiss5) === 10) {
        alert("Stand 5 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }


    if ((sproundover) === 10) {
      $('.S6_' + round_six2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss6++;
      round_six2CurrentCell++;
      $('.S6_11').text(spcounthit6);
      if ((spcounthit6 + spcountmiss6) === 10) {
        alert("Stand 6 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }

    if ((sproundover) === 12) {
      $('.S7_' + round_seven2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss7++;
      round_seven2CurrentCell++;
      $('.S7_11').text(spcounthit7);
      if ((spcounthit7 + spcountmiss7) === 10) {
        alert("Stand 7 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 14) {
      $('.S8_' + round_eight2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss8++;
      round_eight2CurrentCell++;
      $('.S8_11').text(spcounthit8);
      if ((spcounthit8 + spcountmiss8) === 10) {
        alert("Stand 8 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }


    if ((sproundover) === 16) {
      $('.S9_' + round_nine2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss9++;
      round_nine2CurrentCell++;
      $('.S9_11').text(spcounthit9);
      if ((spcounthit9 + spcountmiss9) === 10) {
        alert("Stand 9 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }

    if ((sproundover) === 18) {
      $('.S10_' + round_ten2CurrentCell).text('X')
        .css("color", "#bf1313");
      spcountmiss10++;
      round_ten2CurrentCell++;
      $('.S10_11').text(spcounthit10);
      if ((spcounthit10 + spcountmiss10) === 10) {
        alert("Stand 10 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }



  }


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
        if ((counthit) <= 1) {
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
  }
})

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
  }

  //Sporting scoring

  if ((sporting) === 2) {

    if ((sproundover) > 16 && (sproundover) < 18) {
      sproundover++
    }
    if ((sproundover) > 14 && (sproundover) < 16) {
      sproundover++
    }
    if ((sproundover) > 12 && (sproundover) < 14) {
      sproundover++
    }
    if ((sproundover) > 10 && (sproundover) < 12) {
      sproundover++
    }
    if ((sproundover) > 8 && (sproundover) < 10) {
      sproundover++
    }
    if ((sproundover) > 6 && (sproundover) < 8) {
      sproundover++
    }
    if ((sproundover) > 4 && (sproundover) < 6) {
      sproundover++
    }
    if ((sproundover) > 2 && (sproundover) < 4) {
      sproundover++
    }
    if ((sproundover) === 1) {
      sproundover++
    }
    if ((sproundover) === 0) {
      $('.S1_' + round_one2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit++;
      round_one2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S1_11').text(spcounthit - spcounthit2);
      if ((spcounthit + spcountmiss) === 10) {
        alert("Stand 1 Over!")
        sproundover++;
      }
    }
    if ((sproundover) === 2) {
      $('.S2_' + round_two2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit2++;
      round_two2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S2_11').text(spcounthit2);
      if ((spcounthit2 + spcountmiss2) === 10) {
        alert("Stand 2 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 4) {
      $('.S3_' + round_three2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit3++;
      round_three2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S3_11').text(spcounthit3);
      if ((spcounthit3 + spcountmiss3) === 10) {
        alert("Stand 3 Over!")
        sproundover++;
      }
    }
    if ((sproundover) === 6) {
      $('.S4_' + round_four2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit4++;
      round_four2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S4_11').text(spcounthit4);
      if ((spcounthit4 + spcountmiss4) === 10) {
        alert("Stand 4 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 8) {
      $('.S5_' + round_five2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit5++;
      round_five2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S5_11').text(spcounthit5);
      if ((spcounthit5 + spcountmiss5) === 10) {
        alert("Stand 5 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 10) {
      $('.S6_' + round_six2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit6++;
      round_six2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S6_11').text(spcounthit6);
      if ((spcounthit6 + spcountmiss6) === 10) {
        alert("Stand 6 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 12) {
      $('.S7_' + round_seven2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit7++;
      round_seven2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S7_11').text(spcounthit7);
      if ((spcounthit7 + spcountmiss7) === 10) {
        alert("Stand 7 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 14) {
      $('.S8_' + round_eight2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit8++;
      round_eight2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S8_11').text(spcounthit8);
      if ((spcounthit8 + spcountmiss8) === 10) {
        alert("Stand 8 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 16) {
      $('.S9_' + round_nine2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit9++;
      round_nine2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S9_11').text(spcounthit9);
      if ((spcounthit9 + spcountmiss9) === 10) {
        alert("Stand 9 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
    if ((sproundover) === 18) {
      $('.S10_' + round_ten2CurrentCell).text('O')
        .css("color", "#1b8c17");
      spcounthit10++;
      round_ten2CurrentCell++;
      $('.TotalScore').text(spcounthit + spcounthit2 + spcounthit3 + spcounthit4 + spcounthit5 + spcounthit6 + spcounthit7 + spcounthit8 + spcounthit9 + spcounthit10)
      $('.S10_11').text(spcounthit10);
      if ((spcounthit10 + spcountmiss10) === 10) {
        alert("Stand 10 Over!")
        sproundover++;
        console.log(sproundover)
      }
    }
  }
})

////////Add to standcount

$(".AddButton").click(function() {
  if ((standcount) < 12) {
    standcount++
    $(".StandNumber").text(standcount)
  }
})

//Remove from standcount

$(".MinusButton").click(function() {
  if ((standcount) > 1) {
    standcount--
    $(".StandNumber").text(standcount)
  }
})

//Confirm Stands

$(".StandSelect").click(function() {
  sporting++;
  console.log(sporting)
  if ((standcount) === 1) {
    $('.round_two2 , .round_three2 , .round_four2 , .round_five2 , .round_six2 , .round_seven2 , .round_eight2 , .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 2) {
    $(' .round_three2 , .round_four2 , .round_five2 , .round_six2 , .round_seven2 , .round_eight2 , .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 3) {
    $(' .round_four2 , .round_five2 , .round_six2 , .round_seven2 , .round_eight2 , .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 4) {
    $(' .round_five2 , .round_six2 , .round_seven2 , .round_eight2 , .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 5) {
    $(' .round_six2 , .round_seven2 , .round_eight2 , .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 6) {
    $(' .round_seven2 , .round_eight2 , .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 7) {
    $('.round_eight2 , .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 8) {
    $(' .round_nine2 , .round_ten2').hide();
  }
  if ((standcount) === 9) {
    $(' .round_ten2').hide();
  }

  if ((sporting) === 2) {
    alert("SPORTING - STAND 1");
    $(".StandSelect, .StandNumber, .ButtonBox2, .MenuSelection, .MidMenu", ).hide();
    $(".ScoreCard2, .ButtonBox1, .ButtonBox1b, .TotalScore").show();
  }

})
