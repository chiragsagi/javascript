
function countingSort(arr, min, max) {
  let count = new Array(max - min + 1).fill(0);
  console.log(count);
  for (i = 0; i < arr.length; i ++) {
    //console.log(count[arr[i] - min]);
    count[arr[i] - min] = count[arr[i] - min] + 1
    
  }
  console.log(count);
  
  let index = 0;
  for (let i = 0; i < max + 1; i ++ ) {
    while (count[i - min] > 0) {
      console.log("value of i " + i);
      console.log("value of index " + i);
      console.log("value of index "+ arr);
      arr[index] = i;
      index += 1;
      count[i - min] = count[i - min] - 1;
    }
  }
  return arr;
  
}

var arr= [5, 3, 1, 8, 9];
console.log(countingSort(arr,1,9));
