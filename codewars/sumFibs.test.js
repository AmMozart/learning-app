const sumFibs = require('./sumFibs.js')

describe('Tests for positive numbers:', () => {
  test('Summa even numbers of 5 fibonacci element to equal 2', () => {
    expect(sumFibs(5)).toBe(2)
  })
  test('Summa even numbers of 0 fibonacci element to equal 0', () => {
    expect(sumFibs(0)).toBe(0)
  })
  test('Summa even numbers of 10000 (negative numbers) fibonacci element to equal Infinity', () => {
    expect(sumFibs(10000)).toBe(Infinity)
  })
})

describe('Tests for negative numbers:', () => {
  test('Summa even numbers of -10 (negative numbers) fibonacci element to equal 0', () => {
    expect(sumFibs(-10)).toBe(0)
  })
  test('Summa even numbers of -10000 (negative numbers) fibonacci element to equal 0', () => {
    expect(sumFibs(-10000)).toBe(0)
  })
})