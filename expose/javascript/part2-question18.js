function timePerSecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var t=setInterval(timePerSecond,1000);