// generate a random color

const randomcolor = function () {
  const hexvalue = "0123456789ABCDEF"; // this is the hexvalue of the color code that we want to generate
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexvalue[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval_id;
const startchangingcolor = function () {
  if (!interval_id) {
    interval_id = setInterval(changebgcolor, 1000);
  }
  function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopchangingcolor = function () {
  clearInterval(interval_id);
  interval_id = null;
};

document.querySelector("#start").addEventListener("click", startchangingcolor);
document.querySelector("#stop").addEventListener("click", stopchangingcolor);
