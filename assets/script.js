// Assigning variables
var day = moment().format("dddd") + " " + moment().format("h:mm:ss a");
// Getting time onto page
$("#wrapWorkDay").append("<p></p>");
$("p:first").append(day);
$("p:first").addClass("time");

