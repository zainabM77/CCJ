const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function (){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {

  // Donation custom amount
  const amountSelect = document.getElementById("amountSelect");
  const customAmountGroup = document.getElementById("customAmountGroup");

  if(amountSelect){
    amountSelect.addEventListener("change", function () {
      if (this.value === "Other") {
        customAmountGroup.style.display = "block";
      } else {
        customAmountGroup.style.display = "none";
      }
    });
  }

  // Membership fee notice
  const positionSelect = document.getElementById("positionSelect");
  const feeNotice = document.getElementById("membershipFeeNotice");

  if(positionSelect){
    positionSelect.addEventListener("change", function () {
      if (this.value === "Community Member") {
        feeNotice.style.display = "block";
      } else {
        feeNotice.style.display = "none";
      }
    });
  }

  // Copy email button
  const copyBtn = document.getElementById("copyEmailBtn");

  if(copyBtn){
    copyBtn.addEventListener("click", function(){
      navigator.clipboard.writeText("donation.ccj@gmail.com");
      copyBtn.innerText = "Copied!";
      setTimeout(()=>{copyBtn.innerText="Copy";},2000);
    });
  }

});