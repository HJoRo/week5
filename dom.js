/*i wanted to change the color of all elements with the same id, but after looking up why it wasn't working on stack overflow i found that each id would have to be unique so i used class name instead*/

var x = document.getElementsByClassName( "east" );
for( var i = 0; i < x.length; i++ ) {
    x[i].style.color='darkgreen';
}
var y = document.getElementsByClassName( "sw" );
for( var i = 0; i < y.length; i++ ) {
    y[i].style.color='peru';
}
var z = document.getElementsByClassName( "mw" );
for( var i = 0; i < z.length; i++ ) {
    z[i].style.color='firebrick';
}
//what i had before that wasn't working
//document.getElementById('east').style.color = "darkgreen";
//document.getElementById('sw').style.color = "peru";
//document.getElementById('mw').style.color = "firebrick";

//changing class name
var child = document.getElementsByClassName("states")[0].children;
child[1].className = "florida";

//changing text of last item on list
//i'm struggling with this part, i don't really understand the sibling properties
document.getElementById("changeNext").nextElementSibling.textContent = "Ohio";

//creating eventlistener
//this works in codepen but not in liveserver, i don't know why
document.getElementById("hideHam").addEventListener("click", function(){
    document.getElementById("hideMe").innerHTML = "";
});