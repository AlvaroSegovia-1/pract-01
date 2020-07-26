'use strict'
/* import { } from './script_2.js' */
/* import { romanToArabic2 } from './script_3.mjs' */

const fs = require('fs')

// Al querer leer fichero.txt , no me deja,
/* let numUno = fs.readFileSync('fichero.txt', 'utf-8')
console.log(numUno)
console.log(typeof numUno) */

// Se sustituye fichero.txt por este array numUno
const numUno = [5, 36, 'XXII', 54, 'MCMXII', 1938, 'CCCVIV', 'perro', 'gato', true, false, 324]

// Se filtran los numeros y los strings
const numTres = numUno.filter(number => typeof number === 'number')
const numCuatro = numUno.filter(number => typeof number === 'string')

/* function identifica (param) {
  console.log(typeof param)
}
identifica(num) */

// Se escribe en un fichero los datos number
// eslint-disable-next-line no-constant-condition
if (typeof numTres.filter(number => typeof number === 'number')) {
  fs.writeFile('salida_number.txt', numTres, function (err) {
    if (err) {
      return console.error(err)
    }
    console.log('El archivo se ha guardado')
  })
}
// Se escribe en un fichero los datos string
// eslint-disable-next-line no-constant-condition
if (typeof numCuatro.filter(number => typeof number === 'string')) {
  fs.writeFile('salida_string.txt', numCuatro, function (err) {
    if (err) {
      return console.error(err)
    }
    console.log('El archivo se ha guardado')
  })
}
console.log(romanToArabic2('MIMIII'))

/* const numString = fs.readFileSync('salida_string.txt', 'utf-8')
console.log(numString)
console.log(typeof numString) */

// leemos el archivo de salida de strings y guardamos en un
// nuevo fichero los numeros que son romanos pero no funciona
let numRomAra = fs.readFileSync('salida_string.txt', 'utf-8')

numRomAra = numRomAra.split(',')

console.log(numRomAra)
console.log(typeof numRomAra)

// con la funcion isRoman se verifican lo numeros romanos
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

// Función para convertir numeros romanos a arábicos.
function romanToArabic2 (roman) {
  if (roman == null) {
    return -1
  }
  var totalValue = 0
  let value = 0 // Inicio
  let prev = 0

  if (/IIII|XXXX|CCCC|MMMM|VV|LL|DD|IIV|IIX|IIL|IIC|IID|IIM|XXL|XXC|XXD|XXM|CCD|CCM|VX|VL|VC|VD|VM|IL|IC|ID|IM|XD|XM|DM|[^IVXLCDM]|I[LCDM]|X[DM]/.test(roman)) {
    return `${roman}  NO  es núm romano`
  }

  for (var i = 0; i < roman.length; i++) {
    var current = charToInt(roman.charAt(i))
    if (current > prev) {
      totalValue -= 2 * value // Deshacer la adición, convertirla en resta
    }

    if (current !== prev) {
      value = 0 // restablecer la suma para el nuevo simbolo
    }

    value += current // Sigue agregando los mismos simbolos
    // eslint-disable-next-line no-unused-vars
    totalValue += current
    prev = current
  }
  /* return totalValue; */
  return `${roman} SI es núm. romano`
}
function charToInt (character) {
  switch (character) {
    case 'I': return 1
    case 'V': return 5
    case 'X': return 10
    case 'L': return 50
    case 'C': return 100
    case 'D': return 500
    case 'M': return 1000
    default: return -1
  }
}

// Funcion para convertir numeros arabes a romanos
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
    /* `${number} es núm. romano` ; */
  } else {
    /* `${number} no es un núm. Romano` ; */
  }
}
