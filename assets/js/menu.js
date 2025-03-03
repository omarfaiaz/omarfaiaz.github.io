const menu = document.getElementById("menu");
const slider = document.getElementById("slider");

const close = document.getElementById("close_button");
var flag = true;
menu.addEventListener("click", () => {
  //   if (flag) {
  //     slider.style.display = "block";
  //     flag = false;
  //   } else {
  //     slider.style.display = "none";
  //     flag = true;
  //   }

  slider.style.display = "block";
});

close.addEventListener("click", () => {
  slider.style.display = "none";
});
