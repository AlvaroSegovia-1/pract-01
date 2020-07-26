'use strict'
// Hacemos un archivo nuevo para validar los numeros
// del archivo salida_string.txt
// pero no funciona, al pasar por Eslint hay algo que cambia

const fs = require('fs')

// leemos el archivo de salida de strings
const numRomAra = fs.readFileSync('salida_string.txt', 'utf-8')

const numRomVali = numRomAra.map(function (elem) {
  elem = isRoman(elem)
  return elem
})

fs.writeFile('salida_num_roman.txt', numRomVali, function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('El archivo se ha guardado')
})

console.log(numRomVali)

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
}

// Convierte numero romano a numero
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
  const array = roman /* .toUpperCase().split("") */
  let total = 0
  let currentNumber = null
  let currentValue = null
  let next = null
  let nextValue = null
  const romanNot = []
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
    return romanNot.push()
    /* throw new Error(`${roman} is not a Roman number`); */
  } else {
    return total
  }
}

// Check if given number is a correct Roman number
function isRoman (number) {
  const result = numberToRoman(romanToNumber(number))
  if (result === number) {
    return number
  } else {
    /* `${number} no es un núm. Romano` ; */
  }
}
