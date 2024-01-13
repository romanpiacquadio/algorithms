

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!

  function capitalizeWord(word) {
    return word.split("")[0].toUpperCase() + word.split("").slice(1).join("")
  }

  if(arr.length === 0) return []
  if(arr.length === 1) {
    const capitalizedWord = capitalizeWord(arr[0])
    return [capitalizedWord]
  }

  const capitalizedWord = capitalizeWord(arr[0])
  return [capitalizedWord].concat(capitalizeFirst(arr.slice(1)))
  
}

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']




function nestedEvenSum (obj, sum=0) {
  // add whatever parameters you deem necessary - good luck!
  for(let key in obj) {
    if(typeof(obj[key]) === 'object') {
      sum += nestedEvenSum(obj[key])
    } else if (typeof(obj[key]) === 'number' && obj[key] % 2 === 0) {
      sum += obj[key]
    }
  }

  return sum
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

// console.log(nestedEvenSum(obj1))




function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return []
  if(arr.length === 1) return [arr[0].toUpperCase()]

  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']



function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

// console.log(stringifyNumbers(obj))


function collectStrings(obj, stringArray=[]) {
  for(let key in obj) {
    if( typeof obj[key] === 'string' ) {
      console.log(obj[key])
      stringArray.push(obj[key])
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      console.log(obj[key])
      collectStrings(obj[key], stringArray)
    }
  }

  return stringArray;
}

const obj2 = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj2))