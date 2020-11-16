const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
  output.textContent = salary.value;
});

const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
text.addEventListener("input", function () {
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
});

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const emailRegex = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$");
email.addEventListener("input", function () {
  if (emailRegex.test(email.value)) emailError.textContent = "";
  else emailError.textContent = "mail id  is Incorrect";
});

const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
const telRegex = RegExp("^\\d{2} [1-9]\\d{9}$");
tel.addEventListener("input", function () {
  if (telRegex.test(tel.value)) telError.textContent = "";
  else telError.textContent = "Number  is Incorrect";
});

const pwd = document.querySelector("#pwd");
const pwdError = document.querySelector(".password-error");
const pwdRegex = RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.*\\W\\w*\\W)(?!.*\\s).{8,}$");
pwd.addEventListener("input", function () {
  if (pwdRegex.test(pwd.value)) pwdError.textContent = "";
  else pwdError.textContent = "Give a Strong Password";
});