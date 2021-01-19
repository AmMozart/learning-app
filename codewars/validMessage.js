function isAValidMessage(message) {
  const matchArr = message.match(/[0-9]*/g)

  let x = matchArr.reduce((acc, val, i) => {
    let result = acc
    if (val) {
      result = +val + acc + 1
      if (acc !== i) return 0
    }
    return result
  }, 0)

  return matchArr.length - 1 === x
}