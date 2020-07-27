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
//document.getElementsByClassName('east').style.color = "darkgreen";
//document.getElementsByClassName('sw').style.color = "peru";
//document.getElementsByClassName('mw').style.color = "firebrick";

//changing class name
var child = document.getElementsByClassName("states")[0].children;
child[1].className = "florida";

