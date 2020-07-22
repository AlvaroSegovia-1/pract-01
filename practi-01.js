function romano(a)
{
	var x=Number(a.value);
	var letra;
	var mensaje;
	if (x>39||x<=0)
	{
		alert("Introduzca un numero entre 1 y 39")
	}
	else 
	{
    var romano=["I","IV","V","IX","X"];
    var arabico=[1,4,5,9,10];
    var i=4;
    var letra="";
    while(x>0){
      if(arabico[i]<=x){
        letra=`${letra}${romano[i]}`
        x=x-arabico[i];
      }else{
        i--;
      }
    }
        
    }
	mensaje="<p> El numero "+a.value+" en romano es: "+letra+"</p>";
	document.getElementById("salida").innerHTML=mensaje;
}
