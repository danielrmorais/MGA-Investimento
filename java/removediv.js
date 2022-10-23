var bt_close = document.getElementById('bt_close');
var botaoEnviar = document.getElementById('form-button');
var mensagemEnvio = document.querySelector('#mensagemEnvio');


botaoEnviar.addEventListener('click', function() {
    
  if(mensagemEnvio.style.display === 'block') {
      mensagemEnvio.style.display = 'none';
  } else {
      mensagemEnvio.style.display = 'block';
  }
});


bt_close.addEventListener('click', function() {
  if(mensagemEnvio.style.display === 'none') {
      mensagemEnvio.style.display = 'none';
  } else {
      mensagemEnvio.style.display = 'none';
  }
});