// const allergies = {
//   eggs:1,
//   peanuts: 2,
//   shellfish: 4,
//   strawberries: 8,
//   tomatoes: 16,
//   chocolate: 32,
//   pollen: 64,
//   cats: 128
// }

const allergies = [
  'eggs',
  'peanutes',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
]
export class Allergies {
  constructor(allergies) {
    this.allergyScore = allergies
  }

  list() {
    let finalList = [];
    if (this.allergyScore === 1) {
      finalList.push('eggs')
    }   
    if (this.allergyScore === 2) {
      finalList.push('peanuts')
    }
    if (this.allergyScore === 8) {
      finalList.push('strawberries')
    }
    return finalList;
  }

  allergicTo() {

  }
}
