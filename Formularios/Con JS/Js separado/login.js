let form = document.getElementById("form-1");
let inputsIds = ["name", "email", "pass"];

let formValues = {};

inputsIds.forEach((input) => {
  const inputFound = document.getElementById(input);
  inputFound.addEventListener("change", (e) => {
    formValues[input] = e.target.value;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    `Sus datos ultrasensibles y secretos fueron: ${JSON.stringify(
      formValues,
      null,
      2
    )}`
  );
});
