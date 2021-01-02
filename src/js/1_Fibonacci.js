// 1. Example
// function getFibonacci(index) {
//   if (index === 0) return 0
//   if (index < 2) return 1
//   return getFibonacci(index - 1) + getFibonacci(index - 2)
// }

// 2. Example
// function getFibonacci(index) {
//   if (index === 0) return 0
//   if (index <= 2) return 1
//   let arr = [0, 1, 1];
//   for (let i = 2; i < index; i++) {
//     let elem = BigInt(arr[i]) + BigInt(arr[i - 1])
//     arr.push(elem)
//   }
//   return arr.pop()
// }

// 3. Example
function getFibonacci(elem) {
  let a = 0, b = 1
  for (let i = 0; i < elem; i++) {
    a = a + b
    b = a - b
  }
  return a
}

console.log(`Fibbonacci of 10 ==> ${getFibonacci(10)}`)
