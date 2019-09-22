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
    return rows.map(row => row.map(string => parseInt(string)));
  }

  columnConverter(rows) {
    return rows.reduce((total, acc) => {
      acc.forEach((num, index) => {
        if (!total[index]) {
          total[index] = []
        }
        total[index].push(num)
      })
      return total
    }, [])
  }

  get rows() {
    return this.rowConverter();
  }

  get columns() {
    const rows = this.rowConverter();
    return this.columnConverter(rows);
  }
}
