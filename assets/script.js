// Assigning variables
var body = $("body");
var container = $(".container");
var newDiv = $("<div></div>");
var newInput = $("<input></input>");
var day = moment().format("dddd") + " " + moment().format("h:mm a");
var hourCount = 0;

for (i=0; i < 12; i++) {
  // Re-creating Bootstrap in a for loop, selecting each instance of each element per iteration and appending to them the succeeding elements
  hourCount ++;
  container.append($("<div></div>").addClass("row"));
  $(".row:eq(" + i + ")").append($("<div></div>").addClass("col-md-1"), $("<div>").addClass("col-md-10"), $("<div></div>").addClass("col-md-1"));
  $(".col-md-10:eq(" + i + ")").append($("<div></div>").addClass("hourSlot"), $("<div>").addClass("input-group mb-3"));
  $(".mb-3:eq(" + i + ")").append($("<div>").addClass("input-group-prepend"), $("<input>").addClass("form-control").attr("type", "text").attr("aria-label", "Text input with checkbox"));
  $(".input-group-prepend:eq(" + i + ")").append($("<input>").addClass("btn btn-primary").attr("type", "submit").attr("value", "Save"));
  $(".hourSlot:eq(" + i + ")").append(moment().add(i - 3, "hour").format("h a"));
  if (hourCount <= 3) {
    $(".form-control:eq(" + i + ")").css("background-color", "red")
  }
  else if (hourCount == 4) {
    $(".form-control:eq(" + i + ")").css("background-color", "green")
  }
  else if (hourCount > 4) {
    $(".form-control:eq(" + i + ")").css("background-color", "blue")
  }
};
// Establishing local storage variables
var input = "";
var inputArray = [];
// Getting date/time onto page
$("#wrapWorkDay").append("<p></p>");
$("p:first").append(day);
$("p:first").addClass("time");
// Saving the tasks to local storage on save click
$(".btn").click(function() {
    input = $(":text").val();
    console.log(input);
    inputArray = inputArray.push(input);
    console.log(inputArray[0]);
    localStorage.setItem("tasks", JSON.stringify(inputArray));
    parsedArray = JSON.parse(localStorage.getItem("tasks"));
  });
// Get local storage to paste back to the line it came from, tracking its hour
// Get lines background colors to change based on due times



