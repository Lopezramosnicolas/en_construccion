	/*setear la fechapara la cuenta regresiva*/
var fechaCuentaReg = new Date("aug 1, 2019 00:00:00").getTime();
/*actualizar la cuenta regresiva cada segundo*/
var x = setInterval(function()
{
/*captura la fecha y hora de hoy*/
var ahora = new Date().getTime();
/*encontrar la distancia entre ahora y la fecha limite de nuestra cuenta regresiva*/
var distancia=fechaCuentaReg-ahora
/*calculo de tiempo para dia, hora, minutos y segundos*/
var dias= Math.floor(distancia/(1000*60*60*24))
var horas = Math.floor((distancia % (1000*60*60*24))/(1000*60*60));
var minutos = Math.floor((distancia % (1000*60*60))/(1000*60));
var segundos = Math.floor((distancia % (1000*60))/(1000);
/*Mostrar el resultado en un elemento con la "id=demo"*/
document.getelEmentByil("demo").InnerHTML= dias + "d "+ horas+ "h " + minutos + "m " + segundos + "s ";
if (distancia< o)
{
	clearInterval(x);
	document.getelEmentByil("demo").InnerHTML= "Expirado";
}
}, 1000);