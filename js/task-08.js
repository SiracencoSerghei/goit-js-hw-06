// const emailInput = document.querySelector('input[name="email"]');
// const passwordInput = document.querySelector('input[name="password"]');
// const form = document.querySelector(".login-form");

// emailInput.addEventListener("input", () => {
//   emailInput.value = emailInput.value.trim();
// });
// passwordInput.addEventListener("input", () => {
//   passwordInput.value = passwordInput.value.trim();
// });
// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     alert("Please fill all fields");
// return; 
//   }
//   const formData = new FormData(event.currentTarget);

//   const formValues = Array.from(formData).reduce((acc, [name, value]) => {
//   acc[name] = value;
//   return acc;
// }, {});

//   console.log(formValues);
//   event.currentTarget.reset();
// }

//  ----------  variant 2  --------------------------

// function onFormSubmit(event) {
//   event.preventDefault();

//   const email = event.currentTarget.querySelector('input[name="email"]');
//   const password = event.currentTarget.querySelector('input[name="password"]');

//   if (email.value === "" || password.value === "") {
//     alert("Please fill all fields");
//     return;
//   }

//   const formData = new FormData(event.currentTarget);

  // const formValues = {};
  // formData.forEach((value, key) => formValues[key] = value);

//   console.log(formValues);
//   event.currentTarget.reset();
// }

// ---------------  variant 3   --------------

// function onFormSubmit(event) {
//   event.preventDefault();

//   const email = event.currentTarget.querySelector('input[name="email"]');
//   const password = event.currentTarget.querySelector('input[name="password"]');

//   if (email.value === "" || password.value === "") {
//     alert("Please fill all fields");
//     return;
//   }

//   const formData = new FormData(event.currentTarget);

//   const formValues = {};
//   for (let [key, value] of formData.entries()) {
//     formValues[event.currentTarget.elements[key].getAttribute("name")] = value;
//   }

//   console.log(formValues);
//   event.currentTarget.reset();
// }

// ---------------  variant 4   --------------

// function onFormSubmit(event) {
//   event.preventDefault();

//     const {
//       elements: { email, password },
//     } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//       alert("Please fill all fields");
//   return;
//     }

//   const formData = new FormData(event.currentTarget);

//   const formValues = {};
//   for (let [key, value] of formData.entries()) {
//     formValues[event.currentTarget.elements[key].getAttribute("name")] = value;
//   }

//   console.log(formValues);
//   event.currentTarget.reset();
// }

// ---------------------- 5 ---------------------------

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      alert("Error! All fields must be filled");
    }
  });
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
}