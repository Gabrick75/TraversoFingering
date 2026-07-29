(function() {
  var dt = document.getElementById('dark-toggle');
  if (localStorage.getItem('dark') === '1') document.body.classList.add('dark-mode');
  dt.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark', document.body.classList.contains('dark-mode') ? '1' : '0');
    dt.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☾';
  });

  var btn = document.getElementById('back-to-top');
  var links = document.querySelectorAll('#octave-nav .octave-link');
  btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  var obs = new IntersectionObserver(function(es) {
    es.forEach(function(e) {
      if (e.isIntersecting) {
        links.forEach(function(l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { rootMargin: '-70px 0px -50% 0px' });
  document.querySelectorAll('#octave-1,#octave-2,#octave-3,#octave-4').forEach(function(o) { obs.observe(o); });
})();
