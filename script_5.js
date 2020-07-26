'use strict'

// Convert number into a Roman numeral
function numberToRoman (num) {
  const decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let roman = ''
  if (num < 1 || num > 3999) {
    return 'Number not valid. Enter a number between 1 and 3999.'
  } else if (typeof num !== 'number') {
    return "That's not a number. Enter a number between 1 and 3999."
  }
  for (let i = 0; i < decimalNum.length; i++) {
    while (decimalNum[i] <= num) {
      roman += romanNum[i]
      num -= decimalNum[i]
    }
  }
  return roman
};

// Convert Roman numeral into integer
const conversionTable = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}
function romanToNumber (roman) {
  const array = roman.toUpperCase().split('')
  let total = 0
  let currentNumber = null
  let currentValue = null
  let next = null
  let nextValue = null
  for (let i = 0; i < array.length; i++) {
    currentNumber = array[i]
    currentValue = conversionTable[currentNumber]
    next = array[i + 1]
    nextValue = conversionTable[next]
    if (currentValue < nextValue) {
      total -= currentValue
    } else {
      total += currentValue
    }
  }
  if (roman !== numberToRoman(total)) {
    throw new Error(`${roman} is not a Roman number`)
  } else {
    return total
  }
};

// Check if given number is a correct Roman number
// eslint-disable-next-line no-unused-vars
function isRoman (number) {
  const result = numberToRoman(romanToNumber(number))
  if (result === number) {
    return `${number} is a Roman number`
  } else {
    return `${number} is not valid Roman number`
  }
};
