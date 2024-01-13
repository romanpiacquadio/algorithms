function power(base, exp){
  if(exp === 0) return 1;
  if(exp === 1) return base;
    
  return base * power(base, exp-1);
}

//console.log(power(2,3));

// 2 * power(2,2)
//       2    * power(2,1)
//                  2 

function productOfArray(arr) {
  if(arr.length === 0) return 0
  if(arr.length === 1) return arr[0]
  
  return arr[0] * productOfArray(arr.slice(1, arr.length));
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60
// 1 * productOfArray([2,3,10])
//        2  *  productOfArray([3,10]) 
//                       3 *  productOfArray([10])
//                                        10


function recursiveRange(n){
  if( n === 0) return 0
  if( n === 1) return 1

  return n + recursiveRange(n-1)
   
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 


const fibonacci = (n) => {
  if (n===0) return 0
  if (n===1) return 1

  return fibonacci(n-1) + fibonacci(n-2)
}

// fib(4) // 55
// fib(3) + fib(2)
// (fib(2) + fib(1)) + (fib(1) + fib(0))
// ((fib(1) + fib(0)) + fib(1))) + (fib(1) + fib(0))
//console.log(fibonacci(4))

const factorial = (n) => {
  if (n===1 || n===0) return 1
  
  return n * factorial(n-1)
}

