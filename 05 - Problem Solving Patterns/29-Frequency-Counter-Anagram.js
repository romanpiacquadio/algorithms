// good solution
// time complexity O(3n)
// space complexity O(2n)
function validAnagram ( str1, str2 ) {
  const frequencyStr1 = {};
  const frequencyStr2 = {};

  if ( str1.length !== str2.length ) {
    return false
  }

  for (let char of str1) {
    frequencyStr1[char] = (frequencyStr1[char] || 0) + 1 
  };

  for (let char of str2) {
    frequencyStr2[char] = (frequencyStr2[char] || 0) + 1 
  };

  for (let key in frequencyStr1) {
    if( frequencyStr1[key] !== frequencyStr2[key] ) {
      return false
    }
  }

  return true

}

// better solution
// time complexity O(2n)
// space complexity O(n) 

console.log(validAnagram('', ''));

function validAnagram2 ( str1, str2 ) {
  
  if ( str1.length !== str2.length ) {
    return false
  }

  const frequencyStr = {};

  for (let char of str1) {
    frequencyStr[char] = (frequencyStr[char] || 0) + 1 
  };

  for (let char of str2) {
    if(!frequencyStr[char]) {
      return false
    } else {
      frequencyStr[char] -= 1
    }
  };


  return true

}

console.log(validAnagram2('anagram', 'nagaram'))