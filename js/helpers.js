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
