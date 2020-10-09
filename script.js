var d = new Date();
    month = d.getMonth();
    date = d.getUTCDate();
    year = d.getFullYear();

    document.getElementById("currentDay").innerHTML =d;

var saveButton = document.querySelector(".savebtn");

var nineInput = document.querySelector("#nine");
var tenInput = document.querySelector("#ten");
var elevenInput = document.querySelector("#eleven");
var twelveInput = document.querySelector("#twelve");
var thirteenInput = document.querySelector("#thirteen");
var fourteenInput  = document.querySelector("#fourteen");
var fifteenInput = document.querySelector("#fifteen");
var sixteenInput = document.querySelector("#sixteen");
var seventeenInput = document.querySelector("#seventeen");

var scheduler = {
    nineAM: nineInput.value.trim(),
    tenAM: tenInput.value.trim(),
    elevenAM: elevenInput.value.trim(),
    twelvePM: twelveInput.value.trim(),
    onePM: thirteenInput.value.trim(),
    twoPM: fourteenInput.value.trim(),
    threePM: fifteenInput.value.trim(),
    fourPM: sixteenInput.value.trim(),
    fivePM: seventeenInput.value.trim()
  };

  saveButton.addEventListener("click"); function renderSchedule(){
    localStorage.setItem("scheduler", JSON.stringify(scheduler));
    var scheduleDisplay = JSON.parse(localStorage.getItem("scheduler"));
  }
 
    
    
    
 