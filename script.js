document.querySelector("#plusknap_1").addEventListener("click", function () {
  let dots1 = document.querySelector("#dots_1");
  let moreText1 = document.querySelector("#more_1");
  let button1 = document.querySelector("#plusknap_1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    button1.textContent = "+";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    button1.textContent = "-";
    moreText1.style.display = "inline";
  }
});

document.querySelector("#plusknap_2").addEventListener("click", function () {
  let dots2 = document.querySelector("#dots_2");
  let moreText2 = document.querySelector("#more_2");
  let button2 = document.querySelector("#plusknap_2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    button2.textContent = "+";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    button2.textContent = "-";
    moreText2.style.display = "inline";
  }
});
