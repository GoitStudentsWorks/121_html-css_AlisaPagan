(() => {
  const openButtons = document.querySelectorAll("[data-modal-open-10], [data-modal-open-65], [data-modal-open-80], [data-modal-open-80-pads]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  const modalMap = {
    "data-modal-open-10": "10",
    "data-modal-open-65": "65",
    "data-modal-open-80": "80",
    "data-modal-open-80-pads": "80-pads"
  };

  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      for (const key in modalMap) {
        if (button.hasAttribute(key)) {
          const modal = document.querySelector(`[data-modal='${modalMap[key]}']`);
          modal.classList.remove("is-hidden");
          document.body.classList.add("no-scroll");
        }
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal-overlay");
      modal.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
    });
  });
})();
