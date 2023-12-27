function same( arr1, arr2 ) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
  }

  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; 
  }

  for (let key in frequencyCounter1) {
    console.log(frequencyCounter1[key], frequencyCounter2[key**2])
    if( frequencyCounter1[key] !== frequencyCounter2[key**2] ) {
      return false
    }
  }

  return true

}

console.log(same( [1,2,3,2,5], [9,1,4,4,25] ));

