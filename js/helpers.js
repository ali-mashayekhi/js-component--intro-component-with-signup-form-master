function showError(inputEl, errormessage) {
  // 1) Displaying error message
  // 1.1) Creating error message element
  const errorMessageEl = document.createElement("p");
  const errorMessageText = document.createTextNode(errormessage);
  errorMessageEl.appendChild(errorMessageText);
  errorMessageEl.classList.add("error-message");
  // 1.2) Add error message to DOM
  inputEl.insertAdjacentElement("afterend", errorMessageEl);
  // 2) Displaying warning icon and red border
  inputEl.classList.add("input-error");
  // 3) Removing placeholder
  inputEl.setAttribute("placeholder", "");
}

function hideError(inputEl) {
  // 1) Remove error styles
  inputEl.classList.remove("input-error");
  // 2) Remove error message
  inputEl.nextSibling.remove();
}

function hideEmailError(inputEl, emailErrorController) {
  emailErrorController.type = "";
  emailErrorController.status = false;
  hideError(inputEl);
}

function validateEmail(email) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) return true;
  else return false;
}
