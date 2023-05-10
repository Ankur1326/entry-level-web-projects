let allBtns = document.querySelectorAll(".tab");
console.log(allBtns);
// console.log(allBtns[2])

for (let i = 0; i < 3; i++) {
  console.log(allBtns[i]);

  allBtns[i].addEventListener("click", function () {
    let nowActive = this.classList.toggle("active");

    // if(nowActive) {
    show(i);
    // }
    // else{

    // }
  });
}

function show(x) {
  let mainSectionDiv = document.querySelectorAll(".main_section div");
  console.log(mainSectionDiv);

  if (x == 0) {
    mainSectionDiv[0].style.display = "block";
    mainSectionDiv[1].style.display = "none";
    mainSectionDiv[2].style.display = "none";

    allBtns[0].style.background = "red";
    allBtns[1].style.background = "#b0b0b0";
    allBtns[2].style.background = "#b0b0b0";

    console.log("1111");
  } else if (x == 1) {
    mainSectionDiv[0].style.display = "none";
    mainSectionDiv[1].style.display = "block";
    mainSectionDiv[2].style.display = "none";

    allBtns[0].style.background = "#b0b0b0";
    allBtns[1].style.background = "red";
    allBtns[2].style.background = "#b0b0b0";
    console.log("2222");
  } else if (x == 2) {
    mainSectionDiv[0].style.display = "none";
    mainSectionDiv[1].style.display = "none";
    mainSectionDiv[2].style.display = "block";

    allBtns[0].style.background = "#b0b0b0";
    allBtns[1].style.background = "#b0b0b0";
    allBtns[2].style.background = "red";
    console.log("3333");
  }
}
