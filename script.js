var d = new Date();
    month = d.getMonth();
    date = d.getUTCDate();
    year = d.getFullYear();

    document.getElementById("currentDay").innerHTML =d;

    $(".saveBtn").on("click", function(){
        var input = document.getElementsByClassName("user-input");
    alert("do you want to save these changes?");
    localStorage.setItem("");
    text = localStorage.getItem("user-input");
    })

    
    
    
 