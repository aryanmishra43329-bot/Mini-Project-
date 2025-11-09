// === Theme Toggle ===
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const newTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// === Mobile Navbar ===
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.textContent = navbar.classList.contains("active") ? "✖" : "☰";
});
navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// === Fade Animation on Scroll ===
const faders = document.querySelectorAll(".fade");
function revealOnScroll() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// === Scroll-to-Top Button ===
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Newsletter Subscription ===
document.getElementById("subscribe-btn")?.addEventListener("click", () => {
  const email = document.getElementById("email-input").value.trim();
  if (!email) return alert("Please enter your email.");
  alert(`Thanks for subscribing, ${email}! 🎉`);
  document.getElementById("email-input").value = "";
});
