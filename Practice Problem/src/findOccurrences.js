/*
  Given:
    a linked list of words
    an index of words
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function findOccurrences(words, index, data) {
  // declare uniqueIndexesOfWords new Set()
  // declare words.head into variable wordZ
  // while wodrZ.next

  // index[wordZ.value].forEach((indexOfWord)=>{
  // uniqueIndexesOfWords.add(data[indexOfWord])
  // })

  //

  const uniqueIndexesOfWords = new Set();
  let wordHolder = words.head;
  while (wordHolder) {
    if (index[wordHolder.value]) {
      index[wordHolder.value].forEach((indexOfWord) => {
        uniqueIndexesOfWords.add(data[indexOfWord]);
      });
    }
    wordHolder = wordHolder.next;
  }
  console.log(uniqueIndexesOfWords);
  return Array.from(uniqueIndexesOfWords);
}

module.exports = findOccurrences;
