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
