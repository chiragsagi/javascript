function unique(arr) {
    var ht = [];
    var result = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
         var value = arr[i];
         console.log(ht);
         console.log(value);
         if(ht[value] !== 1) {
               ht[value] = 1;
               result[j++] = value;
               
         }
    }
    return result;
}
var arr= [5, 5, 1, 8, 8];
console.log(unique(arr));