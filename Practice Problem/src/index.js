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
  //declare result object
  data.forEach((sentence, index) => {
    //for each sentence (in other words index) of the Array
    sentence
      //make each word lowercase
      .toLowerCase()
      //split using regex provided
      .split(/[\s.,';]/)
      // filter out empty strings
      .filter(Boolean)
      //for each word in the array we made
      .forEach((word) => {
        // if the word is not already in our result object
        if (!result[word]) {
          // create the key and make a new set as the value starting with the curretn index
          result[word] = new Set([index]);
        }
        //if the word is alrerady in our object
        else {
          // add the index to the set at that key
          result[word].add(index);
        }
      });
  });
  // create array from result iterate through array
  Object.entries(result).forEach(
    ([word, set]) => (result[word] = Array.from(set))
  );
  return result;
}

module.exports = index;
