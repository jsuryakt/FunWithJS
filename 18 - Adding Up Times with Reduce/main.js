const li = document.querySelectorAll("li");
const output = document.querySelector("#output");
let timeSum = 0;
li.forEach(timeEle => {
    const currVideoTime = timeEle.dataset["time"];
    if (currVideoTime) {
        timeSum += convertToSeconds(currVideoTime);
    }
});

const convertedTime = convertToHoursMinsSecs(timeSum);
output.innerHTML = `Total playlist duration is ${convertedTime}`;

// This will only consider hh:mm:ss and not days, weeks, years
// 12:23:48
// 52:12
// 5
function convertToSeconds(time) {
    const splitTime = time.split(":");
    const length = splitTime.length;
    if (length > 3) {
        throw new Error("SORRY WE DON'T SUPPORT THIS FORMAT " + time);
    }
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (length >= 1) {
        seconds = parseInt(splitTime[length - 1]);
        if (seconds < 0 || seconds >= 60) {
            throw new Error("OOPS!!! WRONG TIME FORMAT OR OUT OF SCOPE " + time);
        }
    }
    if (length >= 2) {
        minutes = parseInt(splitTime[length - 2]);
        if (minutes < 0 || minutes >= 60) {
            throw new Error("OOPS!!! WRONG TIME FORMAT OR OUT OF SCOPE " + time);
        }
    }
    if (length === 3) {
        hours = parseInt(splitTime[length - 3]);
        // if (hours < 0 || hours >= 24) {
        //     return "OOPS!!! WRONG TIME FORMAT OR OUT OF SCOPE " + time;
        // }
    }
    return hours * 3600 + minutes * 60 + seconds;
}

function pad2Zero(input) { return input.toString().padStart(2, '0')};

function convertToHoursMinsSecs(seconds) {
    // Calculate the total number of hours in the given number of seconds, floor ignores the point.
    const hours = Math.floor(seconds / 3600);

    // Calculate the total number of minutes in the given number of seconds.
    // The % operator gives the remainder after dividing by 3600, which gives the remaining seconds after accounting for the hours.
    // The result is then divided by 60 and rounded down to get the total number of minutes.
    const minutes = Math.floor((seconds % 3600) / 60);

    // Calculate the remaining seconds after accounting for the hours and minutes.
    const secs = seconds % 60;

    // Return a string that represents the given number of seconds in hours, minutes, and seconds.
    // The variables for hours, minutes, and seconds are interpolated into the string using template literals, separated by colons.
    return `${pad2Zero(hours)}h:${pad2Zero(minutes)}m:${pad2Zero(secs)}s`;
}

