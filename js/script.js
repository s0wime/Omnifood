const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const btnMobileNav = document.querySelector(".btn-mobile-nav");
btnMobileNav.addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("nav-open");
});

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(document.querySelector(".section-hero"));
