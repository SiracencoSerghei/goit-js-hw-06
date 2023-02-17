


  const inputText = document.querySelector("#validation-input");
  const inputLength = Number(inputText.dataset.length);

const borderColor = (event) => {
  event.currentTarget.value.length === inputLength
    ? (inputText.classList.add("valid"), inputText.classList.remove("invalid"))
    : (inputText.classList.add("invalid"), inputText.classList.remove("valid"));
};


inputText.addEventListener("blur", borderColor);