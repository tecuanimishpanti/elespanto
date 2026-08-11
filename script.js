document.addEventListener('DOMContentLoaded', function () {
  var soundBtn = document.querySelector('.sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', function () {
      soundBtn.classList.toggle('on');
      var label = soundBtn.querySelector('span');
      if (label) {
        label.textContent = soundBtn.classList.contains('on') ? 'sonido activo' : 'activar sonido';
      }
      // audio ambiental real por territorio se conecta aqui cuando existan los archivos
    });
  }

  var entrance = document.querySelector('.entrance');
  if (entrance) {
    // se abre sola poco despues de cargar, y se puede repetir con clic
    setTimeout(function () { entrance.classList.add('opened'); }, 500);
    entrance.addEventListener('click', function () {
      entrance.classList.remove('opened');
      void entrance.offsetWidth;
      setTimeout(function () { entrance.classList.add('opened'); }, 50);
    });
  }
});
