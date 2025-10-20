

document.getElementById("flip-card").addEventListener("click", function () {
  this.classList.toggle("flipped");
  console.log("hello");
});

const innerbox = document.getElementById("resumetext");
const box = document.getElementById("resume");


box.addEventListener("mouseenter", () => {
  innerbox.style.backgroundColor = "#e0e0ff";
});

box.addEventListener("mouseleave", () => {
  innerbox.style.backgroundColor = "rgb(107, 107, 109)";
});
