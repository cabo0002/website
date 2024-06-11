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

document.querySelector("#plusknap_3").addEventListener("click", function () {
  let dots3 = document.querySelector("#dots_3");
  let moreText3 = document.querySelector("#more_3");
  let button3 = document.querySelector("#plusknap_3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    button3.textContent = "+";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    button3.textContent = "-";
    moreText3.style.display = "inline";
  }
});

document.querySelector("#plusknap_4").addEventListener("click", function () {
  let dots4 = document.querySelector("#dots_4");
  let moreText4 = document.querySelector("#more_4");
  let button4 = document.querySelector("#plusknap_4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    button4.textContent = "+";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    button4.textContent = "-";
    moreText4.style.display = "inline";
  }
});
