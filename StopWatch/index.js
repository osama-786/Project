var hr = 00;
var min = 00;
var sec = 00;
var count=00;
var timer = false;
function start(color)
{
timer = true;
const digit = document.getElementById('hr');
const digit1 = document.getElementById('min');
const digit2 = document.getElementById('sec');
const digit3 = document.getElementById('count');
digit.style = `color:${color}`;
digit1.style = `color:${color}`;
digit2.style = `color:${color}`;
digit3.style = `color:${color}`;
Stopwatch();
}
function stop(color)
{
timer = false;
const digit = document.getElementById('hr');
const digit1 = document.getElementById('min');
const digit2 = document.getElementById('sec');
const digit3 = document.getElementById('count');
digit.style = `color:${color}`;
digit1.style = `color:${color}`;
digit2.style = `color:${color}`;
digit3.style = `color:${color}`;
}
function reset(color)
{
const digit = document.getElementById('hr');
const digit1 = document.getElementById('min');
const digit2 = document.getElementById('sec');
const digit3 = document.getElementById('count');
digit.style = `color:${color}`;
digit1.style = `color:${color}`;
digit2.style = `color:${color}`;
digit3.style = `color:${color}`;
timer = false;
hr=00;
min=00;
sec =00;
count=00;
document.getElementById("hr").innerHTML = "00";
document.getElementById("min").innerHTML = "00";
document.getElementById("sec").innerHTML = "00";
document.getElementById("count").innerHTML = "00";
}
function Stopwatch()
{
if (timer) {
count=count+1;

if (count==100) {
sec=sec+1;
count = 0;
}

if(sec==60)
{
min = min+1;
sec = 00;
}
if(min==60)
{
hr = hr+1;
min = 00;
sec =00;
}
var hr1 = hr;
var min1 = min;
var sec1 = sec;
var count1 = count;
if (hr < 10) {
    hr1 = "0" + hr1;
}

if (min < 10) {
    min1 = "0" + min1;
}
 
if (sec < 10) {
    sec1 = "0" + sec1;
}
if (count < 10) {
     count1 = "0" + count1;
}
    
document.getElementById("hr").innerHTML = hr1;
document.getElementById("min").innerHTML = min1;
document.getElementById("sec").innerHTML = sec1;
document.getElementById('count').innerHTML = count1;
setTimeout("Stopwatch()",10);
}
}