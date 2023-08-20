/*
 Given an array of sentences making up a body of text,
 output an index of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function index(data) {
  // no duplicate words, each word in the index is unique and its line is only counted once
  // case insensitive, words are same regardless of capitalization
  // hyphenated words are single words
  // index does not need to be sorted
  // regex expression provided for .split( `/[\s.,';]/`)
  // empty strings are not valid and are not counted

  //PSEUDOCODE

  // seperate each line data[0] data.forEach((line,index)=>{})
  // lowercase, split, filter spaces
  // data.forEach((line,index)=>{line.toLowerCase().split(regex).filter(Boolean)}
  // now have array of individual words with no spaces
  // foreach array and add words to object
  // each key holds a set, check to see if key exists, if exists add index to set
  // if doesnt exist create new set with index

  const result = {};
  data.forEach((line, index) => {
    line
      .toLowerCase()
      .split(`/[\s.,';]/`)
      .filter(Boolean)
      .forEach((word) => {
        if (!result[word]) {
          result[word] = new Set(index);
        } else {
          result[word].add(index);
        }
      });
  });
  Object.entries(result).forEach(
    ([word, set]) => (result[word] = Array.from(set))
  );
  return result;
}

module.exports = index;
