function romanos(number){

    const romanos = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
  
    let resultado = ""
    for (let r in romanos) {
      //repeat es parte del iterador y lo que hace es que
      // repite r las veces que sean necesarias. ( dependiendo la division)
      resultado += r.repeat(Math.floor( number / romanos[r]))
      number = number % romanos[r]
    }
    return resultado

    mensaje="<p> El numero "+a.value+" en romano es: "+letra+"</p>";
    document.getElementById("salida2").innerHTML=mensaje;

  }
  
  
  console.log(romanos(1234))