const rewardText = document.querySelector("#myshop");
const shopForm = document.querySelector(".selection");
const shopBtn = document.querySelector("label.shop");
const mineBtn = document.querySelector("label.mine");
mineBtn.onclick = (()=>{
  shopForm.style.marginLeft = "-250%";
  rewardText.style.marginLeft = "-50%";
});
shopBtn.onclick = (()=>{
  shopForm.style.marginLeft = "0%";
  rewardText.style.marginLeft = "0%";
});