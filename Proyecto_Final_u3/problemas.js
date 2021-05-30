	function limpiarFormulario() {
document.getElementById("miForm").reset();
}
var Calcular = function(n1,n2){
var d=parseInt(document.getElementById("d").value);
var t=parseInt(document.getElementById("t").value);
var vel=d/t;
return"Velocidad= "+ vel;
}

	function limpiarForm() {
document.getElementById("miFor").reset();
}
var Imprimir = function(n1,n2){
var di=parseInt(document.getElementById("di").value);
var v=parseInt(document.getElementById("v").value);
var tiem=di/v;
return"Tiempo= "+ tiem;
}

	function limpiarFormu() {
document.getElementById("miFormu").reset();
}
var Imprimir1 = function(n1,n2,n3){
var ve=parseInt(document.getElementById("ve").value);
var vi=parseInt(document.getElementById("vi").value);
var ti=parseInt(document.getElementById("ti").value);
var acel=(ve-vi)/ti;
return "Aceleración= "+acel;
}

function limpiarFo() {
document.getElementById("miFo").reset();
}
var Imprimir2 = function(n1,n2){
var m=parseInt(document.getElementById("m").value);
var a=parseInt(document.getElementById("a").value);
var f=m*a;
return "Fuerza= "+f;
}

function limpiarF() {
document.getElementById("miF").reset();
}
var Imprimir3 = function(n1,n2){
var mi=parseInt(document.getElementById("mi").value);
var vol=parseInt(document.getElementById("vol").value);
var de=mi/vol;
return "Densidad= "+ de;
}



function limpiarFormulario1() {
document.getElementById("miForm1").reset();
}
var Calcular1 = function(n1){
var de=parseInt(document.getElementById("de").value);
var a= de+200;
var e= 200/a;
var i=1-e;
var u=6*i;
return u;
}



