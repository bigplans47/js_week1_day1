function Card (name, id) {
  this.name = name;
  this.id = id;
}

var card1 = new Card('Ace', 1);
var card2 = new Card('Ace', 2);
var card3 = new Card('King', 3);
var card4 = new Card('King', 4);

var card_array = [card1,card2,card3,card4];

// console.log(card1.name);
// console.log('yo');

var cardId = parseInt(prompt("please enter id of card:"));
var cardId2 = parseInt(prompt("please enter id of card:"));

// console.log(getName(card_array, cardId));
if (getName(card_array, cardId) == getName(card_array, cardId2)) {
  console.log("it's a match!")
}

// if (cardId == cardId2) {
//
// }

// console.log(cardId);
//
//   card_array.forEach(function(card) {
//   console.log(card.name)
//
//
//   });

  // if (id == card_array[0])






// if card 1 has same name as card 2 then its a match and fli the card

function getName(card_array, cardId) {
  var name;
  card_array.forEach(function(card) {
    console.log(cardId)
    if (card.id == cardId) {
      console.log('hey');
      name = card.name;
      console.log('hey22');
    } else {
      console.log('hey else');
    }
  });
  return name;
}
