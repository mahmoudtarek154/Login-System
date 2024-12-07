let inputname = document.querySelector(".inputname");
let inputemail = document.querySelector(".inputemail");
let inputpassword = document.querySelector(".inputpassword");
let signinemail = document.querySelector(".signinemail");
let signinpassword = document.querySelector(".signinpassword");
let welcomeh1 = document.querySelector(".welcomeh1");

let loginarr = [];
if (localStorage.getItem("list")) {
  loginarr = JSON.parse(localStorage.getItem("list"));
}

function loginAdd() {
  let regNameinput = /[A-Za-z]{3,16}/;
  let regEmailinput = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  let regPasswordinput =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (
    !regNameinput.test(inputname.value) &&
    !regEmailinput.test(inputemail.value) &&
    !regPasswordinput.test(inputpassword.value)
  ) {
    alert("Please enter a valid email and a valid password ");
    return;
  }

  let logininfo = {
    name: inputname.value,
    email: inputemail.value,
    password: inputpassword.value,
  };

  loginarr.push(logininfo);
  localStorage.setItem("list", JSON.stringify(loginarr));
}



function signin() {
  let isValid = false;

  loginarr.some((data) => {
    if (
      data.email === signinemail.value &&
      data.password === signinpassword.value
    ) {
      isValid = true;
      localStorage.setItem("currentUser", data.name);
      window.location = "main.html";
      return true;
    }
  });

  if (!isValid) {
    alert(
      "Invalid email or password. If you don't have an account, please sign up."
    );
  }
}


function logout() {
  window.location = "index.html";
}
function signup() {
  window.location = "home.html";
}


document.addEventListener("DOMContentLoaded", () => {
  let currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    welcomeh1.textContent = `Welcome ${currentUser}`;
  }
});
