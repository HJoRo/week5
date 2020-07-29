//for this countdown i followed the w3schools guide

//set countdown date
var countdownDate = new Date("Jan 22, 2021 23:59:59").getTime();
//update countdown every second
var x = setInterval(function() {
    //get today's date and time
    var now = new Date().getTime();
    //find distance between now and countdown date
    var distance = countdownDate - now;
    //calculations for days, hours, minutes, and days
    //i think we did it differently in class, but since i was already following the w3schools guide, i just did what they did
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //display result in <p> tag
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    //text to display when countdown runs out
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Time to celebrate!";
    }
}, 1000);