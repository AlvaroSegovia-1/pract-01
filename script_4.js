'use strict'
// eslint-disable-next-line no-unused-vars
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
