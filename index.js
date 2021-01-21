const daysEl=document.getElementById("days");
//console.log(daysEl)
const hoursEl=document.getElementById("hours");
//console.log(hoursEl)
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const newYear="01-01-2021";
function countDown(){
    const newYearsDate=new Date(newYear);
    const currentDate=new Date();
const currentValue= (newYearsDate-currentDate)/1000;
const seconds=Math.floor(currentValue)%60;
const minutes=Math.floor(currentValue/60)%60;
const hours=Math.floor(currentValue/3600)%24;
const  days=Math.floor(currentValue/3600/24);
console.log(seconds);
console.log(minutes);
console.log(hours);
console.log(days);
console.log(daysEl)
daysEl.innerHTML=days;
hoursEl.innerHTML=hours;
minutesEl.innerHTML=minutes;
secondsEl.innerHTML=seconds;
}
countDown();
setInterval(countDown,1000)
