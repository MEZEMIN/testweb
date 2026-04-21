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

function copyMemory() {
  const text = document.getElementById('memoryBlock').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = '복사됨!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '복사';
      btn.classList.remove('copied');
    }, 2000);
  });
}
