function removeZeros(array) {
  for(let i = array.length-1; i >= 0; i--){
    if(array[i] === 0 || array[i] === '0') {
      let tmp, j = i
      
      while(j != array.length-1 && array[j+1] !== 0 && array[j+1] !== '0') {
        tmp = array[j+1]
        array[j+1] = array[j]
        array[j++] = tmp
      }
    }
  }
  return array;
}
module.exports = removeZeros