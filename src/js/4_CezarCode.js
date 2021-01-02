

function getUtfArrayFromAsciiArray(arr) {
  return arr.map(code => String.fromCharCode(code))
}

function cezarCode(str = '') {
  let charArr = str.split('')

  let asciiArr = charArr.map(char => char.charCodeAt(0))
  let codeAsciiArray = asciiArr.map(char => {
    let shift
    if (char === ' '.charCodeAt(0)) {
      shift = 0
    } else if (char >= 'X'.charCodeAt(0) && char <= 'Z'.charCodeAt(0)) {
      shift = -23
    } else {
      shift = 3
    }
    return char + shift
  })

  let utfArr = getUtfArrayFromAsciiArray(codeAsciiArray)
  return utfArr.join('')
}

console.log(`input A B C ==> ${cezarCode('A B C')}`)

