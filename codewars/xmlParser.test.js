const catalog = require('./xmlParser.js')

describe('Primary test:', () => {
  test('Test for don\'t matched article, return Nothing', () => {
    expect(catalog('zcxsgrg h fgjhfgdr gregfgdg !!', 'article')).toBe('Nothing')
  })
  test('test for product \"salt\"', () => {
    expect(catalog('<prod><name>salt</name><prx>10</prx><qty>100</qty></prod>', 'salt'))
      .toBe('salt > prx: $10 qty: 100')
  })
  test('is string result', () => {
    expect(catalog('<prod><name>salt</name><prx>10</prx><qty>100</qty></prod>', 'salt'))
      .toBeTruthy()
    expect(catalog('<prod><name>salt</name><prx>10</prx><qty>100</qty></prod>', 'salt'))
      .toBeDefined()
    expect(catalog('<prod><name>salt</name><prx>10</prx><qty>100</qty></prod>', 'salt'))
      .not.toBeNull()
  })
})