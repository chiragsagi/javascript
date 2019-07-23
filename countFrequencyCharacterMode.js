/*
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 */

 function characterMode(string) {
   var ht = {};
   var arr = string.split("");
   //.log(arr);
   var maxLetter = "";
   var currMaxCount = 0;
   
  for (var i = 0;i<arr.length;i++ ){
    if(ht[arr[i]] !== 1){
      ht[arr[i]] = 1
      currMaxCount = 1;
    }
    else{
      ht[arr[i]] = ht[arr[i]] + 1;
      if(currMaxCount <= ht[arr[i]] ){
        maxLetter = maxLetter + arr[i];
        currMaxCount = ht[arr[i]];
      }else if( ht[arr[i]]  > currMaxCount){
         maxLetter = arr[i];
          currMaxCount =ht[arr[i]];
      }
      
      
    }
  }
   return maxLetter;
 }
 
 
 var inputString = "noon";
 console.log(characterMode(inputString));