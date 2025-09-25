document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  const links = document.querySelectorAll(".membership-cards a");
  const closeBtns = document.querySelectorAll(".close");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = link.getAttribute("href");
      document.querySelector(modalId).style.display = "block";
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    modals.forEach(modal => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
});
