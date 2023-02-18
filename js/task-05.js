const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  refs.output.textContent = inputValue !== "" ? inputValue : "Anonymous";
});


//  если нужно убрать все пробельі то можно использовать метод replace()===>

// const inputValue = event.currentTarget.value.replace(/\s/g, "");

// const onlyNumbersInputFilter = event.currentTarget.value.replace(/\D/g, "");