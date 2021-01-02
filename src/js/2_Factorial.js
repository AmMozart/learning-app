// 1.Example
// function fact(num) {
//   if (num <= 1) return BigInt(1)
//   return BigInt(num) * BigInt(fact(num - 1))
// }

// 2.Example
// function fact(num) {
//   let arr = [1]
//   for (let i = 1; i <= num; i++) {
//     arr.push(arr[i - 1] * i)
//   }
//   return arr.pop()
// }

// 3.Example
function fact(num) {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result = BigInt(result) * BigInt(i)
  }
  return result
}

console.log(`Factorial of 10 ==> ${fact(10)}`)
