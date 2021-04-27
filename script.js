let seconds=0;
let minute=0;
let hour=0;

let displayseconds=0;
let displayminute=0;
let displayhour=0;
function stopwatch()
{
  seconds++
  if (seconds==60)
  {
  minute++
  seconds=0;
  }
  if(minute==60)
  {
    hour++;
    minute=0;
  }

  if(seconds<10)
  {
    displayseconds="0"+seconds.toString();
  }
  else
  {
    displayseconds=seconds;
  }
  if(minute<10)
  {
    displayminute="0"+minute.toString();
  }
  else
  {
    displayminute=minute;
  }
  if(hour<10)
  {
    displayhour="0"+hour.toString();
  }
  else
  {
    displayhour=hour;
  }
  document.getElementById("time").innerHTML=displayhour +":"+displayminute+":"+displayseconds
}
function time_start()
{
  interval=window.setInterval(stopwatch,1000);
}
function time_stop()
{
  clearInterval(interval);
}
function time_reset()
{
  seconds=minute=hour=0;
  document.getElementById("time").innerHTML="00:00:00"
}



