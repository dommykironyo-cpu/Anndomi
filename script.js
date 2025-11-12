// Simple form feedback
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "Thank you for contacting Doan Company! We’ll get back to you soon.";
      form.reset();
    });
  }
});

