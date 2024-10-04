const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const color = e.target.id; // Get the id of the clicked button
    body.style.background = color; // Set the body's background color
  });
});
