const refs ={
    fontSizeControlInput: document.querySelector('#font-size-control'),
    changedText: document.querySelector('#text'),
};

refs.fontSizeControlInput.addEventListener(
  "input", event => 
  (refs.changedText.style.fontSize = `${event.currentTarget.value}px`)
);

