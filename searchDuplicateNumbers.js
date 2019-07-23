
/*
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

function getDuplicates(arr) {
    var ht = [];
    var result = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
         var value = arr[i];
         console.log(ht);
         console.log(value);
         if(ht[value] !== 1) {
               ht[value] = 1;
         }else{
           result[j++] = value;
         }
    }
    return result;
}
var arr= [5, 5, 1, 8, 8];
console.log(getDuplicates(arr));