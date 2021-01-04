function sumFibs(n) {

  const getFibArray = x => {
    const result = [0, 1]
    for (let i = 2; i <= x; i++) {
      result[i] = result[i - 1] + result[i - 2]
    }
    return result
  }

  return getFibArray(n)
    .filter(val => !(val % 2))
    .reduce((sum, val) => sum + val)
}