/* Para acceder al documento se escribe $('element')
h1
$('h1')
div
$('div')
id=container
$('#container')
Class='input-nombre'
$('.input-nombre')*/


// $(function() es una función que se ejecuta cuando la página inicia

$(function(){
	$("h1").css("color", "red")
	$("h1").css({
		"background-color": "yellow",
		"font-size": "100px",
		"font-family": "Helvetica"
	})

})