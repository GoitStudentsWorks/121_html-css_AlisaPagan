document.querySelectorAll('[data-menu-open]').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-menu-open');
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.add('is-open');
      document.body.classList.add('no-scroll');
    }
  });
});

document.querySelectorAll('[data-menu-close]').forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('[data-modal]');
    if (modal) {
      modal.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
});

document.querySelectorAll('[data-modal]').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
});
