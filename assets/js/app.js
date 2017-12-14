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
   

   /*boosnip ayuda*/
	$('.search-panel .dropdown-menu').find('a').click(function(e) {
	e.preventDefault();
	var param = $(this).attr("href").replace("#", "");
	var concept = $(this).text();
	$('.search-panel span#search_concept').text(concept);
	$('.input-group #search_param').val(param);
    });

 
    /*desabilitar boton */
   
    $('#numeroIngresado').keyup(function() {
    var telefono = $('#numeroIngresado').val();
    if (telefono.length === 10) {
    $('#next').removeClass("disabled");
    $('#next').addClass("waves-effect waves-light btn");
    }
    if (telefono.length > 10) {
    $('#next').addClass("disabled");
}
});




/* final del jquery*/ 
});