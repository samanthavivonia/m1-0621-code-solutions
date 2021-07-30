console.log('Lodash is loaded:', typeof _ !== 'undefined');

var player1 = {
  name: 'Stac',
  hand: []
};

var player2 = {
  name: 'Kenj',
  hand: []
};

var player3 = {
  name: 'Vic',
  hand: []
};

var player4 = {
  name: 'Yuri',
  hand: []
};

// var players = [player1, player2, player3, player4];

var cardDeck = {
  rank: ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],
  suit: ['Clubs', 'Diamonds', 'Hearts', 'Spades']
};

function cardScore(card) {
  if (card.rank === 'Ace') {
    return 11;
  } if (card.rank === 'King' || card.rank === 'Queen' || card.rank === 'Jack') {
    return 10;
  } else {
    return (parseInt(card.rank));
  }
}

function handScore(player) {
  return (cardScore(player.hand[0]) + cardScore(player.hand[1]));
}

// PLAYING THE GAME NOW!!!!!!!! //

function playGame() {

  // Picking 8 cards from the deck //

  var dealerPicked8 = [];

  while (dealerPicked8.length < 8) {
    var newCard = {
      rank: cardDeck.rank[_.random(0, 13)],
      suit: cardDeck.suit[_.random(0, 3)]
    };
    if (dealerPicked8.includes(newCard) === false) {
      dealerPicked8.push(newCard);
    }
  }

  console.log('Dealer chose: ', dealerPicked8);

  player1.hand.push(dealerPicked8[0]);
  player1.hand.push(dealerPicked8[1]);
  player2.hand.push(dealerPicked8[2]);
  player2.hand.push(dealerPicked8[3]);
  player3.hand.push(dealerPicked8[4]);
  player3.hand.push(dealerPicked8[5]);
  player4.hand.push(dealerPicked8[6]);
  player4.hand.push(dealerPicked8[7]);

  console.log('Player 1\'s Hand: ', player1.hand, '. Score: ', handScore(player1));
  console.log('Player 2\'s Hand: ', player2.hand, '. Score: ', handScore(player2));
  console.log('Player 3\'s Hand: ', player3.hand, '. Score: ', handScore(player3));
  console.log('Player 4\'s Hand: ', player4.hand, '. Score: ', handScore(player4));

  var winningNumber = Math.max(handScore(player1), handScore(player2), handScore(player3), handScore(player4));
  var winners = [];

  if (handScore(player1) === winningNumber) {
    winners.push('Player 1');
  } if (handScore(player2) === winningNumber) {
    winners.push('Player 2');
  } if (handScore(player3) === winningNumber) {
    winners.push('Player 3');
  } if (handScore(player4) === winningNumber) {
    winners.push('Player 4');
  }

  console.log('Winner(s):', winners);

  player1.hand = [];
  player2.hand = [];
  player3.hand = [];
  player4.hand = [];
  dealerPicked8 = [];

}

console.log(playGame());
