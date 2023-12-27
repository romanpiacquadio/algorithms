// good solution
// time complexity O(n)
// space complexity O(1) 
function countUniqueValues(arr){
  let i=0
  let j=1
  const newArr = [];

  while(i<arr.length) {
    if( arr[i] !== arr[j] ) {
      newArr.push(arr[i])
      i = j;
      j++;
    } else {
      j++;
    }
  }

  return newArr.length;

}

// good solution
// time complexity O(n)
// space complexity O(1) 
function countUniqueValues2(arr) {
  if(arr.length === 0) return 0
  
  let i = 0;
  for( let j=1; j < arr.length; j++ ){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }

  return i+1;
}

console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]))
