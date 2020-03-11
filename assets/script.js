// Assigning variables
var day = moment().format("dddd") + " " + moment().format("h:mm a");
var hourCount = 0;
var inputArray = [];
var input = "";
var btnHour = ($(this).attr("data-name"));
// Re-creating Bootstrap components in a for loop, selecting each instance of each element per iteration and appending to them the succeeding elements and respective classes
for (i=0; i < 12; i++) {
  var hour = moment().add(i - 3, "hour").format("h a");
  hourCount ++;
  $(".container").append($("<div></div>").addClass("row"));
  $(".row:eq(" + i + ")").append($("<div></div>").addClass("col-md-1"), $("<div>").addClass("col-md-10"), $("<div></div>").addClass("col-md-1"));
  $(".col-md-10:eq(" + i + ")").append($("<div></div>").addClass("hourSlot"), $("<div>").addClass("input-group mb-3"));
  $(".mb-3:eq(" + i + ")").append($("<div>").addClass("input-group-prepend"), $("<input>").addClass("form-control").attr("type", "text").attr("aria-label", "Text input with checkbox"));
  $(".input-group-prepend:eq(" + i + ")").append($("<input>").addClass("btn btn-primary").attr("type", "submit").attr("value", "Save").attr("data-name", hour));
  $(".hourSlot:eq(" + i + ")").append(moment().add(i - 3, "hour").format("h a"));
  if (hourCount <= 3) {
    $(".form-control:eq(" + i + ")").css("background-color", "#cc5500")
  }
  else if (hourCount == 4) {
    $(".form-control:eq(" + i + ")").css("background-color", "#654321")
  }
  else if (hourCount > 4) {
    $(".form-control:eq(" + i + ")").css("background-color", "teal")
  }
};
// Button click saves input to local storage
$(".btn").on("click", function(){
  var input = $(this).parent().parent().find(":text").val();
  var btnHour = ($(this).attr("data-name"));
  if (inputArray) {
    inputArray = [];
    inputArray.push(input);
    localStorage.setItem(btnHour, JSON.stringify(inputArray));
  }
  console.log(inputArray);
});
// Establishing local storage default values
if (localStorage.getItem(btnHour) == null) {
  var defaultTM = "TM";
  inputArray.push(defaultTM);
  localStorage.setItem(btnHour, JSON.stringify(inputArray));
}
else {
  inputArray = JSON.parse(localStorage.getItem(btnHour));
}
console.log(inputArray);
// Getting header date/time onto page
$("#wrapWorkDay").append("<p></p>");
$("p:first").append(day);
$("p:first").addClass("time");
// Get local storage to paste back to the time-block it came from, tracking its hour



