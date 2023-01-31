let fnameEl = document.getElementById("fname");
let lnameEl = document.getElementById("lname");
let emailEl = document.getElementById("email");
let messageEl = document.getElementById("message");
let submitBtn = document.querySelector(".submit-btn");

let formData = document.querySelector("#form-data");

let clickHandler = function (e) {
  e.preventDefault();
  let fname = fnameEl.value;
  let lname = lnameEl.value;
  let email = emailEl.value;
  let message = messageEl.value;

  formData.textContent = `
    Thank you for submitting the form
  `;
};

submitBtn.addEventListener("click", clickHandler);
