function realtimeClock()
{
    var rtClock =new Date();

    var hours=rtClock.getHours();
    var minutes=rtClock.getMinutes();
    var seconds=rtClock.getSeconds();

    //Add am and Pm system
    var amPm=(hours<12)? "AM": "PM";
    
    //convert the hours component to 12-hours format
    hours=(hours>12)? hours-12:hours;

    //pad the hours, minutes and seconds with leading zeros

    hours=("0"+hours).slice(-2);
    minutes=("0"+minutes).slice(-2);
    seconds=("0"+seconds).slice(-2);

    //display the clock
    document.getElementById('clock').innerHTML=hours +":"+minutes+":"+seconds+":"+amPm;
    var t=setTimeout(realtimeClock,500);
    

}

function changeBg()
{
    const images=[
       'url(images\1.jpg)',
       'url(images\2.jpg)',
       'url(images\3.jpg)',
       'url(images\4.jpg)',
    ]

    const header= document.querySelector('header')
    const bg= images[Math.floor(Math.random()* images.length)];
    header.style.backgroundImage=bg;
}

setInterval(changeBg, 1000)