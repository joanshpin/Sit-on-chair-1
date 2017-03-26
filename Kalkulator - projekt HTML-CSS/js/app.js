document.addEventListener('DOMContentLoaded', function(){
  console.log("dom");

var dropdown = document.querySelectorAll(".drop_down_list");
console.log(dropdown);
console.log(dropdown[0].classList.contains("listDisplayed"));

//event after clicking dropdown
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  var list = this.querySelector(".list_panel")
  list.classList.toggle("listDisplayed");
  var listItems = list.querySelectorAll("li")

    });
  };

  //choosing element from list
  if (dropdown[0].classList.contains("listDisplayed")) {
    console.log("kolor ma listDisplayed");
    for (var i = 0; i < listItems.length; i++) {
      this.addEventListener("click", function() {
        var selectedElement = document.querySelector("panel_left title color")
        selectedElement.innerText = this.innerText;
      });
    }
  }

  else if (dropdown[1].classList.contains("listDisplayed")) {

  }

  else if (dropdown[2].classList.contains("listDisplayed")) {

  }

}); // closing DOMContentLoaded



// var visiblePic = 0;
// mainPic[visiblePic].classList.add("visible");
//
// leftArrow.addEventListener("click", function() {
//   mainPic[visiblePic].classList.remove("visible");
//   visiblePic -= 1;
//
//   if (visiblePic < 0) {
//     visiblePic = mainPic.length-1;
//   }
//   mainPic[visiblePic].classList.add("visible");
//   })
//
// rightArrow.addEventListener("click", function() {
//   mainPic[visiblePic].classList.remove("visible");
//   visiblePic += 1;
//
//   if (visiblePic > mainPic.length-1) {
//     visiblePic = 0
//   }
//   mainPic[visiblePic].classList.add("visible");
//   });
