
/*
 *  Anagram Pair
 *
 *  Given two strings, determine if the strings are anagrams of one another.
 *
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

function anagramPair(string1, string2) {
  var counts = [];
  if (string1.length !== string2.length) { return false; }
  
  for (let i = 0; i < string1.length; i++) {
    let index = string1.charCodeAt(i)-97;
    counts[index] = (counts[index] || 0) + 1;
    
  }
 
  
  for (let i = 0; i < string2.length; i++) {
    let index = string2.charCodeAt(i)-97;
    if (!counts[index]) { 
      return false; 
    }
    else { 
      counts[index]--; 
    }
  }
  return true;
}

var inputString1 = "catcat";
var inputString2 = "actcbt";

console.log(anagramPair(inputString1,inputString2));

