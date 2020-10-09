var d = new Date();
    month = d.getMonth();
    date = d.getUTCDate();
    year = d.getFullYear();

    document.getElementById("currentDay").innerHTML =d;

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

  
  //localStorage.setItem("user", JSON.stringify(user));

  
  //var lastUser = JSON.parse(localStorage.getItem("user"));

    //$(".saveBtn").on("click", function(){
        //var input = document.getElementsByClassName("user-input");
    //alert("do you want to save these changes?");
    //})
    //function renderLastRegistered() {
       // var email = localStorage.getItem("user-input");
        //localStorage.setItem("email", email);
    
    
    
 