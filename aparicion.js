/* ============================================================
   EL ESPANTO — aparicion.js
   Controla el encendido del letrero de neón "EL ESPANTO"
   simulando un tubo viejo con falso contacto.

   IMPORTANTE: el título y "Entrar" ya son visibles por CSS puro
   desde el primer fotograma (ver aparicion.css). Este script solo
   AÑADE el efecto de parpadeo encima; si falla o no corre por
   cualquier motivo, el sitio se sigue viendo y usando normalmente.
   ============================================================ */

(function () {
  try {
    const letras = document.querySelectorAll('.neon__letra');
    const entrar = document.querySelector('.entrar');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !letras.length) return;

    letras.forEach((letra, i) => {
      const intentos = 3 + Math.floor(Math.random() * 4); // 3–6 intentos
      const inicioBase = 200 + i * 90 + Math.random() * 300;
      let t = inicioBase;

      // Apaga la letra un instante después de cargar la página,
      // para poder simular el encendido defectuoso desde cero.
      setTimeout(() => letra.classList.add('is-off'), 30);

      for (let n = 0; n < intentos; n++) {
        const duracionFlash = 60 + Math.random() * 140;
        const pausaOscuro = 90 + Math.random() * 260;

        setTimeout(() => {
          letra.classList.remove('is-off');
          letra.classList.add('is-on');
        }, t);
        t += duracionFlash;

        if (n < intentos - 1) {
          setTimeout(() => {
            letra.classList.add('is-off');
            letra.classList.remove('is-on');
          }, t);
          t += pausaOscuro;
        }
      }

      setTimeout(() => {
        letra.classList.remove('is-off');
        letra.classList.add('is-on');
        setTimeout(() => letra.classList.add('is-ambient'), 500 + Math.random() * 1500);
      }, t);
    });

    const saltar = document.querySelector('.saltar');
    if (saltar) {
      saltar.addEventListener('click', () => {
        letras.forEach((l) => {
          l.classList.remove('is-off');
          l.classList.add('is-on');
        });
      });
    }
  } catch (err) {
    // Cualquier error se ignora silenciosamente: el título y
    // "Entrar" ya son visibles por CSS sin necesitar este script.
  }
})();
