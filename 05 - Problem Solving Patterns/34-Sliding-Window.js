// naive solution
// time complexity O(n2)
// space complexity O(1) 
function maxSubArraySumNaive(arr, num) {
  let maxSum = -Infinity;
  let tempSum = 0;
  let i=0;
  let j=num-1;

  if( arr.length < num ) return null;

  for(let i=0; i < arr.length-num ; i++) {
    for( let j=i; j < i+3; j++) {
      tempSum += arr[j];
    }
    if( tempSum > maxSum) {
      maxSum = tempSum;
    }
    tempSum = 0;
  }

  return maxSum;

}

// Find the largest sum of n consecutive numbers
// In this case: the max sum of 3 consecutive numbers
//console.log(maxSubArraySumNaive([2,6,9,2,1,8,5,6,3], 3))

// good solution
// time complexity O(n)
// space complexity O(1) 
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if( arr.length < num ) return null;
  for(let i=0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;
  for(let i=num; i < arr.length; i++) {
    console.log(i)
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Find the largest sum of n consecutive numbers
// In this case: the max sum of 3 consecutive numbers
console.log(maxSubArraySum([2,6,9,2,1,8,5,6,10], 3))