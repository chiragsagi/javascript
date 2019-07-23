Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either 0 or 1).

See if you can solve this in O(N) time and O(1) auxiliary space.

Try to solve this using a frequency count rather than using multiple pointers, or using a comparison sort function.

Input  [0, 1, 1, 0, 1, 1, 1, 0]

Output  [0, 0, 0, 1, 1, 1, 1, 1]



function sortBitArray(arr){
  var ht = {};
  var resultArr=[];
  for(var i=0;i= arr.length-1;i++){
    if (arr[i] in ht){
      ht[arr[i]] = ht[arr[i]]+ 1;
    }
    else{
      ht[arr[i]]= 1;
    }    
  }

  console.log(ht[0]);

  for(var i=0;i= arr.length-1;i++){
    if (i ht[0]){
       resultArr.push(0);
    }else{
      resultArr.push(1);
    }
  }
  return resultArr;

}

var arr = [0, 1, 1, 0, 1, 1, 1, 0];
console.log(sortBitArray(arr));

