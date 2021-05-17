'use strict';
$(function () {
  $("#btn").on("click", function () {
    
    let color = $("#msg").css("color");
    console.log(color);
    if ($("#msg").css("color")== "rgb(0, 0, 255)") {
      $("#msg").css("color", "rgb(255, 0, 0)");
    } else {
      $("#msg").css("color", "rgb(0, 0, 255)");
    }


  });
});