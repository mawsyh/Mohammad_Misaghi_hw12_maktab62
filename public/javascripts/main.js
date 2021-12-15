const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuEl = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenuEl.classList.toggle("hidden");
});
