const rewardText = document.querySelector("#myshop");
const loginForm = document.querySelector("div.choice");
const loginBtn = document.querySelector("label.shop");
const signupBtn = document.querySelector("label.mine");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  rewardText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  rewardText.style.marginLeft = "0%";
});