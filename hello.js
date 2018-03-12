function Card (name, id) {
  this.name = name;
  this.id = id;
  this.unmatched = true;
}

var card1 = new Card('Ace', 1);
var card2 = new Card('Ace', 2);
var card3 = new Card('King', 3);
var card4 = new Card('King', 4);

var card_array = [card1,card2,card3,card4];

function getCard(card_array, cardId) {
  var theCard;
  card_array.forEach(function(card) {
    if (card.id == cardId) {
      theCard = card;
    }
  });
  return theCard;
}

// var gameOver = false;
// function gameOver () {
//   for (var i = 0; i < card_array.length; i++) {
//     if (card_array[i].matched == false) {
//         gameOver = false;
//         return;
//       } else {
//         gameOver = true;
//       }
//   }
// }

function anyUnmatched(card_array) {
  for (var i = 0; i < card_array.length; i++) {
    if (card_array[i].unmatched) {
      return true;
    }
  }
  return false;
}



$(document).ready(function($) {
  // var z_id;
  // $(document).on('click', '.card', function(){
  //     console.log(z_id);
  //       var that = $(this);
  //       z_id = that.attr('id');
  //   });

  var card1Clicked = null;
  var card2Clicked = null;
  // $(document).on('click', '.card', function(){
  $('.card').click(function(){
    cardId = $(this).attr('id');
    if (!card1Clicked) {
      card1Clicked = getCard(card_array, cardId);
    } else {
      card2Clicked = getCard(card_array, cardId);
      console.log(card1Clicked);

      if (card1Clicked.name == card2Clicked.name) {
        $('#' + card1Clicked.id).text(card1Clicked.name);
        $('#' + card2Clicked.id).text(card2Clicked.name);
        // alert("it's a match!");
        card1Clicked.unmatched = false;
        card2Clicked.unmatched = false;
      }
      console.log(anyUnmatched(card_array));
      card1Clicked = null;
      card2Clicked = null;
    }
  });


// good stuff
  // while (anyUnmatched(card_array)) {
  //   var cardId1 = parseInt(prompt("please enter id of card:"));
  //   var cardId2 = parseInt(prompt("please enter id of card:"));
  //   var match1 = getCard(card_array, cardId1)
  //   var match2 = getCard(card_array, cardId2)
  //
  //   if (match1.name == match2.name) {
  //     $('#' + match1.id).text(match1.name);
  //     $('#' + match2.id).text(match2.name);
  //     // alert("it's a match!");
  //     match1.unmatched = false;
  //     match2.unmatched = false;
  //     console.log(card_array);
  //   }
  // }
  // alert("you won!");
});
