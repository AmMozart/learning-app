function isPangram(string) {
  const wordArray = string.toLowerCase().match(/[a-z]/gim)
  return new Set(wordArray).size === 26 // 26 word in English alphabet
}