const ctafromEl = document.querySelector(".cta-form");

let emailError = {
  status: false,
  type: "",
};

ctafromEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputsEl = Array.from(e.target).filter((el) => el.nodeName === "INPUT");
  inputsEl.forEach((inputEl) => {
    const inputType = inputEl.getAttribute("id");

    switch (inputType) {
      case "firstName":
        if (inputEl.value === "" && !inputEl.classList.contains("input-error"))
          showError(inputEl, "First Name cannot be empty");
        break;
      case "lastName":
        if (inputEl.value === "" && !inputEl.classList.contains("input-error"))
          showError(inputEl, "Last Name cannot be empty");
        break;
      case "email":
        if (inputEl.value === "" && emailError.type !== "EMPTY") {
          showError(inputEl, "Email cannot be empty");
          emailError.type = "EMPTY";
        }
        if (inputEl.value.includes("@") && emailError.type !== "WRONG-FORMAT") {
          showError(inputEl, "Looks like this is not a email");
          emailError.type = "WRONG-FORMAT";
        }
        break;
      case "password":
        if (inputEl.value === "" && !inputEl.classList.contains("input-error"))
          showError(inputEl, "Password cannot be empty");
        break;

      default:
        break;
    }
  });
});
