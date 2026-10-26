const tabs = document.querySelectorAll(".tab");
const products = document.querySelectorAll(".product");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    products.forEach(product => {
      product.classList.toggle("hide", filter !== "all" && product.dataset.category !== filter);
    });
  });
});

const topButton = document.getElementById("top");
window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 450 ? "block" : "none";
});
topButton.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.textContent = isOpen ? "×" : "☰";
});
links.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  });
});
