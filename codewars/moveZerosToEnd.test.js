const removeZeros = require('./moveZerosToEnd.js')
describe('tests for move zeros to end', () => {
  test('array within zeros', () => {
    expect(removeZeros([2,6,1,5,8,null,undefined,'asd'])).toEqual([2,6,1,5,8,null,undefined,'asd'])
  })
  test('array with all zeros', () => {
    expect(removeZeros([0,0,'0',0,'0','0',0,'0'])).toEqual([0,0,'0',0,'0','0',0,'0'])
  })
  test('array [1,0,2,0,\'0\',6,0,false] to be [1,2,6,false,0,0,\'0\',0]', () => {
    expect(removeZeros([1,0,2,0,'0',6,0,false])).toEqual([1,2,6,false,0,0,'0',0])
  })
  test('array with negative numbers', () => {
    expect(removeZeros([1,0,-2,0,'0',-6,0,false])).toEqual([1,-2,-6,false,0,0,'0',0])
  })
})