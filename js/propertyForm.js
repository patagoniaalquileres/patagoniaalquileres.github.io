/**
 * If the user is on a mobile device, open the WhatsApp app, otherwise open WhatsApp Web.
 * </code>
 */
/**
 * If the user has previously visited the site and set a preference, use that preference. Otherwise,
 * check the user agent string to see if the user is on a mobile device
 * @returns A boolean value.
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
    let email = document.querySelector('#email').value
    //let empresa = document.querySelector('#empresa').value

    let cantidad_alojamientos = document.querySelector('#property').value
    let ubicacion = document.querySelector('#ubicacion').value
    let tipo = document.querySelector('#tipo')
    let value = tipo.options[tipo.selectedIndex].value;
    let observaciones = document.querySelector('#observaciones').value
/* A function that is executed when the form is submitted. */

    let mensaje = 'send?phone=' + telefono + '&text=*Nombre:* ' + nombre
      + '%0A*Correo Electronico:* ' +
      email  + '%0A*Cantidad:* ' +
      cantidad_alojamientos + '%0A*Lugar:* ' + ubicacion +
      '%0A*Tipo:* ' + value + '%0A*Observaciones:* ' + observaciones

    if (isMobile()) {
      window.open(urlMobile + mensaje, '_blank')
    } else {
      window.open(urlDesktop + mensaje, '_blank')
    }
    buttonSubmit.innerHTML = '<i class="fa fa-whatsapp"></i> Enviar WhatsApp'
    buttonSubmit.disabled = false
  }, 3000);
});