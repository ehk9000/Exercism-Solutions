
export const toRna = (nucleotide) => {
  return nucleotide.split('').map(char => {
    switch (char) {
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'T':
        return 'A';
      case 'A':
        return 'U'
      default: 
      return ''

    }
  }).join('')
};
