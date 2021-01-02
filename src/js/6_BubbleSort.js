const sourceArr = [1, 4, 2, 8, 4, 9, 9, 34, 7, 1, 9, 99, 0]

// 1.Example
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let tmp
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  console.log(arr)
}


bubbleSort(sourceArr)