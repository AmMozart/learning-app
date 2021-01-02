// ===========List
const list = {
  value: 0,
  next: null
}

list.next = { value: 2, next: null }

// 1.Example
// let obj = list
// while (obj) {
//   console.log(obj.value)
//   obj = obj.next
// }

// 2.Example
function printList(lst) {
  console.log(`Print List ==> ${lst.value}`)
  if (lst.next) {
    return printList(lst.next)
  }
}

printList(list)
