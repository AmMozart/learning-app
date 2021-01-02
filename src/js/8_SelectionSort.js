const sourceArr = [1, 4, 2, 8, 0, 4, 19, 9, 34, 7, 15, 9, 99, 0]

// 1.Example
function selectionSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    let tempInd = j
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[tempInd] > arr[i]) tempInd = i
      if (i == arr.length - 1) {
        let tmp = arr[j]
        arr[j] = arr[tempInd]
        arr[tempInd] = tmp
      }
    }
  }
  return arr
}

console.log(selectionSort(sourceArr))