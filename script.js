const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");
const confirmP = document.querySelector("#confirm-p");
const passwordGrp = document.querySelector(".password");
const errorMsg = document.querySelector(".errorMsg")

confirmP.addEventListener("input", () => {
    if (!(password.value === confirmP.value)) {
        errorMsg.textContent = "*Passwords do not match";
    } 
    else {
        errorMsg.textContent = '';
    }
})

function validateInput(input) {
    if (!input.checkValidity()) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }

document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach(input => input.addEventListener("input", () => {
        validateInput(input);
    }))
})