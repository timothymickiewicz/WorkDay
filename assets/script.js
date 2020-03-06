// Assigning variables
var day = moment().format("dddd") + " " + moment().format("h:mm:ss a");
var hour = moment().add(-6, 'hour').format("h:mm:ss a")
var hour2 = moment().add(-5, 'hour').format("h:mm:ss a")
var hour3 = moment().add(-4, 'hour').format("h:mm:ss a")
var hour4 = moment().add(-3, 'hour').format("h:mm:ss a")
var hour5 = moment().add(-2, 'hour').format("h:mm:ss a")
var hour6 = moment().add(-1, 'hour').format("h:mm:ss a")
var hour7 = moment().add(0, 'hour').format("h:mm:ss a")
var hour8 = moment().add(1, 'hour').format("h:mm:ss a")
var hour9 = moment().add(2, 'hour').format("h:mm:ss a")
var hour10 = moment().add(3, 'hour').format("h:mm:ss a")
var hour11 = moment().add(4, 'hour').format("h:mm:ss a")
var hour12 = moment().add(5, 'hour').format("h:mm:ss a")
var hour13 = moment().add(6, 'hour').format("h:mm:ss a")
var input ="";
// Getting time onto page
$("#wrapWorkDay").append("<p></p>");
$("p:first").append(day);
$("p:first").addClass("time");
$(".hourSlot:eq(0)").append(hour);
$(".hourSlot:eq(1)").append(hour2);
$(".hourSlot:eq(2)").append(hour3);
$(".hourSlot:eq(3)").append(hour4);
$(".hourSlot:eq(4)").append(hour5);
$(".hourSlot:eq(5)").append(hour6);
$(".hourSlot:eq(6)").append(hour7);
$(".hourSlot:eq(7)").append(hour8);
$(".hourSlot:eq(8)").append(hour9);
$(".hourSlot:eq(9)").append(hour10);
$(".hourSlot:eq(10)").append(hour11);
$(".hourSlot:eq(11)").append(hour12);
$(".hourSlot:eq(12)").append(hour13);
$(".btn").click(function() {
    input = $(":text").val()
    localStorage.setItem("tasks", input);
  });


