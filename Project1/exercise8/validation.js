const username = document.querySelector("#username");
const pass=document.querySelector('#password');
const confirmP=document.querySelector('#confirmPass');
const email=document.querySelector('#email');
const tel=document.querySelector('#telephone');


    //EventListeners      
username.addEventListener("input", (event) => {
    if (username.validity.patternMismatch) {
      username.setCustomValidity(
        "Username must not contain space or special characters and it must be at least 8 characters long."
      );
    } else {
      username.setCustomValidity("");
    }
});


email.addEventListener("input", (event) => {
  if (email.validity.patternMismatch) {
    email.setCustomValidity(
      "Please input a valid e-mail format."
    );
  } else {
    email.setCustomValidity("");
  }
});


tel.addEventListener("input", (event) => {
  if (tel.validity.patternMismatch) {
    tel.setCustomValidity(
      "Please input a valid mobile phone. Example:+30 123456789"
    );
  } else {
    email.setCustomValidity("");
  }
});


pass.addEventListener("input", (event) => {
  if (pass.validity.patternMismatch) {
    pass.setCustomValidity("Password must contain at least 8 characters");
  } 
  else 
  {
    pass.setCustomValidity("");
  }
});  

confirmP.addEventListener("input", (event) => {
  if (confirmP.value!==pass.value) {
    confirmP.setCustomValidity(
      "Passwords doesnot match"
    );
  } else {
    confirmP.setCustomValidity("");
  }
});                  