const distributeBetweenPlayers = require("./app")

const deck = []

for(let i = 0; i <= 50; i++) {
    deck.push(i);
}

const lowDeck = [1, 2, 3, 4, 5, 6];

test("takes 2 players, and returns two hands", () => {
    const hands = distributeBetweenPlayers(2, deck);
    expect(hands.length).toBe(2);
})

test("returns an error message if too many players to distribute between", () => {
    const hands = distributeBetweenPlayers(8, deck);
    expect(hands).toBe("Not Enough Cards In Deck.");
})

test("takes 1 player, and returns one hand with seven cards", () => {
    const hands = distributeBetweenPlayers(1, deck);
    expect(hands[0].length).toBe(7);
})

test("returns message if not enough cards in deck to distribute between players", () => {
    const hands = distributeBetweenPlayers(1, lowDeck);
    expect(hands).toBe("Not Enough Cards In Deck.");
})