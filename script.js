const year = document.getElementById("year");
const cursorGlow = document.getElementById("cursorGlow");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const filters = document.querySelectorAll(".filter");
const skillCards = document.querySelectorAll(".skill-card");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (cursorGlow) {
  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => filter.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;

    skillCards.forEach((card) => {
      const shouldShow = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => observer.observe(element));
