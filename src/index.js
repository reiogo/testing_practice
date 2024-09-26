export const capitalize = function capitalizeFirstInString(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);

}

export const reversed = function reverseString(string) {
  let returnstring = '';
  for (let i = string.length; i >= 0; i--) {
    returnstring += string.slice(i, i + 1);
  }
  return returnstring;
}

export const calculator = {
  add: (a,b) => a+b,
  substract: (a,b) => a - b,
  divide: (a,b) => {
    if (b == 0){
      return undefined
    }
    return a/b;
  },
  multiply: (a,b) => a*b,
};


export const caesarshift = function encodestring(string, shiftLength) {
  const lowerCaseA = 'a'.charCodeAt(); 
  const lowerCaseZ = 'z'.charCodeAt();
  const upperCaseA = 'A'.charCodeAt(); 
  const upperCaseZ = 'Z'.charCodeAt();
  let nextCode = 0;
  let res = ''

  for (let i = 0; i < string.length; i++) {
    if(lowerCaseA <= string[i].charCodeAt() && string[i].charCodeAt() <= lowerCaseZ) {
      nextCode =
          ((string[i].charCodeAt() + shiftLength)- lowerCaseA)%26 + lowerCaseA;
        res += String.fromCharCode(nextCode);

    } else if( upperCaseA <= string[i].charCodeAt() && string[i].charCodeAt() <= upperCaseZ) {
      nextCode =
          ((string[i].charCodeAt() + shiftLength)- upperCaseA)%26 + upperCaseA;
        res += String.fromCharCode(nextCode);
    } else {
      res += string[i];
    }
  }
  return res;
}

export function analyzeArray(array) {
  let average = array.reduce((a,b) => a+b, 0)/array.length ;
  let min = Math.min(...array);
  let max = Math.max(...array);
  
  return {average, min, max, length: array.length};

}

