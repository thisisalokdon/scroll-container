function checkWorkingHours() {
    var now = new Date();
    var hours = now.getUTCHours() + 5; // Add 5 hours for Indian time zone offset
    var minutes = now.getUTCMinutes() + 30; // Add 30 minutes for Indian time zone offset

    if (minutes >= 60) {
        hours += 1;
        minutes -= 60;
    }

    var startHour = 11; // 11:00 AM
    var endHour = 18; // 6:00 PM

    if (hours > startHour || (hours == startHour && minutes >= 0)) {
        if (hours < endHour || (hours == endHour && minutes <= 0)) {
            document.getElementById("call-working").style.display = "none";
            return;
        }
    }

    document.getElementById("call-working").style.display = "flex";
}

checkWorkingHours();
setInterval(checkWorkingHours, 60000);
