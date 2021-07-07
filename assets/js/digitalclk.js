//alert = (helloworld)
var cl=console.log;
var setDigitalClockDiv = document.getElementById("digitalClock");
function setDigitalClock(){
      var d = new Date();
      var hr = d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();
      var session = "AM";
        if(hr > 12){
          hr = hr-12;
          session = "PM";
        }
        //if(hr < 10)
        //{
        //hr = "0" + hr;
        //}
        //trnory operator
        hr = hr < 10 ? "0" + hr : hr;
        //if(min < 10){
        //min ="0" + min;
        //}
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        //if(sec < 10){
        //sec = "0" + sec;
        //}
        var result = hr+ " : " + min + " : " + sec + " " + session;
        cl(result);
        setDigitalClockDiv.innerHTML = result;
        setTimeout(setDigitalClock, 1000);
}
setDigitalClock();

function setZero(){
    return x = x < 10 ? "0" + x : x; 
}