

var $phoneInput = $("#phone-input");

function loadPage() {
  $phoneInput.keyup(validateNumber);
}

function validateNumber () {
  if($(this).val().trim().length > 0){
   $("#botonsubmit").attr("disabled", false );//Se habilita el boton quitando el atributo
  //  window.location.href = "views/sing-up2.html";
   } else {
   $("#botonsubmit").attr("disabled" , true);//Si no hay valor en la entrada agrega el atributo disabled y le coloca tru (desabilitado)/
  }
}
// Con estas lineas toman el valor del usuario agrega los inputs y los guarda en variables
var phone = $phoneInput.val();
//limpiando valores del form (después de que se agrega cada contacto)
$phoneInput.val(" ");

$(document).ready(loadPage);
