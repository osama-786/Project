let clock = document.querySelector('.clock')
function showTime() {
    let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	var am_pm = "AM";
	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
    clock.innerHTML = `${hour}:${min}:${sec}${am_pm}`;
    setTimeout(showTime, 1000);
}
showTime();

var date1 = new Date();
var currentdate = date1.toDateString(); 
document.getElementById("date").innerHTML=currentdate;
