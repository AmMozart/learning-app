
const tree = {
  value: 3,
  children: [
    {
      value: 11,
      children: null
    },
    {
      value: 2,
      children: [
        {
          value: 1,
          children: null
        }
      ]
    }
  ]
}

// 1. Рекурсивный подход нахождения суммы

// function sumTree(node) {
//   let sum = node.value
//   node.children &&
//     (sum += node.children.reduce((x, y) => x + sumTree(y), 0))
//   return sum
// }

// 2. Очередь

function sumTree(tree) {
  let sum = 0
  const arr = [tree]
  while (arr.length > 0) {
    sum += arr[0].value
    let x = arr.shift().children
    x && arr.push(...x)
  }
  return sum
}

console.log(sumTree(tree))
