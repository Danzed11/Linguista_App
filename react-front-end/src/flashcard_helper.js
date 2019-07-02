class Flashcards {
  constructor(wordList) {
    this.cardlist = wordList;
    this.roundNumber = 0;
    this.order = [1,1,2,1,1,2,3,1,1,2,1,1,2,3]
  }

  card() {
    let roundInt = this.order[this.roundNumber % this.order.length]
    let cardpool = this.cardlist.filter((e) => {
      return e.interval == roundInt;
    })
    if (cardpool.length === 0 && roundInt === 1) {
      roundInt = 2
      cardpool = this.cardlist.filter((e) => {
        return e.interval == roundInt;
      })
    } else if (cardpool.length === 0 && roundInt === 2) {
      roundInt = 3
      cardpool = this.cardlist.filter((e) => {
        return e.interval == roundInt;
      })
    } else if (cardpool.length === 0 && roundInt === 3) {
      roundInt = 2
      cardpool = this.cardlist.filter((e) => {
        return e.interval == roundInt;
      })
    } else if (cardpool.length === 0 && roundInt === 2) {
      roundInt = 1
      cardpool = this.cardlist.filter((e) => {
        return e.interval == roundInt;
      })
    }

    let cardFromPool = this.cardlist[Math.floor(Math.random()*this.cardlist.length)];
    this.roundNumber++
    cardFromPool.round = this.roundNumber
    return cardFromPool
  }

  updateInterval(cardId, newInterval) {
    let idx = this.cardlist.findIndex(i => i.id === cardId)
    this.cardlist[idx].interval = newInterval;
  }

}

export default Flashcards;