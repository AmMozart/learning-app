function catalog(s, article) {

  function getParam(str, name) {
    let regStart = new RegExp(`<${name}>`, 'i')
    let regEnd = new RegExp(`<\/${name}>`, 'i')
    return str.slice(str.match(regStart).index + name.length + 2, str.match(regEnd).index)
  }

  const arr = s.split('\n\n')
  const result = arr.filter(str => str.includes(article))

  return result[0] ?
    result.reduce((acc, val) =>
      acc + (acc ? '\r\n' : '')
      + `${getParam(val, 'name')} > prx: $${getParam(val, 'prx')} qty: ${getParam(val, 'qty')}`
      , '')
    : 'Nothing'
}
module.exports = catalog