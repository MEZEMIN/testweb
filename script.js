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

// Compact card → modal
document.querySelectorAll('.pcard').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.modal;
    document.getElementById(id).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
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
