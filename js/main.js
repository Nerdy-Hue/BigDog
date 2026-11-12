// "Coming soon" notice for categories that are not live yet
document.querySelectorAll('[data-soon]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('toast-name').textContent = link.dataset.soon;
    bootstrap.Toast.getOrCreateInstance(document.getElementById('soon-toast')).show();
  });
});

// Hoodies links open the expandable list and scroll to it
var list = document.getElementById('hoodie-list');
document.querySelectorAll('[data-open="hoodies"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    bootstrap.Collapse.getOrCreateInstance(list, { toggle: false }).show();
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('hoodies').scrollIntoView({ behavior: calm ? 'auto' : 'smooth' });
  });
});
