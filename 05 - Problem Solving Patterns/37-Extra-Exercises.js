// good solution
// time complexity O(n * log(n))
// space complexity O(n)
function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  if( num1.toString().split('').sort().join('') === num2.toString().split('').sort().join('') ) {
      return true
  }
  
  return false
}

console.log(sameFrequency(182,281))

// better solution
// time complexity O(n)
// space complexity O(1) 
function sameFrequency2(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let i = 0; i < strNum2.length; i++) {
    countNum1[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
  }

  for(let key in countNum1) {
    if(countNum1[key] !== countNum2[key]) return false
  }

  return true

}

// better solution
// time complexity O(n)
// space complexity O(n) 
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
 
  let start = 0;
  let next = 1;
  while (next < args.length) {
    console.log(next)
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// console.log(areThereDuplicates(1,2,4,5,6,6)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a')); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'd')); // false

// better solution
// time complexity O(n)
// space complexity O(n) 
function areThereDuplicates2() {
  // good luck. (supply any arguments you deem necessary.)
  let collection = {};
  for(let key in arguments) {
    collection[arguments[key]] = (collection[arguments[key]] || 0) + 1; 
  }
  for(let key in collection) {
    if(collection[key] > 1) return true;
  }
  return false;
}

// console.log(areThereDuplicates2(1,2,4,5,6,6)); // true
// console.log(areThereDuplicates2('a', 'b', 'c', 'd', 'a')); // true
// console.log(areThereDuplicates2('a', 'b', 'c', 'd')); // false


function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

