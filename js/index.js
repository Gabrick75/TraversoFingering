(function() {
  var dt = document.getElementById('dark-toggle');
  if (localStorage.getItem('dark') === '1') document.body.classList.add('dark-mode');
  dt.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark', document.body.classList.contains('dark-mode') ? '1' : '0');
    dt.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☾';
  });
})();
