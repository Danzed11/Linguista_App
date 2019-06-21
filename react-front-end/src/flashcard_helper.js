class Flashcards {
  constructor(wordList) {
    this.cardlist = wordList;
    this.roundNumber = 0;
    this.order = this.cardOrder(this.highestInterval(this.cardlist));
  }

  flatten(items) {
    const flat = [];
    let self = this;

    items.forEach(item => {
      if (Array.isArray(item)) {
        flat.push(...self.flatten(item));
      } else {
        flat.push(item);
      }
    });
    return flat;
  }

  recursiveOrder (n) {
    let self = this
    if (n !== 0) {
      let output = []
      output.push(self.recursiveOrder(n-1))
      output.push(self.recursiveOrder(n-1))
      output.push(n);
      return output
    }
    return
  }

  cardOrder (highestInt) {
    let output = this.recursiveOrder(highestInt)
    output = this.flatten(output)
    output = output.filter(function (el) {
      return el != null;
    });
    return output
  }

  highestInterval (db) {
    let highestNumb = 1;
    for (let word of db) {
      if (word.interval > highestNumb) {
        highestNumb = word.interval
      }
    }
    return highestNumb
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
    console.log(`Card ${this.roundNumber + 1}`)
    console.log(cardFromPool);
    this.roundNumber++
    cardFromPool.round = this.roundNumber
    return cardFromPool
  }

}

export default Flashcards;