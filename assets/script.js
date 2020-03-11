// Assigning variables
var day = moment().format("dddd") + " " + moment().format("h:mm a");
var hourCount = 0;
var inputArray = [];
var input = "";
var btnHour = "random-key";
var keyText = [];
// Making a function to retrieve all keys from storage, evaluated from stack overflow
function allStorage() {
  var archiveKeys = [],
      keys = Object.keys(localStorage),
      i = 0, key;
  for (; key = keys[i]; i++) {
      archiveKeys.push(key + '=' + localStorage.getItem(key));
  }
  keyText = archiveKeys;
}
allStorage();
// Re-creating Bootstrap components in a for loop, selecting each instance of each element per iteration and appending to them the succeeding elements and respective classes
for (i=0; i < 12; i++) {
  var hour = moment().add(i - 3, "hour").format("h a");
  var inputField = $(":input");
  hourCount ++;
  $(".container").append($("<div></div>").addClass("row"));
  $(".row:eq(" + i + ")").append($("<div></div>").addClass("col-md-1"), $("<div>").addClass("col-md-10"), $("<div></div>").addClass("col-md-1"));
  $(".col-md-10:eq(" + i + ")").append($("<div></div>").addClass("hourSlot"), $("<div>").addClass("input-group mb-3"));
  $(".mb-3:eq(" + i + ")").append($("<div>").addClass("input-group-prepend"), $("<input>").addClass("form-control").attr("type", "text").attr("aria-label", "Text input with save button").attr("data-name-input", hour));
  $(".input-group-prepend:eq(" + i + ")").append($("<input>").addClass("btn btn-primary").attr("type", "submit").attr("value", "Save").attr("data-name", hour));
  $(".hourSlot:eq(" + i + ")").append(moment().add(i - 3, "hour").format("h a"));
  // This generates the text back to the input fields and matches to the correct input fields by manipulating the array "keyText" given from the allStorage function, this runs inside my content generating loop so that text is filled as needed if it meets the statement listed below
  for (j=0; j < keyText.length; j++) {
    var getIndex = keyText[j];
    // Everything before the = is put into the variable
    var timeSaved = getIndex.substr(0, getIndex.indexOf("="));
    // Everything between the " " is put into a variable
    var extractedText = getIndex.match(/"(.*?)"/);
    if (hour == timeSaved) {
      $(":text:eq(" + i + ")").val(extractedText[1]);
    }
  }
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
  input = $(this).parent().parent().find(":text").val();
  var btnHour = ($(this).attr("data-name"));
  if (inputArray) {
    inputArray = [];
    inputArray.push(input);
    localStorage.setItem(btnHour, JSON.stringify(inputArray));
  }
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
// Getting header date/time onto page
$("#wrapWorkDay").append("<p></p>");
$("p:first").append(day);
$("p:first").addClass("time");