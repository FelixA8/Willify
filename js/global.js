//Make movile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
console.log(btnNav + "hi");
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

function validateData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var checkbox = document.getElementById("checkbox");
  var gender = checkbox.checked ? "Male" : "Female";

  console.log(email)
  if (name.length < 5) {
    alert("Username too short!");
  } else if (!email.endsWith("@gmail.com")) {
    alert("Email must be ended with @gmail.com");
  } else if (!checkAlphaNum(password)) {
    alert("Password must be alphanumeric");
  } else if (parseInt(age) < 8) {
    alert("Age must be 8 years and above");
  } else {
    alert(`name: ${name}; email: ${email}; password: ${password}; age:${age}; gender:${gender}`)
  }
}

function checkAlphaNum(password) {
  var isAlpha = false;
  var isNum = false;
  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      isAlpha = true;
    } else {
      isNum = true;
    }
    if (isAlpha && isNum) {
      return true;
    }
  }
  return false;
}
