const tabs = document.querySelectorAll(".tab");
const products = document.querySelectorAll(".product");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
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
topButton.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  links.style.display = links.style.display === "flex" ? "none" : "flex";
  links.style.position = "absolute";
  links.style.top = "82px";
  links.style.left = "0";
  links.style.right = "0";
  links.style.padding = "20px";
  links.style.background = "#171512";
  links.style.flexDirection = "column";
  links.style.gap = "15px";
});
