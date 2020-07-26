/* eslint-disable no-unused-vars */
'use strict'

function arabicToRoman (num) {
  let romanos = ' '
  const numerosRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  if (num > 3999 || num < 0) {
    alert('Tiene que ser un número entre 1 y 3999')
  } else {
    for (let i = 0; i < numeros.length; i++) {
      while (num >= numeros[i]) {
        romanos = romanos + numerosRomanos[i]
        num = num - numeros[i]
      }
    }
    return romanos
  }
}

function romanToArabic (str) {
  let decimal = 0
  const numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const numerosRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  for (let i = 0; i < numeros.length; i++) {
    while (str.indexOf(numerosRomanos[i]) === 0) {
      decimal += numeros[i]
      str = str.replace(numerosRomanos[i], '')
    }
  }
  return decimal
}

function validarRomanos (str) {
  const numerosRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var i = 0
  let valido = false
  while (i < str.length && valido) {
    for (let j = 0; i < numerosRomanos.length; i++) {
      valido = valido && str.charAt(j).indexOf(numerosRomanos[j])
    }
  } return valido
}
