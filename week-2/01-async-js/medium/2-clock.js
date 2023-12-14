let hrs = new Date().getHours()
let mins = new Date().getMinutes()
let secs = new Date().getSeconds()

function format1(hrs, mins, secs) {
    console.log(`${hrs}:${mins}:${secs}`);
}

function format2(hrs, mins, secs) {
    if (hrs > 12) {
        hrs -= 12;
        console.log(`${hrs}:${mins}:${secs} PM`);
    }
    else {
        console.log(`${hrs}:${mins}:${secs} AM`);
    }
}

setInterval(function () {

    if (hrs == 23 && mins == 59 && secs == 59) {
        hrs = 0;
        mins = 0
        secs = 0
    } else if (hrs != 12 && mins == 59 && secs == 59) {
        hrs++
        mins = 0
        secs = 0
    }
    else if (hrs != 12 && mins != 59 && secs == 59) {
        mins++
        secs = 0
    }
    else if (hrs == 12 && mins == 59 && secs == 59) {
        hrs++;
        mins = 0;
        secs = 0;
    }
    else {
        secs++
    }
    format1(hrs, mins, secs);
    format2(hrs, mins, secs);
}, 1000);