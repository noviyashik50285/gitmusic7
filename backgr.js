const button0 = document.getElementById('butn0');
button0.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/stonehenge1.jpg)';

  obnulenie();
  document.querySelector('#vict1').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button1 = document.getElementById('butn1');
button1.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/stonehenge2.jpg)';

  obnulenie();
  document.querySelector('#vict1').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button2 = document.getElementById('butn2');
button2.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/stonehenge3.jpg)';

  obnulenie();
  document.querySelector('#vict1').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button3 = document.getElementById('butn3');
button3.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/stonehenge4.jpg)';

  obnulenie();
  document.querySelector('#vict1').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button4 = document.getElementById('butn4');
button4.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/trolltunga1.jpg)';

  obnulenie();
  document.querySelector('#vict2').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});
const button5 = document.getElementById('butn5');
button5.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/trolltunga2.jpg)';

  obnulenie();
  document.querySelector('#vict2').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button6 = document.getElementById('butn6');
button6.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/silfra1.jpg)';

  obnulenie();
  document.querySelector('#vict3').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button7 = document.getElementById('butn7');
button7.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/silfra2.jpg)';

  obnulenie();
  document.querySelector('#vict3').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button8 = document.getElementById('butn8');
button8.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/silfra3.png)';

  obnulenie();
  document.querySelector('#vict3').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button9 = document.getElementById('butn9');
button9.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/silfra4.jpg)';

  obnulenie();
  document.querySelector('#vict3').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button10 = document.getElementById('butn10');
button10.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/bagan1.jpg)';

  obnulenie();
  document.querySelector('#vict4').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button11 = document.getElementById('butn11');
button11.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/bagan2.jpg)';

  obnulenie();
  document.querySelector('#vict4').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button12 = document.getElementById('butn12');
button12.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/everest1.jpg)';

  obnulenie();
  document.querySelector('#vict5').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

const button13 = document.getElementById('butn13');
button13.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'url(back/everest2.jpg)';

  obnulenie();
  document.querySelector('#vict5').style.display = 'block'
  obnulenie2();
  this.style.color = 'blue';
});

var obnulenie = function(){
  document.querySelector('#vict1').style.display = 'none';
  document.querySelector('#vict2').style.display = 'none';
  document.querySelector('#vict3').style.display = 'none';
  document.querySelector('#vict4').style.display = 'none';
  document.querySelector('#vict5').style.display = 'none';
  return a=0;
}

var obnulenie2 = function(){
  button0.style.color = 'red';
  button1.style.color = 'red';
  button2.style.color = 'red';
  button3.style.color = 'red';
  button4.style.color = 'red';
  button5.style.color = 'red';
  button6.style.color = 'red';
  button7.style.color = 'red';
  button8.style.color = 'red';
  button9.style.color = 'red';
  button10.style.color = 'red';
  button11.style.color = 'red';
  button12.style.color = 'red';
  button13.style.color = 'red';
}

