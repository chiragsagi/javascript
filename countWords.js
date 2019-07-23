/*
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
*/

function wordCount(inputString) {
  var ht = {};
  inputString = inputString.replace(/[.'!,]/g,"" );
  inputString= inputString.toLowerCase();
  
  var arr = inputString.split(" ");
  console.log(arr);
  //htSize = 0;
  
  for(let i= 0;i < arr.length; i++){
    if(ht.hasOwnProperty(arr[i]) === false){
      ht[arr[i]] = 1;
      //htSize +=1;
      
    }
    else{
      ht[arr[i]] = ht[arr[i]] +1;
    }
  }
  
  return ht;
}

var inputString = "It's a man, it's a plane, it's superman!";

console.log(wordCount(inputString));

