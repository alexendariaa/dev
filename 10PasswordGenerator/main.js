const passwordBox = document.getElementById("password");
const limit = document.getElementById("length");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^*)_+~|}{[]></-=";


window.addEventListener("DOMContentLoaded", () => {
  limit.value = 12; // Set default length
  createPassword(); // Generate first password automatically
});



limit.addEventListener("input", () => {
  if (limit.value < 8) {
    limit.value = 8;
  } else if (limit.value > 32) {
    limit.value = 32;
  }
});

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  length = parseInt(limit.value, 10);
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  const password = document.querySelector("#password").value;
  navigator.clipboard
    .writeText(password)
    .then(() => alert("Password copied!"))
    .catch((err) => alert("Failed to copy: " + err));
}

 document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      createPassword();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      limit.value = Math.min(32, parseInt(limit.value) + 1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      limit.value = Math.max(8, parseInt(limit.value) - 1);
    } else if (e.code === "Space") {
      e.preventDefault(); // prevent page scroll
      copyPassword();
    }
  });