const menu = document.querySelector ('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function (){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

    document.addEventListener("DOMContentLoaded", function () {
  const amountSelect = document.getElementById("amountSelect");
  const customAmountGroup = document.getElementById("customAmountGroup");

  amountSelect.addEventListener("change", function () {
    if (this.value === "Other") {
      customAmountGroup.style.display = "block";
    } else {
      customAmountGroup.style.display = "none";
    }
  });
});