const range = {
  from: 0,
  to: 10,
  method() { },
  [Symbol.iterator]() {
    let last = this.to
    let current = this.from
    return {
      next() {
        if (current <= last)
          return {
            done: false,
            value: current++
          }
        else
          return {
            done: true
          }
      }
    }
  }
}

for (let i in range) {
  console.log(i)
}

// arr[Symbol.iterator] = function* () {
//   let i = 0
//   while (true) {
//     yield i++
//   }
// }

// for (let i of arr) {
//   console.log(i)
// }
// console.log(...arr)

// arr.map(function (elem, i, arr) {
//   console.log(`elem = ${elem}, index = ${i} of array [${arr}]`)
// })

// function validatePIN(pin) {
//   if (pin.length === 4 || pin.length === 6) {
//     if (+pin >= 0)
//       return true
//   }
//   return false
// }

//console.log(validatePIN('1234'))