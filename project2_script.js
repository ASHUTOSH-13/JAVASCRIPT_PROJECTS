const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please provide a valid height";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please provide a valid weight";
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
