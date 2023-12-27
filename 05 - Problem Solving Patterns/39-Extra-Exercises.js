// Complejidad Temporal (Time Complexity): O(n)
// Complejidad Espacial (Space Complexity): O(1)
//Sliding window
function maxSubarraySum(arr, num) {
  if(num>arr.length) return null
  
  let total;
  let currentTotal;
  
  for( let i=0; i<num; i++) {
    total = (total || 0) + arr[i]
  }
  currentTotal = total

  for( let i=0; i<arr.length-num; i++) {
    currentTotal = currentTotal - arr[i] + arr[i+num]
    console.log(total, '-', arr[i], '+', arr[i+num], '=', currentTotal)
    if(currentTotal > total) {
      total = currentTotal
    }
  }
  
  return total
  
}

maxSubarraySum([100,200,300,400, 500,600], 3) // 1500
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5



function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      console.log( start )
      start = Math.max(start, seen[char]);
      console.log( start )
      
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('rithmschool')
