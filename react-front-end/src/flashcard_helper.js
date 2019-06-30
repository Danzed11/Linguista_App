class Flashcards {
  constructor(wordList) {
    this.cardlist = wordList;
    this.roundNumber = 0;
    this.order = [1,1,2,1,3,1,2,1]
  }

  card() {
    let roundInt = this.order[this.roundNumber % this.order.length]
    let cardFromPool = [];
    while (cardFromPool.length === 0) {
      cardFromPool = this.cardlist.filter(function(element) {
        return element.interval = roundInt;
      })
      roundInt++
    }

    cardFromPool = cardFromPool[Math.floor(Math.random()*cardFromPool.length)];
    this.roundNumber++
    cardFromPool.round = this.roundNumber
    return cardFromPool
  }

}

export default Flashcards;