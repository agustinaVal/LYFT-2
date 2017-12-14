/* query vista splash que no funciona*/
$(document).ready(function() {
  $(".splash").fadeIn(2000).fadeOut(800,showPage);

	function showPage (){
	$('.first').show();
	}

/* vista segunda pantalla*/ 
	$('#btnS-U').click(function(){
	  $('.first').hide(); 
	  $('.second').show();
	  $('.fondoAuto').hide();
	});

	$('.input .botonInput').find('a').click(function(e) {
	e.preventDefault();
	var remove = $(this).attr("href").replace("#", "");
	var texto = $(this).text();
	$('.input span#country').text(texto);
	$('.Form #buscar').val(remove);

});


/* final del jquery*/ 
});