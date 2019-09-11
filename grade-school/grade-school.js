//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  // add constructor for state 
  constructor() {
    this.currentRoster = {}
  }

  roster() {
    // until second to last test, had return this.currentRoster
    return JSON.parse(JSON.stringify(this.currentRoster))
  }

  add(name, grade) {
    // check if grade already exists. 
    if (!Object.keys(this.currentRoster).includes(grade.toString())) {
      // if it doesn't, make new key value with grade and array of name 
      this.currentRoster[grade] = [name];
    } else {
      // if it does exist, go to that grade and push name into array 
      this.currentRoster[grade].push(name)
    }
    this.grade(grade)
  }

  grade(grade) {
    if (!this.currentRoster[grade]) {
      return []
    }
    return JSON.parse(JSON.stringify(this.currentRoster[grade].sort()))
  }
}
