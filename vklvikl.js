//document.getElementById("knopa").style.display="none";
var a;
function show_hide()
{
if(a==1) {
    document.getElementById("victor").style.display="inline";
    return a=0;
}
else{
    document.getElementById("vict1").style.display="none";
    document.getElementById("vict2").style.display="none";
    document.getElementById("vict3").style.display="none";
    document.getElementById("vict4").style.display="none";
    document.getElementById("vict5").style.display="none";
    return a=1;
}
}


