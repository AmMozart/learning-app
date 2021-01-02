const sourceArr = [1, 34, 7, 1, 9, 99, 0]

// 1.Example
function shuffle(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let j = Math.floor(Math.random() * len)
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}

function bogosort(arr) {
  let sorted = false
  while (!sorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        shuffle(arr)
        sorted = false
        break
      } else {
        sorted = true
      }
    }
  }
  return arr
}

console.log(bogosort(sourceArr))