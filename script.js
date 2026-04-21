const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    sections.forEach(s => {
      if (s.id === target) {
        s.classList.remove('hidden');
      } else {
        s.classList.add('hidden');
      }
    });
  });
});
