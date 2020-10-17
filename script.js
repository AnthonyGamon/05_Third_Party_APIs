var currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var sixPm = $("#6pm");
var sevenPm = $("#7pm");
var eightPm = $("#8pm");
var hour = moment().hours();

var interval = setInterval(function() {
  var timeNow = moment();
  $('#currentDay').html(timeNow.format('YYYY MMMM DD') + ' '
                      + timeNow.format('dddd')
                      .substring.toUpperCase());
  $('#currentDay').html(currentDate + " " + timeNow.format('hh:mm:ss A'));
});

function initPage() {

  console.log("Current Hour " + hour);
  var am9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(am9);

  var am10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(am10);
  
  var am11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(am11);
  
  var pm12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(pm12);
  
  var pm1 = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(pm1);
  
  var pm2 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(pm2);
  
  var pm3 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(pm3);
 
  var pm4 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(pm4);
  
  var pm5 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(pm5);
  
  var pm6 = JSON.parse(localStorage.getItem("06:00 pm"))
  sixPm.val(pm6);
  
  var pm7 = JSON.parse(localStorage.getItem("07:00 pm"))
  sevenPm.val(pm7);

  var pm8 = JSON.parse(localStorage.getItem("08:00 pm"))
  sevenPm.val(pm8);
} 

function background () {
      
  $(".form-control").each(function () {
      var checkTime = parseInt($(this).attr("id"));
      hour = parseInt(hour);
     

      if (hour > checkTime) {
          $(this).addClass("past");
      } else if (hour < checkTime) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
    initPage()
    background()

  

});