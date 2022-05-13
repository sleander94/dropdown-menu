function dropdown(element, optionClass) {
  const options = element.querySelectorAll(optionClass);
  options.forEach((option) => {
    option.style.display = "none";
  });
  element.addEventListener("click", () => {
    options.forEach((option) => {
      if (option.style.display === "none") {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
      option.addEventListener("click", () => {
        element.dataset.value = option.dataset.value;
        element.querySelector("span").innerText = option.innerText;
      });
    });
  });
}

const button = document.querySelector("button");

dropdown(button, ".dropdownOption");
