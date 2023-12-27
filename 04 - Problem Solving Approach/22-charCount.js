

// function chatCount(str) {
//   // make object to return at end
//   const chars = {};

//   //loop over string, for each character...
//   for( let i=0; i<str.length; i++) {
//     let char = str[i].toLowerCase()
//     if(/[a-z0-9]/.test(char)) {
//       // if the char is a number/letter AND the key is in the object add one to count
//       if(chars[char] > 0) {
//         chars[char]++;
//       } else {
//       // else add one
//         chars[char] = 1;
//       }  
//     }
//   }  
  
//   // return object
//   return chars;
// }

function chatCount(str) {
  // make object to return at end
  const chars = {};

  //loop over string, for each character...
  for( let char of str) {
    char = char.toLowerCase()
    if(isAlphanumeric(char)) {
      // if the char is a number/letter AND the key is in the object add one to count
      chars[char] = ++chars[char] || 1;      
    }
  }  
  // return object
  return chars;
}

console.log(chatCount('Your PIN number is 1234!'))

function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric ( 0 - 9 )
      !(code > 64 && code < 91) && // upper alpha (A - Z)
      !(code > 96 && code < 123)) { // lower alpha ( a - z )
    return false
  }
  return true
}