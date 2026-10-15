
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let toastTimer;

function showMessage(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll to the career section
function exploreCareers() {
  document.getElementById("careers").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("navQuiz").addEventListener("click", () => {
  window.location.href = "quiz.html";
});

document.getElementById("startQuiz").addEventListener("click", () => {
  window.location.href = "quiz.html";
});

document.getElementById("bottomQuiz").addEventListener("click", () => {
  window.location.href = "quiz.html";
});

// Open the Career Library with the selected field
document.querySelectorAll("[data-career]").forEach(link => {
  link.addEventListener("click", () => {
    // Let the link open careers.html normally
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
