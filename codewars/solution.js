function solution(number) {
  let result = 0
  for (let i = 3; i < number; i++) {
    result += !(i % 3) || !(i % 5) ? i : 0
  }
  return result
}
solution()