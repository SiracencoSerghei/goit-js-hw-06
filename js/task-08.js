const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill all fields");
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value};`);
  });

  event.currentTarget.reset();


// console.dir(HTMLFormElement);
//   console.log(formData);
//   console.dir(event.currentTarget.elements);
}