function reverse(word){
  // add whatever parameters you deem necessary - good luck!
  if(word.length === 0) return ''
  if(word.length === 1) return word

  return word[word.length-1] + reverse(word.slice(0, word.length-1))
}

function reverse2(word) {
  return word.split('').reverse().join('')
}

console.log(reverse2('Hola'))


function isPalindrome(word){
  // add whatever parameters you deem necessary - good luck!
  if(word.length === 0) return false
  
  return word === reverse(word) 
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false



// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

const isOdd = (num) => num % 2 !== 0

function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return false
  if(arr.length === 1) return callback(arr[0])

  return callback(arr[0]) || someRecursive(arr.slice(1), callback) 
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// console.log(someRecursive([1,2,3,4], isOdd));
// console.log(someRecursive([4,6,8,9], isOdd));
// console.log(someRecursive([4,6,8], isOdd));




function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];

  function recursiveFlatten(subArr) {
    for(let i = 0; i < subArr.length; i++) {
      if(Array.isArray(subArr[i])) {
        recursiveFlatten(subArr[i])
      } else {
        result.push(subArr[i]);
      }
    }
  }

  recursiveFlatten(arr);
  return result;

}

//console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


