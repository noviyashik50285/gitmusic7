//document.getElementById("knopa").style.display="none";
var a;
function show_hide()
{
if(a==1) {
    document.getElementById("victor").style.display="inline";
    return a=0;
}
else{
    document.getElementById("containerop1").style.display="none";
    document.getElementById("containerop2").style.display="none";
    document.getElementById("containerop3").style.display="none";
    document.getElementById("containerop4").style.display="none";
    document.getElementById("containerop5").style.display="none";
    return a=1;
}
}


