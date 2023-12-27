// Complejidad Temporal (Time Complexity): O(n)
// Complejidad Espacial (Space Complexity): O(1)

function averagePair(nums, avg){
  let i = 0;
  let j = nums.length - 1;

  while (j>i) {
    console.log(i,j)
    if((nums[i]+nums[j])/2 === avg ) {
      return true;
    } else if( (nums[i]+nums[j])/2 < avg ) {
      i++;
    } else {
      j--;
    }
  }

  return false;

}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8) )

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while( j < str2.length ) {
    console.log(str2[j], str1[i])
    if( str2[j] === str1[i] ) i++;
    if( i === str1.length) return true;
    j++;
  }

  return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  console.log(str1, str2)
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))

  return isSubsequence(str1, str2.slice(1))
}