const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const form = document.querySelector(".login-form");

emailInput.addEventListener("input", () => {
  emailInput.value = emailInput.value.trim();
});
passwordInput.addEventListener("input", () => {
  passwordInput.value = passwordInput.value.trim();
});
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill all fields");
return; 
  }
  const formData = new FormData(event.currentTarget);

  const formValues = Array.from(formData).reduce((acc, [name, value]) => {
  acc[name] = value;
  return acc;
}, {});

  console.log(formValues);
  event.currentTarget.reset();
}