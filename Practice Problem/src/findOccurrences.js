/*
  Given:
    a linked list of words
    an index of words
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function findOccurrences(words, index, data) {
  let word = words.head;
  const result = new Set();
  while (word) {
    if (word.value) {
      index[word.value].forEach((line) => result.add(data[line]));
    }
    word = word.next;
  }
  return Array.from(result);
}

module.exports = findOccurrences;
