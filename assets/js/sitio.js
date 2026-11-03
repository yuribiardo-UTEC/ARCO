// ARCO · portal documental — navegación adaptable
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('menu-principal');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var abierto = nav.classList.toggle('abierto');
    btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('abierto')) {
      nav.classList.remove('abierto');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
})();
