document.querySelector("#plusknap").addEventListener("click", function () {
  let dots = document.querySelector("#dots");
  let moreText = document.querySelector("#more");
  let button = document.querySelector("#plusknap");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.textContent = "+";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.textContent = "-";
    moreText.style.display = "inline";
  }
});
