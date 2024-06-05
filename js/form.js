/**
 * It checks if the user is on a mobile device, if so, it opens the WhatsApp app, if not, it opens
 * WhatsApp Web.
 * </code>
 */
function isMobile() {
  if (sessionStorage.desktop)
    return false;
  else if (localStorage.mobile)
    return true;
  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
  for (var i in mobile)
    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
  return false;
}


function parseDate(date) {
  return arrDate = date.split('-').reverse().join('/')
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5492944618133';

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
  buttonSubmit.disabled = true
  setTimeout(() => {
    let nombre = document.querySelector('#nombre').value
    let fechaIngreso = document.querySelector('#fechaIngreso').value
    let fechaEgreso = document.querySelector('#fechaEgreso').value
    let cantidad = document.querySelector('#quantity').value
    let tipo = document.querySelector('#pet')
    let value = tipo.options[tipo.selectedIndex].value;

    console.log(fechaIngreso)
    let mensaje = 'send?phone=' + telefono + '&text=*Nombre Completo:*%0A ' + nombre + '%0A' + '%0A*Fechas:*%0A' + ' del ' + parseDate(fechaIngreso) + ' al ' + parseDate(fechaEgreso) + '%0A' + '%0A*Cantidad de Personas:*%0A '+ cantidad + '%0A' + '%0A*¿Tengo mascotas?*%0A' + value 
    if (isMobile()) {
      window.open(urlMobile + mensaje, '_blank')
    } else {
      window.open(urlDesktop + mensaje, '_blank')
    }
    buttonSubmit.innerHTML = '<i class="fa fa-whatsapp"></i> Enviar WhatsApp'
    buttonSubmit.disabled = false
  }, 3000);
});