function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById('clock').innerText = "Current Time: " + timeString;
}

setInterval(updateClock, 1000);

document.getElementById('setAlarmButton').addEventListener('click', function() {
    var alarmTime = document.getElementById('alarmTime').value;

    if (alarmTime) {
        setInterval(function() {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var currentTimeString = hours + ":" + minutes;

            if (currentTimeString === alarmTime) {
                alert("Alarm ring");
            }
        }, 1000);
    } else {
        alert("Please enter a valid time");
    }
});