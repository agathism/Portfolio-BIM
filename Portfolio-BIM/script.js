// Intersection Observer pour les animations au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.dataset.delay = i * 150;
  observer.observe(el);
});

document.querySelectorAll('.skill-card').forEach((el, i) => {
  el.dataset.delay = i * 80;
  observer.observe(el);
});

document.querySelectorAll('.tool-pill').forEach((el, i) => {
  el.dataset.delay = i * 60;
  observer.observe(el);
});