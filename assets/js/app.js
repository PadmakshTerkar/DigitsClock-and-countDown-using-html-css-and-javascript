// alert("Hello")

var cl = console.log;
var countDownDiv = document.getElementById("countDown");
//milli
//day = milli / 1000 *60 *60 *24
// hr = milli /1000 *60 *60
//min = milli /1000 * 60
//sec = milli /(1000)
//future date / >> 15 aug 2020
/*<div class="counter">
	<p>Days</p>
	<p>164</p>
</div>*/

function setCountDownTimer()
{
	var currentDay = new Date();
	var futureDay = new Date(2021, 7, 15);
	var diff = futureDay.getTime() - currentDay.getTime();
	
	
	var days =Math.floor((diff/(1000 * 60 * 60 * 24)));
	var hr =Math.floor((diff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
	var min =Math.floor((diff%(1000 * 60 * 60 ))/ (1000 *60));
	var sec =Math.floor((diff%(1000 *  60 ))/(1000));
	
	//<div class='counter'><p>Days</p><p>"+days+"</p></div>"

	var result = "<div class='counter'><p>Days</p><p>"+days+" </p></div>"
				+"<div class='counter'><p>Hrs</p><p> "+hr+"</p></div>"
				+"<div class='counter'><p>Min</p><p> "+min+"</p></div>"
				+"<div class='counter'><p>Sec</p><p> "+sec+"</p></div>";
			
			if(futureDay > currentDay)
			{
				countDownDiv.innerHTML = result;
			}else{
				
				countDownDiv.innerHTML = "<div class='counter'><p>Happy Independence Day</p></div>"
			}
			//cl(days, hr, min, sec);
}
setInterval(setCountDownTimer,1000);
//setCountDownTimer();