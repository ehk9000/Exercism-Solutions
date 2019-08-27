
export class HighScores {
  constructor(input) {
    this.allScores = input;
  }

  get scores() {
    return this.allScores
  }

  get latest() {
    return this.allScores.pop()
  }

  get personalBest() {
    return this.allScores.sort().shift()
  }

  get personalTopThree() {
    const sorted = this.allScores.sort((a, b) => b - a)
    return sorted.slice(0,3)

  }
}
