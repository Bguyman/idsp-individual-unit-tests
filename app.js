const deck = []

for(let i = 0; i <= 50; i++) {
    deck.push(i);
}

//console.log(deck);

const shuffleDeck = (deck) => {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}


const distributeBetweenPlayers = (player, deck) => {
//takes in a number of players
//distributes seven cards from the deck to them, each of which is an array
//cards must be unique and must be random drawn

    const hands = [];
    const gameDeck = deck;
    shuffleDeck(gameDeck);

    let requiredTotal = Number(player) * 7;

    if(gameDeck.length < requiredTotal + 1) {
        return "Not Enough Cards In Deck."
    }

    if(player <= 7) {
        let count = 0;
        let hand = [];
        for(let i = 0; i < player * 7; i++) {
            count++;
            hand.push(gameDeck[i]);
            if(count == 7) {
                count = 0;
                hands.push(hand);
                hand = [];
            }
        }
    }


    return hands;
}

module.exports = distributeBetweenPlayers;