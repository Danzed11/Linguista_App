let testDB = [{
  user_id: 1,
  foreign_word: 'bonjour',
  english_word: 'hello',
  interval: 3
  },
  {
  user_id: 1,
  foreign_word: 'dancer',
  english_word: 'dance',
  interval: 2
  },
  {
  user_id: 1,
  foreign_word: 'manger',
  english_word: 'eat',
  interval: 2
  },
  {
  user_id: 1,
  foreign_word: 'cocasse',
  english_word: 'comical',
  interval: 1
  },
  {
  user_id: 1,
  foreign_word: 'mechant',
  english_word: 'mean',
  interval: 1
  },
  {
  user_id: 1,
  foreign_word: 'parle',
  english_word: 'speak',
  interval: 1
  },
  {
  user_id: 1,
  foreign_word: 'edifice',
  english_word: 'building',
  interval: 1
  },]

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
    if (n != 0) {
      let output = []
      let output2 = []
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
    let roundInt = this.order[this.roundNumber]
    let cardFromPool = this.cardlist.filter(function(element) {
      return element.interval == roundInt;
    })
    cardFromPool = cardFromPool[Math.floor(Math.random()*cardFromPool.length)];
    console.log(`Card ${this.roundNumber + 1}`)
    console.log(cardFromPool);
    this.roundNumber++
    // return cardFromPool
    return 'Card ' + this.roundNumber
  }

}

export default Flashcards;