/*
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 */

function rgb(string) {
  var ht= {};
  let lowCount;
  
  for (let i = 0; i < string.length; i++) {
    let index = string.charCodeAt(i)-97;
    ht[index] = (ht[index] || 0) + 1;
  } 
  
  console.log(ht);
  
 for(let key in ht) {
   console.log( lowCount);
     if (!lowCount || ht[key] < lowCount) {
       
      console.log([key, ht[key]]);
       lowCount = ht[key];
     }
}
  
  
  return lowCount;
}



var inputString = "rbgrbrgrgbgrrggbbbbrgrgrgrg"
console.log(rgb(inputString));


