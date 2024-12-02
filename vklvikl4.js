const makefon = document.getElementById("makefon");
const containerop1 = document.getElementById("containerop1");
const containerop2 = document.getElementById("containerop2");
const containerop3 = document.getElementById("containerop3");
const containerop4 = document.getElementById("containerop4");
const containerop5 = document.getElementById("containerop5");

makefon.addEventListener('click', function() {
    if (containerop1.style.backgroundColor == 'green' 
|| containerop2.style.backgroundColor == 'green'   
|| containerop3.style.backgroundColor == 'green'
|| containerop4.style.backgroundColor == 'green'
|| containerop5.style.backgroundColor == 'green')    
    
    {
        containerop1.style.backgroundColor = null;
        containerop2.style.backgroundColor = null;
        containerop3.style.backgroundColor = null;
        containerop4.style.backgroundColor = null;
        containerop5.style.backgroundColor = null;
    } else {
        containerop1.style.backgroundColor = 'green';
        containerop2.style.backgroundColor = 'green';
        containerop3.style.backgroundColor = 'green';
        containerop4.style.backgroundColor = 'green';
        containerop5.style.backgroundColor = 'green';
    }
});

