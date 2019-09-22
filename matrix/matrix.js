//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  rowConverter() {
    let rows = this.matrix.split('\n').map(row => row.split(' '));
    console.log(rows)
    return rows.map(row => row.map(string => parseInt(string)))
  }

  get rows() {
    return this.rowConverter();
  }

  get columns() {
    
  }
}
